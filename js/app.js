!function(a){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=a,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/js/",s(s.s=25)}({25:function(e,t,a){"use strict";a.r(t);var r='<div id="mc_embed_signup"><form  action="//pingcap.us16.list-manage.com/subscribe/post?u=ab57beb8a88391cf6193c1b48&amp;id=7c67af4f9d"  method="post"  id="mc-embedded-subscribe-form"  name="mc-embedded-subscribe-form"  class="validate"  target="_blank"  novalidate>  <div id="mc_embed_signup_scroll">    <div class="form-inline">      <input        type="email"        value=""        name="EMAIL"        id="mce-EMAIL"        class="form-control"        placeholder="Subscribe to our newsletter"      />      <input        type="submit"        value="Subscribe"        name="subscribe"        id="mc-embedded-subscribe"        class="btn btn-subscribe f-tc"      />    </div>    <div id="mce-responses" class="clear">      <div        class="response"        id="mce-error-response"        style="display: none;"      ></div>      <div        class="response"        id="mce-success-response"        style="display: none;"      ></div>    </div>    <div style="position: absolute; left: -5000px;" aria-hidden="true">      <input        type="text"        name="b_ab57beb8a88391cf6193c1b48_7c67af4f9d"        tabindex="-1"        value=""      />    </div>  </div></form></div><script src="https://download.pingcap.com/js/mc-validate.js"><\/script>';function o(){var e,t,a,n=decodeURIComponent(location.hash);n&&($(".nav-tags").length&&"list"===$(".nav-tags").data("type")||location.href.search("#access_token")<0&&(e=n,t=$("header").height(),a=parseInt($(e).css("marginTop")),e&&$(e).offset()&&$("html, body").animate({scrollTop:$(e).offset().top-t-a},1e3)))}function c(){"en"==$("#search-input").data("lang")&&function(a,e){var t,n=new URLSearchParams(window.location.search),s=window.location.href,r=new RegExp("(v\\d+\\.\\d+|dev|stable)"),o=[],c=e.replace(/\//gi,"");s.match(r)&&(t=s.match(r)[0]);var i=a+"-"+t;if(n.has("q")){$("#search-input").val(n.get("q"));var l=algoliasearch("YTQ9N1XXRW","17e3740f6f5e5925ed393ae40710894f").initIndex(i);o=[];l.search(n.get("q"),{hitsPerPage:300,facetFilters:["docs_type:"+c]}).then(function(e){var t=e.hits,n=[];0==(o=t.filter(function(e){var t=e.hierarchy.lvl0;if(t&&!n.includes(t)){n.push(t);var a=Object.values(e.hierarchy).filter(function(e){return null!=e}).pop();return e.url=e.url.replace(/\#.*$/g,"#"+a.replace(/\s+/g,"-").replace(/[^-\w\u4E00-\u9FFF]*/g,"").toLowerCase()),e}})).length?"cn"==a?($("#search-result-title").append("搜索结果"),$("#search-results").append('<div class="search-category-result">                        <p>很抱歉，我们没有找到您期望的内容。</p>                        <ul>                        <li>请尝试其它搜索词，或者去 <a href="https://asktug.com/" target="_blank"> AskTUG</a> (TiDB User Group) 提问试试。</li>                        <li>如果您想搜索英文内容，请移步至<a href="https://pingcap.com/docs/">英文文档</a>进行搜索。</li>                        </ul>                      </div>')):"en"==a&&($("#search-result-title").append("Search Results"),$("#search-results").append('<div class="search-category-result">                        <p>Sorry. We couldn\'t find what you\'re looking for.</p>                        <ul>                        <li>If you\'ve come to pages of an unexpected language, go to <a href="https://pingcap.com/docs-cn/">Chinese documentation</a> and try again.</li>                        <li>If you do want to get some English content, <a href="https://pingcap.com/">PingCAP home page</a> might be a better place for you to go.</li>                        </ul>                      </div>')):($("#search-result-title").append("en"==a?"Search Results":"搜索结果"),$("#search-results").append(o.map(function(e){return'<div class="search-category-result">                      <a href="'+e.url+'" target="_blank"><h1 class="search-category-title">'+e.hierarchy.lvl0+'</h1></a><div class="item-link">'+e.url+'</div>                        <div class="search-result-item">'+(500<e._highlightResult.content.value.length?e._snippetResult.content.value:e._highlightResult.content.value)+"</div></div>"}).join(""))),$(".search-category-result").length&&$(".lazy").css("display","none")})}else"cn"==a?$("#search-result-title").append("搜索结果"):"en"==a&&$("#search-result-title").append("Search Results"),$("#search-results").append('<div class="search-category-result">      </div>'),$(".search-category-result").length&&$(".lazy").css("display","none")}($("#search-input").data("lang"),$("#search-input").data("type")),$("#search-input").focusout(function(){$(".ds-dropdown-menu").hide()}),$("#search-input").change(function(e){e.preventDefault(),e.target&&e.target.value&&$(".ds-dropdown-menu").show()})}function i(){var e=$(this).scrollTop(),t=$("header").height();$("body.banner-active")&&t<=e&&$("body.banner-active").addClass("banner-active--scrolled"),$("body.banner-active--scrolled")&&e<t&&$("body").removeClass("banner-active--scrolled"),200<e?$(".back-to-top").addClass("show"):$(".back-to-top").removeClass("show")}console.log("🦊 Hello! @PingCAP website"),$(document).ready(function(){var n,s,e;o(),"cn"===$("body").data("lang")&&(window.matchMedia("(max-width: 879px)").matches?$(r).appendTo("#subscribe-mobile"):$(r).appendTo("#subscribe-pc"),window.fnames=new Array,window.ftypes=new Array,fnames[0]="EMAIL",ftypes[0]="email",fnames[1]="FNAME",ftypes[1]="text",fnames[2]="LNAME",ftypes[2]="text"),s=[],$.ajax({url:"https://pingcap.com/api/tidb-contributors",crossDomain:!0,success:function(e){if(window.tidbContributors=e.data,e.data){for(var t,a=(n=e.data.length).toString().length;0<a;a--)t=parseInt(n/Math.pow(10,a-1)),n%=Math.pow(10,a-1),s.push(t);$("#tidb-contributor-count").append(s.map(function(e){return'<div class="numb">                <p>'+e+"</p>              </div>"}))}}}),$(window).on("hashchange",o),$(window).scroll(i),$(".homepage").length&&(e=$(".release-banner").data("release"),"undefined"!=typeof Storage&&localStorage.getItem("release-version-".concat(e))||$(".homepage").addClass("banner-active"),$(".release-banner__close").click(function(e){if($("body.banner-active")&&$("body").removeClass("banner-active"),"undefined"!=typeof Storage){var t=$(".release-banner").data("release");localStorage.setItem("release-version-".concat(t),t)}e.preventDefault()})),c(),$("#wechat").click(function(e){e.preventDefault(),$("#wechat .qr_code_outer").toggleClass("f-hide")}),$("#wechat-mobile").on("touchstart",function(e){e.preventDefault(),$("#wechat-mobile .qr_code_outer").toggleClass("f-hide")}),$(".tidb-planet-robot, .contact-us-hack19").click(function(e){e.preventDefault(),$(".qr-tooltiptext").toggleClass("f-hide")}),$(".tidb-planet-robot").on("touchstart",function(e){e.preventDefault(),$(".qr-tooltiptext").toggleClass("f-hide")}),$(".nav-btn.nav-slider").click(function(){$(".overlay").show(),$("nav").toggleClass("open")}),$(".overlay").click(function(){$("nav").hasClass("open")&&$("nav").removeClass("open"),$(this).hide()}),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},800),!1}),window.matchMedia("(max-width: 500px)").matches&&$(".docs-type-selector").click(function(){"none"==$(".header-dropdown-menu").css("display")?$(".header-dropdown-menu").css("display","block"):$(".header-dropdown-menu").css("display","none")})})}});