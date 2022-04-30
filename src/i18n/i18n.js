import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';

import ja from './ja.json';
import enUS from './en-US.json';

//@ts-ignore
addMessages('ja', ja);
// @ts-ignore
addMessages('en-US', enUS);

init({
    fallbackLocale: 'ja',
    initialLocale: getLocaleFromNavigator(),
  });
  
