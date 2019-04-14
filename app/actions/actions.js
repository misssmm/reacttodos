export const vv = ()=>{
    return {
        type:"VV"
    }
}

export const updataItem = (content,id)=>{
    return {
        content,
        id,
        type:"UPDATAITEM"
    }
}
export const removeItem = (id)=>{
    return {
        id,
        type:"REMOVEITEM"
    }
}
export const changeItem = (id)=>{
    return {
        id,
        type:"CHANGEITEM"
    }
}

export const addItem = (content,id)=>{
    return {
        id,
        content,
        type:"ADDITEM"
    }
}