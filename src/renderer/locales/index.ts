import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import en_US from  "./en-US.json";
import zh_CN from  "./zh-CN.json";

export const locales = {
  "en": en_US,
  "zh-CN": zh_CN,
}

export const getMessagesForLocale = (locale: string) => {
  return (locales as any)[locale];
};


function mapStateToProps(state: any) {
  const { locale } = state.intl;
  return { locale: locale, key: locale, messages: getMessagesForLocale(locale) };
}

export const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);
