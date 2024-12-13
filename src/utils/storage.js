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
