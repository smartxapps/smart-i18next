import React, {PropsWithChildren, Suspense, useMemo} from 'react';
import {I18nextProvider, initReactI18next, setI18n} from 'react-i18next';
import {createInstance, InitOptions} from 'i18next';

import backend from 'i18next-http-backend/cjs';
import LanguageDetector from 'i18next-browser-languagedetector';

const options: InitOptions = {
  interpolation: {
    escapeValue: false,
  },
} as InitOptions;

const createI18nInstance = (config: Partial<InitOptions>) => {
  const instance = createInstance();

  instance
    .use(backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({...options, ...config})
    .then(() => {
      initReactI18next.init(instance);
      setI18n(instance);
    });

  return instance;
};

export default function I18nextWrapper(
  props: PropsWithChildren<{
    options: Partial<InitOptions>;
    children: React.ReactNode | React.JSX.Element;
  }>
) {
  const {children, options} = props;
  const i18n = useMemo(() => createI18nInstance(options), [options]);

  return (
    <Suspense fallback="loading....">
      <I18nextProvider i18n={i18n} defaultNS="common">
        {children}
      </I18nextProvider>
    </Suspense>
  );
}
