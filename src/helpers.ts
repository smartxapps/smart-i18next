import {getI18n} from 'react-i18next';

export const changeLanguage = async (lang: string) => {
  await getI18n().changeLanguage(lang);
};
