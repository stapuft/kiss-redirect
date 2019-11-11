//==UserScript==
// @name Redirect kissanime
// @description Redirect .to to .ru, because the idiots that run the disqus refuse to change the website url.
// @include http://*.kissanime.to/*
// @include https://kissanime.to/*
// @run-at document-start
//==/UserScript==


(function () {
	'use strict';
	top.location.hostname = "kissanime.ru";
})();
