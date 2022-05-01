import { Writable, writable,readable } from 'svelte/store';
import * as e from "../i18n/en-US.json"
import * as j from "../i18n/ja.json"

export const language:Writable<string> = writable("en");

export const ja = readable(j);
export const en = readable(e)