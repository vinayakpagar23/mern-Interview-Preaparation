
export const reducer=(state,action)=>{
    switch(action.type){
        case "Add_Product":
            return {...state,products:action.payload};
       default:
        break;
    }
}