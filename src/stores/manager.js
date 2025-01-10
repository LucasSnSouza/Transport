import { defineStore } from "pinia";

export const useManagerStore = defineStore('manager', {
    state: () => ({
        business: {},
        companies: []
    }),
    getters: {
        getBusiness: (state) => state.business,
        getCompanies: (state) => state.companies
    },
    actions: {
        getStoragedBusiness(){
            this.business = JSON.parse(window.localStorage.getItem("app-business"))
        },
        getStoragedCompanies(){
            this.companies = JSON.parse(window.localStorage.getItem("app-companies"))
        },
        setStoragedAll(){
            window.localStorage.setItem("app-business", JSON.stringify(this.business));
            window.localStorage.setItem("app-companies", JSON.stringify(this.companies));
        },
        setCompanie(form){
            this.business.balance = this.business.balance - Number(form.balance);
            this.companies.push(form);
        }
    }
})