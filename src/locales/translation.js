import { setValueRootStorage, getValueRootStorage} from "@/utils/storage"

import pt from "./pt";
import en from "./en";

let locale = "en";

const translations = {
    pt,
    en,
}

export function useLanguage(language){
    setValueRootStorage('ux_language', language);
}

export function translate(key) {
    const keys = key.split('.');
    return keys.reduce((obj, k) => (obj && obj[k] ? obj[k] : null), translations[getValueRootStorage('ux_language', "en")]) || key;
}