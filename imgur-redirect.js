// ==UserScript==
// @license      MIT
// @name         imgur图片镜像换源
// @namespace    http://tampermonkey.net/
// @version      2024-03-05
// @description  imgur图片镜像换源,通过镜像服务器换源预览
// @author       snow win
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @downloadURL
// @updateURL
// ==/UserScript==


(function() {
    'use strict';

    let is_add = false;
    // const prefix_img = "https://img.noobzone.ru/getimg.php?url=";
    const proxy = "https://i0.wp.com/s."
    const images = document.getElementsByTagName("img");
    [...images].forEach((image, ) => {
        if(image.src.indexOf("imgur") == -1) return
        if(!is_add) {
            const meta = document.createElement('meta');
            meta.setAttribute('name', 'referrer');
            meta.setAttribute('content', 'no-referrer');

            document.getElementsByTagName('head')[0].appendChild(meta);
            is_add = true;
        }
        const aElement = image.parentNode;
        const src = proxy + image.src.match(/imgur.com\/.*/)[0]
        if(null != aElement && aElement.href == image.src){
            aElement.href = src;
        }
        image.src = src
    })
})();