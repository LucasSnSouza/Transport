import { defineStore } from "pinia";

export const useSystemStore = defineStore('system', {
    state: () => ({
        theme: 'white',
        language: {label: "english", value: "en"},
        languages: [
            { label: "portuguese", value: "pt" },
            { label: "english", value: "en" },
        ],
        themes: [
            "default"
        ]
    }),
    getters: {
        getTheme: (state) => state.theme,
        getCurrentLanguage: (state) => state.language,
        getLanguages: (state) => state.languages,
        getThemes: (state) => state.themes,
    },
    actions: {
        toggleLanguage(language){
            this.language = language;
        },
        toggleTheme(theme){
            this.theme = theme;
        },
    }
})