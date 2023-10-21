import React, { PropsWithChildren } from 'react';
import { InitOptions } from 'i18next';
export default function I18nextWrapper(props: PropsWithChildren<{
    options: Partial<InitOptions>;
    children: React.ReactNode | React.JSX.Element;
}>): React.JSX.Element;
