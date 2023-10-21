"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_i18next_1 = require("react-i18next");
var i18next_1 = require("i18next");
var cjs_1 = __importDefault(require("i18next-http-backend/cjs"));
var i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
var options = {
    interpolation: {
        escapeValue: false,
    },
};
var createI18nInstance = function (config) {
    var instance = (0, i18next_1.createInstance)();
    instance
        .use(cjs_1.default)
        .use(i18next_browser_languagedetector_1.default)
        .use(react_i18next_1.initReactI18next)
        .init(__assign(__assign({}, options), config))
        .then(function () {
        react_i18next_1.initReactI18next.init(instance);
        (0, react_i18next_1.setI18n)(instance);
    });
    return instance;
};
function I18nextWrapper(props) {
    var children = props.children, options = props.options;
    var i18n = (0, react_1.useMemo)(function () { return createI18nInstance(options); }, [options]);
    return (react_1.default.createElement(react_1.Suspense, { fallback: "loading...." },
        react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: i18n, defaultNS: "common" }, children)));
}
exports.default = I18nextWrapper;
