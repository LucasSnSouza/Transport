import { defineStore } from "pinia";

export const useManagerStore = defineStore('manager', {
    state: () => ({
        business: {},
        companies: [],
        records: []
    }),
    getters: {
        getBusiness: (state) => state.business,
        getCompanies: (state) => state.companies,
        getRecords: (state) => state.records
    },
    actions: {
        registerAllStorages(){
            this.business = JSON.parse(window.localStorage.getItem("app-business"));
            this.companies = JSON.parse(window.localStorage.getItem("app-companies"));
            this.records = JSON.parse(window.localStorage.getItem("app-records"));
        },
        setStoragedAll(){
            window.localStorage.setItem("app-business", JSON.stringify(this.business));
            window.localStorage.setItem("app-companies", JSON.stringify(this.companies));
            window.localStorage.setItem("app-records", JSON.stringify(this.records));
        },
    }
})