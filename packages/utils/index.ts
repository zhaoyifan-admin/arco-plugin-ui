/*
  value: 13位时间戳 | new Date() | Date()
  console.log(dateFormat(1680227496788, 'YYYY-MM-DD HH:mm:ss'))
  format => YY：年，M：月，D：日，H：时，m：分钟，s：秒，SSS：毫秒
*/
export function dateFormat (value: number|string|Date = Date.now(), format = 'YYYY-MM-DD HH:mm:ss'): string {
  if (typeof value === 'number' || typeof value === 'string') {
    var date = new Date(value)
  } else {
    var date = value
  }
  function fixedTwo (value: number): string {
    return value < 10 ? '0' + value : String(value)
  }
  let showTime = format
  if (showTime.includes('SSS')) {
    const S = date.getMilliseconds()
    showTime = showTime.replace('SSS', '0'.repeat(3 - String(S).length) + S)
  }
  if (showTime.includes('YY')) {
    const Y = date.getFullYear()
    showTime = showTime.includes('YYYY') ? showTime.replace('YYYY', String(Y)) : showTime.replace('YY', String(Y).slice(2, 4))
  }
  if (showTime.includes('M')) {
    const M = date.getMonth() + 1
    showTime = showTime.includes('MM') ? showTime.replace('MM', fixedTwo(M)) : showTime.replace('M', String(M))
  }
  if (showTime.includes('D')) {
    const D = date.getDate()
    showTime = showTime.includes('DD') ? showTime.replace('DD', fixedTwo(D)) : showTime.replace('D', String(D))
  }
  if (showTime.includes('H')) {
    const H = date.getHours()
    showTime = showTime.includes('HH') ? showTime.replace('HH', fixedTwo(H)) : showTime.replace('H', String(H))
  }
  if (showTime.includes('m')) {
    const m = date.getMinutes()
    showTime = showTime.includes('mm') ? showTime.replace('mm', fixedTwo(m)) : showTime.replace('m', String(m))
  }
  if (showTime.includes('s')) {
    const s = date.getSeconds()
    showTime = showTime.includes('ss') ? showTime.replace('ss', fixedTwo(s)) : showTime.replace('s', String(s))
  }
  return showTime
}
// @ts-ignore 兼容性requestAnimationFrame
export const requestAnimationFrame = typeof window !== 'undefined' ? (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame) : () => {}
// @ts-ignore 兼容性cancelAnimationFrame
export const cancelAnimationFrame = typeof window !== 'undefined' ? (window.cancelAnimationFrame || window.mozCancelAnimationFrame) : () => {}
/*
  使用 requestAnimationFrame 模拟 setTimeout 和 setInterval
  一共接收三个参数：
  fn: 延迟 delay ms后要执行的函数
  delay（可选）: 延迟的毫秒数，默认值0ms
  interval（可选）: 默认情况下 rafTimeout 等效于 setTimeout 功能，如果要使用 setInterval 功能，则需传入第三个参数（interval: true）

  返回值（用于取消 rafTimeout）：（object）raf: { id: number }
  取消 rafTimeout 定时器：cancelRaf(raf) 或者 cancelAnimationFrame(raf.id)
*/
export function rafTimeout (fn: Function, delay = 0, interval = false): object {
  // @ts-ignore
  const requestAnimationFrame = typeof window !== 'undefined' ? (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame) : () => {}
  let start: any = null
  function timeElapse (timestamp: number) {
    /*
      timestamp参数：与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻
    */
    if (!start) {
      start = timestamp
    }
    const elapsed = timestamp - start
    if (elapsed >= delay) {
      fn() // 执行目标函数func
      if (interval) { // 使用间歇调用
        start = null
        raf.id = requestAnimationFrame(timeElapse)
      }
    } else {
      raf.id = requestAnimationFrame(timeElapse)
    }
  }
  const raf = { // 引用类型保存，方便获取 requestAnimationFrame()方法返回的 ID.
    id: requestAnimationFrame(timeElapse)
  }
  return raf
}
// 用于取消 rafTimeout 函数
export function cancelRaf (raf: { id: number }): void {
  // @ts-ignore
  const cancelAnimationFrame = typeof window !== 'undefined' ? (window.cancelAnimationFrame || window.mozCancelAnimationFrame) : () => {}
  if (raf && raf.id) {
    cancelAnimationFrame(raf.id)
  }
}
// 节流函数throttle
export function throttle (fn: Function, delay = 300): any {
  let valid = true
  return function () {
    if (valid) {
      valid = false // 将函数置为无效
      rafTimeout(() => {
        fn()
        valid = true
      }, delay)
    }
    return false // valid为false时，函数不执行
  }
}
// 防抖函数debounce
export function debounce (fn: Function, delay = 300): any {
  let timer: any = null //借助闭包
  return function () {
    if (timer) {
      cancelRaf(timer)
    }
    timer = rafTimeout(fn, delay)
  }
}
// 消除js加减精度问题的加法函数
export function add (num1: number, num2: number): number {
  const num1DeciStr = String(num1).split('.')[1]
  const num2DeciStr = String(num2).split('.')[1]
  const maxLen = Math.max(num1DeciStr?.length || 0, num2DeciStr?.length || 0) // 两数中最长的小数位长度
  const num1Str = num1.toFixed(maxLen) // 补零，返回字符串
  const num2Str = num2.toFixed(maxLen)
  const result = +(num1Str.replace('.', '')) + +(num2Str.replace('.', '')) // 转换为整数相加
  return result / Math.pow(10, maxLen)
}
/*
  下载文件并自定义文件名
  url: 文件地址
  name: 自定义文件名，未传时，从文件地址中自动获取文件名称
*/
export function downloadFile (url: string, name: string) {
  let fileName = ''
  if (name) {
    fileName = name
  } else {
    const res = url.split('?')[0].split('/')
    fileName = res[res.length - 1]
  }
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    if (xhr.status === 200) {
      const blob = xhr.response
      const link = document.createElement('a')
      const body = document.querySelector('body')
      link.href = window.URL.createObjectURL(blob)
      link.download = fileName
      link.style.display = 'none'
      body?.appendChild(link)
      link.click()
      body?.removeChild(link)
      window.URL.revokeObjectURL(link.href)
    }
  }
  xhr.send()
}
/*
  自定义保留 precision 位小数，并使用 separator 分隔符进行数字格式化
  value：格式化目标数字
  precision：精度，保留小数点后几位，默认2位
  separator：千分位分隔符，默认为','
  decimal：小数点符号，默认'.'
  prefix：前缀字符，默认''
  suffix：后缀字符，默认''
  formatNumber(123456789.87654321, 2, ',') // 123,456,789.88
*/
export function formatNumber (value: number|string, precision = 2, separator = ',', decimal = '.', prefix = '', suffix = ''): string {
  if (Number(value) === 0) {
    return Number(value).toFixed(precision)
  }
  if (!value) {
    return ''
  }
  value = Number(value).toFixed(precision)
  value += ''
  const x = value.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? decimal + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  function isNumber (val: any) {
    return Object.prototype.toString.call(val) === '[object Number]'
  }
  if (separator && !isNumber(separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + separator + '$2')
    }
  }
  return prefix + x1 + x2 + suffix
}
/*
  在 <html> 根元素上动态切换 dark 模式，只在根元素添加 dark 类值，具体样式需自行添加
  // dark 主题样式参考如下：
  html {
    transition: filter .3s ease-in-out;
  }
  · invert(): 反转输入图像，1表示完全反转
  · hue-rotate(): 在输入图像上应用色相旋转
  html.dark { // 暗黑模式
    filter: invert(1) hue-rotate(180deg);
    img, video { // 将图片和视频再次反转以恢复原本的颜色
      filter: invert(1) hue-rotate(180deg);
    }
  }
*/
export function toggleDark () {
  // 如果 <html> 上 dark 类值已存在，则移除它，否则添加它
  document.documentElement.classList.toggle('dark')
}
// eslint-disable-next-line no-loss-of-precision
const pi = 3.1415926535897932384626;
// eslint-disable-next-line no-loss-of-precision
const x_pi = 3.14159265358979324 * 3000.0 / 180.0;
const a = 6378245.0;
// eslint-disable-next-line no-loss-of-precision
const ee = 0.00669342162296594323;

function transformLat(x, y) {
  let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y
      + 0.2 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
  return ret;
}

function transformLon(x, y) {
  let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1
      * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0
      * pi)) * 2.0 / 3.0;
  return ret;
}

function transform(lon, lat) {
  if (outOfChina(lon, lat)) {
    return new [lon, lat];
  }
  let dLat = transformLat(lon - 105.0, lat - 35.0);
  let dLon = transformLon(lon - 105.0, lat - 35.0);
  const radLat = lat / 180.0 * pi;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
  dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
  const mgLat = lat + dLat;
  const mgLon = lon + dLon;
  return [mgLon, mgLat];
}

function outOfChina(lon, lat) {
  if (lon < 72.004 || lon > 137.8347)
    return true;
  if (lat < 0.8293 || lat > 55.8271)
    return true;
  return false;
}

/**
 * 84 to 火星坐标系 (GCJ-02) World Geodetic System ==> Mars Geodetic System
 *
 * @param lat
 * @param lon
 * @return
 */
export function gps84_To_Gcj02(lon, lat) {
  if (outOfChina(lon, lat)) {
    return [lon, lat];
  }
  let dLat = transformLat(lon - 105.0, lat - 35.0);
  let dLon = transformLon(lon - 105.0, lat - 35.0);
  const radLat = lat / 180.0 * pi;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
  dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
  const mgLat = retain6(lat + dLat);
  const mgLon = retain6(lon + dLon);
  return [mgLon, mgLat];
}

/**
 * * 火星坐标系 (GCJ-02) to 84 * * @param lon * @param lat * @return
 * */
export function gcj02_To_Gps84(lon, lat) {
  const gps = transform(lon, lat);
  const mgLon = lon * 2 - gps[0];
  const mgLat = lat * 2 - gps[1];
  return [mgLon, mgLat];
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法 将 GCJ-02 坐标转换成 BD-09 坐标
 *
 * @param lat
 * @param lon
 */
export function gcj02_To_Bd09(lon, lat) {
  const x = lon, y = lat;
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  const mgLon = z * Math.cos(theta) + 0.0065;
  const mgLat = z * Math.sin(theta) + 0.006;
  return [mgLon, mgLat];
}

/**
 * * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法 * * 将 BD-09 坐标转换成GCJ-02 坐标 * * @param
 * bd_lat * @param bd_lon * @return
 */
function bd09_To_Gcj02(lon, lat) {
  const x = lon - 0.0065, y = lat - 0.006;
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
  const mgLon = z * Math.cos(theta);
  const mgLat = z * Math.sin(theta);
  return [mgLon, mgLat];
}

/**将gps84转为bd09
 * @param lat
 * @param lon
 * @return
 */
export function gps84_To_bd09(lon, lat) {
  const gcj02 = gps84_To_Gcj02(lon, lat);
  return gcj02_To_Bd09(gcj02[0], gcj02[1]);
}

export function bd09_To_gps84(lon, lat) {
  const gcj02 = bd09_To_Gcj02(lon, lat);
  const gps84 = gcj02_To_Gps84(gcj02[0], gcj02[1]);
  //保留小数点后六位
  gps84[0] = retain6(gps84[0]);
  gps84[1] = retain6(gps84[1]);
  return gps84;
}

/**保留小数点后六位
 * @param num
 * @return
 */
function retain6(num) {
  return parseFloat(num.toFixed(6));
}
  