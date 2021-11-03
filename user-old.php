<?php
require('lib/common.php');
use ScssPhp\ScssPhp\Compiler;

$username = (isset($_GET['name']) ? $_GET['name'] : null);

$userPageData = fetch("SELECT * FROM users WHERE name = ?", [$username]);

$latestVideoData = query("SELECT $userfields v.* FROM videos v JOIN users u ON v.author = u.id WHERE v.author = ? ORDER BY v.id DESC LIMIT 15", [$userPageData['id']]);

$scss = new Compiler();
$scss->setImportPaths($_SERVER['DOCUMENT_ROOT']);
$css = $scss->compile(
	'$color: '.$userPageData['customcolor'].';
	@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
		background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
	}
	@mixin text-contrast($n) {
		$color-brightness: round((red($n) * 299) + (green($n) * 587) + (blue($n) * 114) / 1000);
		$light-color: round((red(#ffffff) * 299) + (green(#ffffff) * 587) + (blue(#ffffff) * 114) / 1000);

		@if abs($color-brightness) < ($light-color/2){
			color: white;
		}

		@else {
			color: black;
		}
	}
	.bg-custom-profile {
		@include gradient-y-three-colors(darken($color, 0%), darken($color, 7%), 50%, darken($color, 15%));
		@include text-contrast($color);
	}
	.bg-primary {
		@include gradient-y-three-colors(lighten($color, 8%), $color, 60%, darken($color, 4%));
	}'
);

if (isset($userdata)) {
	$subscribed = result("SELECT COUNT(user) FROM subscriptions WHERE id=? AND user=?", [$userdata['id'], $userPageData['id']]);
} else {
	$subscribed = 0;
}

$subCount = fetch("SELECT COUNT(user) FROM subscriptions WHERE user = ?", [$userPageData['id']])['COUNT(user)'];

$twig = twigloader();

echo $twig->render('user.twig', [
'user' => $userPageData,
'latestVideos' => $latestVideoData,
'profCss' => $css,
'edited' => (isset($_GET['edited']) ? true : false),
'subscribed' => $subscribed,
'subCount' => $subCount
]);