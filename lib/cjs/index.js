"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trans = exports.changeLanguage = exports.SmartPayI18NextWrapper = exports.useTranslation = void 0;
var react_i18next_1 = require("react-i18next");
Object.defineProperty(exports, "useTranslation", { enumerable: true, get: function () { return react_i18next_1.useTranslation; } });
Object.defineProperty(exports, "Trans", { enumerable: true, get: function () { return react_i18next_1.Trans; } });
var helpers_1 = require("./helpers");
Object.defineProperty(exports, "changeLanguage", { enumerable: true, get: function () { return helpers_1.changeLanguage; } });
var I18nextWrapper_1 = __importDefault(require("./I18nextWrapper"));
exports.SmartPayI18NextWrapper = I18nextWrapper_1.default;
