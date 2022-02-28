/**
 * @description 数字添加千分位
 * @param {Number} strNum
 * @returns 添加千分位后的字符串
 */
const formatNum = strNum => {
  if (strNum.length <= 3) {
    return strNum
  }
  if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
    return strNum
  }
  const a = RegExp.$1
  let b = RegExp.$2
  const c = RegExp.$3
  const re = new RegExp()
  re.compile('(\\d)(\\d{3})(,|$)')
  while (re.test(b)) {
    b = b.replace(re, '$1,$2$3')
  }
  return `${a}${b}${c}`
}

export default formatNum
