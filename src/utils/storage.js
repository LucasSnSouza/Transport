export function setValueRootStorage(key, value){
    let root_storage = {};
    if(window.localStorage.getItem("_root_project")){
        root_storage = JSON.parse(window.localStorage.getItem("_root_project"));
    }
    root_storage[key] = value;
    window.localStorage.setItem("_root_project", JSON.stringify(root_storage));
}

export function getValueRootStorage(key, default_value = null){
    if(JSON.parse(window.localStorage.getItem("_root_project"))){
        return JSON.parse(window.localStorage.getItem("_root_project"))[key];
    }else{
        return default_value;
    }
}

export function changeBusinessBalance(value){
    let storage = JSON.parse(window.localStorage.getItem("app-business"));
    storage.balance - Number(value);
    console.log(storage.balance)
    window.localStorage.setItem("app-business", JSON.stringify(storage));
}  

export function createCompanie(form){
    if(window.localStorage.getItem("app-companies")){
        let storage = JSON.parse(window.localStorage.getItem("app-companies"));
        storage.push(form);
        window.localStorage.setItem("app-companies", JSON.stringify(storage));
        changeBusinessBalance('balance', form.balance)
    }
}