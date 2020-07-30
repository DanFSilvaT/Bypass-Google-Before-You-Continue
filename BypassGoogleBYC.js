// ==UserScript==
// @name				Bypass Google's "Before You Continue"
// @namespace		https://github.com/Dilxe/
// @version			1
// @description	Bypasses Google's "Before You Continue" confirmation dialog that stops the user from "using it's services" by redirecting the same search to another Google domain. (Only tested on Firefox)
// @author			Dilxe 
// @include     http*://www.google.*/*
// @exclude			http*://www.google.com/recaptcha/*
// @include     http*://www.google.co*.*/*
// @include     http*://news.google.*/*
// @include     http*://encrypted.google.*/*
// @grant				none
// @run-at			document-end
// ==/UserScript==

function Be4UContnu()
{
  var checkBYC = document.getElementById("lb");
  var searchQuery = document.URL.split("/",4);
  let googleDomains = ['.co.jp', '.co.uk', '.ru', '.es', '.pt', '.td', '.cn', '.g.cn', '.ch', '.de', '.co.cr', '.com.cu', '.fr', '.com.hk', '.ie', '.co.kr', '.com.mx', '.ne', '.com.ng', '.no', '.co.nz', '.pl', '.co.ve', '.com.ua']
  

  if (checkBYC.hasChildNodes())
    window.location.replace("https://www.google" + googleDomains[Math.floor(Math.random() * googleDomains.length)] + "/" + searchQuery[searchQuery.length-1]);
}

Be4UContnu();
