import { ADD_ITEM, DELETE_ITEM } from "./actionType"

const initState = 'ahmed'

 const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM: return  action.newItems
            
        ;
        default: return state;
      
    }
}
export default reducer