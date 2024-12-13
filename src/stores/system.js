import { defineStore } from "pinia";

export const useSystemStore = defineStore('system', {
    state: () => ({
        theme: 'white',
        taskbar: false
    }),
    getters: {
        getTheme: (state) => state.theme,
        getTaskbar: (state) => state.taskbar
    },
    actions: {
        toggleTheme(){
            this.theme = this.theme === 'white' ? 'dark' : 'white';
        },
        toggleTaskbar(){
            this.taskbar = !this.taskbar;
        },
        setTaskbar(value){
            this.taskbar = value;
        }
    }
})