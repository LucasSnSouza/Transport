export function validateObject(object, validations){
    for(let validate of validations){
        if(!Object.keys(object).includes(validate)){
            return false
        }
    }
    return true;
}