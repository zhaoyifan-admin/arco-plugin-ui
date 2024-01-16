import {createI18n} from 'vue-i18n';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
import LocalzhCN from '../table/local/zh-CN';
import zhTW from '@arco-design/web-vue/es/locale/lang/zh-tw';
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import LocalenUS from '../table/local/en-US';
import esES from '@arco-design/web-vue/es/locale/lang/es-es';
import jaJP from '@arco-design/web-vue/es/locale/lang/ja-jp';
import idID from '@arco-design/web-vue/es/locale/lang/id-id';
import frFR from '@arco-design/web-vue/es/locale/lang/fr-fr';
import ptPT from '@arco-design/web-vue/es/locale/lang/pt-pt';
import deDE from '@arco-design/web-vue/es/locale/lang/de-de';
import koKR from '@arco-design/web-vue/es/locale/lang/ko-kr';
import itIT from '@arco-design/web-vue/es/locale/lang/it-it';
import thTH from '@arco-design/web-vue/es/locale/lang/th-th';
import viVN from '@arco-design/web-vue/es/locale/lang/vi-vn';
import msMY from '@arco-design/web-vue/es/locale/lang/ms-my';
import kmKH from '@arco-design/web-vue/es/locale/lang/km-kh';

const i18n = createI18n({
    fallbackLocale: 'zh-CN', // 设置备用语言
    globalInjection: true,
    legacy: false, // you must specify 'legacy: false' option
    locale: 'zh-CN',
    messages: {
        'de-DE':{
            ...deDE
        },
        'en-US':{
            ...enUS,
            ...LocalenUS
        },
        'es-ES':{
            ...esES
        },
        'fr-FR':{
            ...frFR
        },
        'id-ID':{
            ...idID
        },
        'it-IT':{
            ...itIT
        },
        'ja-JP':{
            ...jaJP
        },
        'km-KH':{
            ...kmKH
        },
        'ko-KR':{
            ...koKR
        },
        'ms-MY':{
            ...msMY
        },
        'pt-PT':{
            ...ptPT
        },
        'th-TH':{
            ...thTH
        },
        'vi-VN':{
            ...viVN
        },
        'zh-CN':{
            ...zhCN,
            ...LocalzhCN
        },
        'zh-TW':{
            ...zhTW
        },
    },
});
export default i18n;