import 'react-i18next';
import en from './translations/en/translationEN.json'

declare module 'react-i18next' {
  interface CustomTypeOptions  {
    defaultNS: 'common';
    resources: typeof en;
  }
}