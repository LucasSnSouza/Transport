import {
    getUsageWords
} from "@/defaults/defaultsInteracts"

import {
    getSystemAplications,
    getSystemCommands
} from "@/defaults/defaultsValues"

export function setInteractProcess(sended){
    let sended_split_value = sended.toUpperCase().split(' ');
    let verb = sended_split_value.find(word => getUsageWords().Verbs.includes(word))
    let object = sended_split_value.find(word => getUsageWords().Objects.includes(word))

    if(verb || object){
        return setProcessCommand(verb, object, sended);
    }
    return {
        send: {
            message: sended
        },
        response: {
            message: "Desculpe, não consegui entender sua solicitação."
        }
    }
}

export function setProcessCommand(verb, object, sended){
    if (
        (verb === "LISTE" || verb === "LISTAR" || verb === "EXIBIR" || verb === "EXIBA" || verb === "MOSTRE") && 
        (object === "APLICATIVOS" || object === "APPS")
    ){
        return {
            send: {
                message: sended
            },
            response: {
                message: "Claro, esses são os aplicativos disponiveis no momento.",
                images: getSystemAplications()
            }
        }
    }
    else if(
        (verb === "LISTE" || verb === "LISTAR" || verb === "EXIBIR" || verb === "EXIBA" || verb === "MOSTRE") && 
        (object === "COMANDOS")
    ){
        return {
            send: {
                message: sended
            },
            response: {
                message: "Entendi, esses são todos os comandos que consigo executar no momento.",
                buttons: getSystemCommands()
            }
        }
    }else{
        return {
            send: {
                message: sended
            },
            response: {
                message: "Desculpe, não sei como processar ainda este comando."
            }
        }
    }
}