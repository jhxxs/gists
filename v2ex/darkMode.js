// ==UserScript==
// @name         V2 dark mode hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.v2ex.com
// @grant        none
// ==/UserScript==

;(function () {
	"use strict"

	const wrapper = document.querySelector("#Wrapper")
	const style = document.createElement("style")
	const img =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUVCOUUzODRFMDg2MTFFQkExMENFMDc2RTQ0NDBBRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUVCOUUzODVFMDg2MTFFQkExMENFMDc2RTQ0NDBBRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRUI5RTM4MkUwODYxMUVCQTEwQ0UwNzZFNDQ0MEFFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRUI5RTM4M0UwODYxMUVCQTEwQ0UwNzZFNDQ0MEFFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PllWB1wAAABZSURBVHjaYhQQEGhgYGCoZyAOdDBzcHAcADIYgdiBgOIeIK4EaQBxCGnqBuIyIP4P04BPE0wxGCBrgGn6D8SOUH4nEJcjK0DXAAIHgVgQiC8DcT66JECAAQDM6A5dSDEk8AAAAABJRU5ErkJggg=="
	if (wrapper) {
		const list = wrapper.classList
		for (let i of list) {
			if (i == "Night") {
				document.head.appendChild(style)
				style.type = "text/css"
				const text = `
                div#closeReply {
                    background: #18222d;
                    color: #d1d5d9;
                    box-shadow: rgb(0, 0, 0) 0px 0px 20px;
                }
                p.bubbleName, p.bubbleTitle {
                    border-top: 1px solid #22303f !important;
                }
                img.triangle {
                    background: url(${img}) !important;
                }
                `
				const styleText = document.createTextNode(text)
				style.appendChild(styleText)
				setTimeout(() => {
					const triangle = document.querySelector("img.triangle")
					if (triangle) {
						triangle.src = ""
					}
				}, 0)
				break
			} else {
				document.removeChild(style)
			}
		}
	} else {
		document.removeChild(style)
	}
	// if (/toggle-dark\.png/.test(src)) {

	// 	const triangle = document.querySelector("img.triangle")
	// 	const triangleStyle = triangle.style.cssText
	// 	triangleStyle += "border:;"
	// }
})()
