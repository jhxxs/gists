/**
 * 用于生成wordle游戏结果截图并下载到本地
 */
;(async function () {
	// const app = document.querySelector("game-app")
	const gameApp = document.querySelector("game-app")
	const gameRow = gameApp.$board.querySelectorAll("game-row")

	// const radtio = 2
	// const { width, height } = gameApp.getBoundingClientRect()

	for (const row of gameRow) {
		const gameCol = row.$row.querySelectorAll("game-tile")
		for (const col of gameCol) {
			// 清空内容
			col.$tile.innerHTML = ""
		}
	}

	// 安装插件
	const installhtml2canvas = () =>
		new Promise((resolve) => {
			if (window["html2canvas"]) {
				resolve()
			} else {
				const html2canvasScript =
					"https://html2canvas.hertzen.com/dist/html2canvas.min.js"
				const script = document.createElement("script")
				script.src = html2canvasScript
				document.body.insertAdjacentElement("beforeend", script)
				script.onload = resolve
			}
		})

	await installhtml2canvas()
	const canvas = await html2canvas(gameApp.$board, {
		scale: 0.5,
		dpi: 300
	})
	// 创建一个 a 标签，并设置 href 和 download 属性
	const el = document.createElement("a")
	// 设置 href 为图片经过 base64 编码后的字符串，默认为 png 格式
	el.href = canvas.toDataURL()
	el.download = "文件名称"
	// 创建一个点击事件并对 a 标签进行触发
	const event = new MouseEvent("click")
	el.dispatchEvent(event)
	location.reload()
})()
