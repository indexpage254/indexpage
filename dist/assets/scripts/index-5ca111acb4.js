"use strict";!function(){var d=["https://tf.chuangm23.cn/tf/api/GjKCQnf-3","https://testflight.apple.com/join/J4nleJHK"],e="https://tbr.gg/",c={1:"一",2:"二",3:"三"};try{var t=window.matchMedia("(max-width: 479px)").matches;t||(new Bideo).init({videoEl:document.querySelector("#background_video"),container:document.querySelector("body"),resize:!0,isMobile:t,src:[{src:"./assets/static/video/video.mp4",type:"video/mp4"}],onLoad:function(){document.querySelector("#video_cover_pc").style.display="none"}})}catch(e){console.error("无法创建视频元素",e.message)}for(var n=document.querySelectorAll(".pcHref"),o=0;o<n.length;o++)n[o].addEventListener("click",function(){window.location.href="https://gitee.com/soak111/t2"});new QRCode(document.getElementById("scan_box_android"),{text:e,width:200,height:200}),new QRCode(document.getElementById("scan_box_ios"),{text:e,width:200,height:200});for(var i=document.querySelectorAll(".a_t_b"),l=document.querySelectorAll(".i_t_b"),a=function(e,t){var n=t?"inherit":"none",o=t?"visible":"hidden",t=document.getElementById("overlay");if((t.style.display=n,"ios"===e)&&(t.style.display=n,document.getElementById("i_t_box").style.visibility=o,1===document.getElementById("ios_down_aisle_box").children.length))for(var i=0;i<d.length;i++)!function(e){var t="ios_down_aisle_".concat(e,"_btn"),n=document.createElement("div");n.setAttribute("id",t),n.innerText="通道".concat(c[e+1]),document.getElementById("ios_down_aisle_box").appendChild(n),document.getElementById(t).addEventListener("click",function(){window.location.href=d[e]})}(i);"android"===e&&(document.getElementById("a_t_box").style.visibility=o)},s=function(e,t){for(var n=document.querySelectorAll(t),o=0;o<n.length;o++)n[o].addEventListener("click",function(){a(e,!1)})},r=0;r<i.length;r++)i[r].addEventListener("click",function(){a("android",!0),s("android",".a_close_btn")});for(var m=0;m<l.length;m++)l[m].addEventListener("click",function(){a("ios",!0),s("ios",".a_close_btn")});var t=document.getElementById("a_d_b_m"),e=document.getElementById("i_d_b_m"),u=document.getElementById("loading");t.addEventListener("click",function(){u.style.display="block",window.location.href="https://by.zykapk.com/assets/tbr/app.apk",setTimeout(function(){u.style.display="none"},2e3)}),e.addEventListener("click",function(){a("ios",!0),s("ios",".a_close_btn")})}();