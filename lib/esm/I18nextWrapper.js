var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Suspense, useMemo } from 'react';
import { I18nextProvider, initReactI18next, setI18n } from 'react-i18next';
import { createInstance } from 'i18next';
import backend from 'i18next-http-backend/cjs';
import LanguageDetector from 'i18next-browser-languagedetector';
var options = {
    interpolation: {
        escapeValue: false,
    },
};
var createI18nInstance = function (config) {
    var instance = createInstance();
    instance
        .use(backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init(__assign(__assign({}, options), config))
        .then(function () {
        initReactI18next.init(instance);
        setI18n(instance);
    });
    return instance;
};
export default function I18nextWrapper(props) {
    var children = props.children, options = props.options;
    var i18n = useMemo(function () { return createI18nInstance(options); }, [options]);
    return (React.createElement(Suspense, { fallback: "loading...." },
        React.createElement(I18nextProvider, { i18n: i18n, defaultNS: "common" }, children)));
}
