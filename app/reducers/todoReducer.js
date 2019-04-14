const initState=[
    {
        "id" : 1,
        "content" :"这是一个默认待做事项",
        "done":false
    },
    {
        "id" : 2,
        "content" :"这是一个默认待做事项",
        "done":false
    },
    {
        "id" : 3,
        "content" :"这是一个默认待做事项",
        "done":false
    }
]

let conunt = 3

export default (state = initState,action)=>{
    switch(action.type){
        case "UPDATAITEM":
            return state.map((item)=>{
               return item.id!=action.id?item : {
                    ...item,
                    "content":action.content
                }
            })
            break

        case "REMOVEITEM":
            return state.filter((item)=>{
               return item.id!=action.id?true:false
            })
            break

        case "CHANGEITEM":
        return state.map((item)=>{
            return item.id!=action.id?item : {
                 ...item,
                 "done":!item.done
                }
            })
            break

        case "ADDITEM":
        return [{"id":state.reduce((a,item)=>{return item.id > a ? item.id : a} , 0) + 1,"content":action.content,"done":false},...state]
            break
    }

    return state
}