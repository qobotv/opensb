<?php

namespace OpenSB\class\Core;

use OpenSB\class\CoreClasses;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\DebugExtension;
use Twig\Extra\String\StringExtension;
use Twig\Loader\FilesystemLoader;
use Twig\TwigFunction;

/**
 * Templating
 */
class Templating
{
    private $skin;
    private $theme;
    private FilesystemLoader $loader;
    private Environment $twig;
    private Database $database;
    private Authentication $auth;

    /**
     * @throws LoaderError
     */
    public function __construct(array $options, Database $database, Authentication $auth)
    {
        chdir(SB_PRIVATE_PATH);

        // TEMPORARY
        $isChazizSB = false;
        $isDebug = false;
        $branding = [
            "name" => "FIXME BRANDING",
            "assets_location" => "/assets/placeholder",
        ];
        $enableInviteKeys = false;
        $enableCache = false;

        $this->database = $database;
        $this->auth = $auth;

        $this->skin = $options["skin"] ?? "biscuit";
        $this->theme = $options["theme"] ?? "default";

        //if ($this->skin === null || trim($this->skin) === '' || !is_dir('skins/' . $this->skin . '/templates')) {
        if ($this->skin === null || trim($this->skin) === '') {
            trigger_error("Currently selected skin is invalid", E_USER_WARNING);
            $this->skin = "biscuit";
        }

        $skinPath = 'skins/' . $this->skin;

        // get metadata so that we can check if the skin is actually intended for squarebracket
        $metadata = $this->getSkinMetadata($skinPath);

        // if this skin is not meant for squarebracket, don't load.
        if ($metadata["metadata"]["site"] != "squarebracket") {
            trigger_error("Currently selected skin is invalid", E_USER_WARNING);
            $this->skin = "biscuit";
        }

        $templatePath = $skinPath . '/templates';

        $this->loader = new FilesystemLoader($templatePath);

        $doCache = !$enableCache ? false : 'skins/cache/';

        $this->loader->addPath('skins/common/');
        $this->twig = new Environment($this->loader, ['debug' => $isDebug, 'cache' => $doCache]);

        $this->twig->addFunction(new TwigFunction('component', function($component) use ($templatePath) {
            $path = '/components/' . $this->theme . '/' . $component . '.twig';
            $path_default = '/components/default/' . $component . '.twig';

            if (file_exists(SB_PRIVATE_PATH . '/' . $templatePath . $path)) {
                return $path;
            } elseif (file_exists(SB_PRIVATE_PATH . '/' . $templatePath . $path_default)) {
                return $path_default;
            } else {
                return '/missing_component.twig';
            }
        }));

        $this->twig->addExtension(new TemplatingTwigExtension($database, $auth));
        $this->twig->addExtension(new StringExtension());

        // BOOTSTRAP SQUAREBRACKET FRONTEND COMPATIBILITY
        $this->twig->addFunction(new TwigFunction('icon', function($icon, $size) {
            return $this->render('components/icon.twig', ['icon' => $icon, 'size' => $size]);
        }, ['is_safe' => ['html']]));
        // ---------------------------

        if ($isDebug) {
            $this->twig->addExtension(new DebugExtension());
        } else {
            $this->twig->addFunction(new TwigFunction('dump', function() {
                return "This function is not available outside of debug mode.";
            }));
        }

        // override squarebracket branding with fulptube branding if accessed via fulptube.rocks.
        // this fulptube branding is meant to look like the squarebracket branding on purpose, since
        // both squarebracket.pw and fulptube.rocks lead to the same site.
        if (Utilities::isFulpTube()) {
            $isFulpTube = true;
            $branding = [
                "name" => "FulpTube",
                "assets_location" => "/assets/sb_branding/fulp",
            ];
        } else {
            $isFulpTube = false;
            // custom branding for themes. for that Extra Accuracy™.
            if ($isChazizSB) {
                if ($this->skin == "finalium" && $this->theme == "beta") {
                    $branding["name"] = "cheeseRox";
                } elseif ($this->skin == "finalium" || $this->skin == "bootstrap") {
                    $branding["name"] = "squareBracket";
                }
            }
        }

        $warningBannerTextIfOnChazizOwnedDomain = "Warning banner text";

        if ($isChazizSB) {
            $showWarningBanner = true;
            $warningBannerText = $warningBannerTextIfOnChazizOwnedDomain;
        } else {
            $showWarningBanner = false;
            $warningBannerText = null;
        }

        $versionNumber = new VersionNumber;

        $this->twig->addGlobal('is_chaziz_sb', $isChazizSB);
        $this->twig->addGlobal('is_fulptube', $isFulpTube);
        $this->twig->addGlobal('is_debug', $isDebug);
        $this->twig->addGlobal('is_user_logged_in', $auth->isUserLoggedIn());
        $this->twig->addGlobal('user_data', $auth->getUserData());
        $this->twig->addGlobal('user_ban_data', $auth->getUserBanData());
        $this->twig->addGlobal('user_notice_data', $auth->getUserNoticesCount());
        $this->twig->addGlobal('user_is_admin', $auth->isUserAdmin());
        $this->twig->addGlobal('user_is_authenticated_admin', $auth->hasUserAuthenticatedAsAnAdmin());
        $this->twig->addGlobal('skins', $this->getAllSkinsMetadata());
        $this->twig->addGlobal('opensb_version', $versionNumber->getVersionNumber());
        $this->twig->addGlobal('session', $_SESSION);
        $this->twig->addGlobal('website_branding', $branding);
        $this->twig->addGlobal('current_theme', $this->theme); // not to be confused with skins
        $this->twig->addGlobal('invite_keys_enabled', $enableInviteKeys);
        $this->twig->addGlobal('items_per_page', 20);
        // shit
        $this->twig->addGlobal('current_skin_and_theme', $this->skin . ',' . $this->theme);
        $this->twig->addGlobal('show_warning_banner', $showWarningBanner);
        $this->twig->addGlobal('warning_banner_text', $warningBannerText);
        $this->twig->addGlobal('is_opensb_v2', true);
        $this->twig->addGlobal('is_opensb_v1_3', true);

        /*
        if ($this->skin == "finalium" && $this->theme == "beta")
        {
            $db = $orange->getDatabase();
            $footerstats = $db->fetch("SELECT (SELECT COUNT(*) FROM users) users, (SELECT COUNT(*) FROM uploads) submissions");
            $this->twig->addGlobal('footer_stats', $footerstats);
        }
        */

        if (isset($_SERVER["REQUEST_URI"])) {
            $uri = explode('?', $_SERVER["REQUEST_URI"])[0];

            $uriParts = explode('/', trim($uri, '/'));
            $pageName = $uriParts[0] ?? 'index';

            $this->twig->addGlobal('page_name', $pageName);
        }

        if (isset($_SERVER['HTTP_HOST'])) {
            $this->twig->addGlobal("page_url", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
            $this->twig->addGlobal("domain", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/");
        }
    }

    /**
     * Get all the available skins.
     *
     *
     * @return string[]
     */
    public function getAllSkins(): array
    {
        global $externalSkins;

        $skins = [];
        $unfiltered_skins = glob('skins/*', GLOB_ONLYDIR);

        // include every skin except "common", "cache" and "error" since those arent skins.
        foreach($unfiltered_skins as $skin) {
            if ($skin != "skins/common" && $skin != "skins/cache" && $skin != "skins/error") {
                $skins[] = $skin;
            }
        }

        return $skins;
    }

    /**
     * Get the skin's JSON metadata.
     * @param $skin
     * @return array|null
     */
    public function getSkinMetadata($skin): ?array
    {
        if (file_exists($skin . "/skin.json")) {
            $metadata = file_get_contents($skin . "/skin.json");
        } else {
            trigger_error(sprintf("The metadata for OpenSB skin %s is missing", $skin), E_USER_WARNING);
            return null;
        }
        return json_decode($metadata, true);
    }

    public function getAllSkinsMetadata(): array
    {
        global $isDebug;
        $skins = [];
        foreach($this->getAllSkins() as $skin) {
            $metadata = $this->getSkinMetadata($skin);
            // only list squarebracket skins since soos skins will Not work with orange opensb
            //$site = $metadata["metadata"]["site"] ?? "unknown";
            //if ($site == "squarebracket") {
            $incomplete = $isDebug ? false : ($metadata["metadata"]["incomplete"] ?? false);
            // dont show incomplete skins
            if (!$incomplete) {
                $skins[] = $metadata;
            }
            //}
        }

        // sort by metadata name
        usort($skins, function ($a, $b) {
            return strcmp($a["metadata"]["name"], $b["metadata"]["name"]);
        });

        return $skins;
    }

    /**
     *
     * @param $template
     * @param array $data
     * @return void
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     *
     */
    public function render($template, array $data = []): void
    {
        $this->twig->display($template, $data);
    }
}

