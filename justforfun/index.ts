import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("zh-cn")

/**
 * 收集生日在周末的年份
 * @param birthday 生日
 * @param start 开始年份
 * @param end 结束年份，默认为当前年份
 * @returns
 */
export function collectBirthdayInWeekends(
	birthday: string,
	start: number,
	end = dayjs().year()
) {
	console.log("语言：", dayjs.locale())
	console.log("时区：", dayjs.tz.guess())
	if (!birthday) return
	if (!birthday.match(/^\d{1,2}\-\d{1,2}$/g)) return
	if (typeof start !== "number" || typeof end !== "number") return
	if (start >= end) return

	const yearArr: number[] = []
	const yearObj: Record<number, string> = {}
	for (let year = start; year <= end; year++) {
		const weekday = dayjs(`${year}-${birthday}`).format("dddd")
		if (weekday === "星期六" || weekday === "星期日") {
			yearArr.push(year)
			yearObj[year] = weekday
		}
	}
	console.log("生日在周末的年份：", yearArr, `，一共有${yearArr.length}年`)
	console.log("生日在周末的年份集合", yearObj)
	return {
		array: yearArr,
		map: yearObj
	}
}
