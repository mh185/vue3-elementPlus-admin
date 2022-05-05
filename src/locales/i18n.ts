import { createI18n } from 'vue-i18n';
import en from "./en/en"
import zh from "./zh-cn/zh"

const i18n = createI18n({
    // 默认语言
    locale: 'en',
    // 关闭控制台警告
    silentFallbackWarn: true,
    // 设置语言环境
    messages: {
        'en': en,
        'zh': zh
    }

});

export default i18n;