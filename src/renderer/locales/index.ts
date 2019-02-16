import en_US from  "./en-US.json";
import zh_CN from  "./zh-CN.json";

const locales = {
  "en": en_US,
  "zh-CN": zh_CN,
}

export default function getMessagesForLocale(locale: string) {
  return (locales as any)[locale];
};
