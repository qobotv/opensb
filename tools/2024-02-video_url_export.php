<?php
namespace OpenSB;

global $database;
define("SB_DYNAMIC_PATH", dirname(__DIR__) . '/dynamic');
define("SB_PRIVATE_PATH", dirname(__DIR__) . '/private');
define("SB_VENDOR_PATH", dirname(__DIR__) . '/vendor');
define("SB_GIT_PATH", dirname(__DIR__) . '/.git'); // ONLY FOR makeVersionString() IN SquareBracket CLASS.

require_once dirname(__DIR__) . '/private/class/common.php';

// 1708565417 is February 2024 (MCwETGfmUDu). It and everything posted beforehand has already been archived.
$videoData = $database->fetchArray($database->query("SELECT v.* FROM videos v WHERE v.post_type = 0 AND v.time > 1708565417 ORDER BY v.time DESC"));

$file = fopen(dirname(__DIR__) . "/tools/video_urls.txt", "w") or die("Can't open.");

foreach ($videoData as $video) {
	$name = "https://vz-1655021f-b55.b-cdn.net/" . $video["videofile"] . "/playlist.m3u8";
	print($name . PHP_EOL);
	fwrite($file, $name . PHP_EOL);
}