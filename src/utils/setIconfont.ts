// 字体图标 url
const cssCdnUrlList: Array<string> = [
  '//at.alicdn.com/t/c/font_2298093_rnp72ifj3ba.css',
  '//at.alicdn.com/t/c/font_3562472_d2i9a3sr5iv.css',
];
// 第三方 js url
const jsCdnUrlList: Array<string> = [];

// 动态批量设置字体图标
export function setCssCdn() {
  if (cssCdnUrlList.length <= 0) return false;
  cssCdnUrlList.forEach((v) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = v;
    link.crossOrigin = 'anonymous';
    document.getElementsByTagName('head')[0].appendChild(link);
  });
  return true;
}

// 动态批量设置第三方js
export function setJsCdn() {
  if (jsCdnUrlList.length <= 0) return false;
  jsCdnUrlList.forEach((v) => {
    const link = document.createElement('script');
    link.src = v;
    document.body.appendChild(link);
  });
  return true;
}

/**
 * 批量设置字体图标、动态js
 * @method cssCdn 动态批量设置字体图标
 * @method jsCdn 动态批量设置第三方js
 */
const setIntroduction = {
  // 设置css
  cssCdn: () => {
    setCssCdn();
  },
  // 设置js
  jsCdn: () => {
    setJsCdn();
  },
};

// 导出函数方法
export default setIntroduction;
