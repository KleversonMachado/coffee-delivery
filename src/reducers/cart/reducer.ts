import { produce } from "immer";
import { ActionTypes, CartActions } from "./actions";

export interface CartItems {
    id: string;
    quantity: number;
}

interface CartState {
    cart: CartItems[];
}

export function cartReducer(state: CartState, action: CartActions) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return produce(state, draft => {

                const itemAlreadyAdded = draft.cart.find(
                    (item: CartItems) => item.id === action.payload.item.id
                )

                if (itemAlreadyAdded) {
                    itemAlreadyAdded.quantity += action.payload.item.quantity;
                } else {
                    draft.cart.push(action.payload.item);
                }


            });
        case ActionTypes.REMOVE_ITEM:
            return produce(state, draft => {
                const itemIdToRemove = draft.cart.findIndex(
                    item => item.id === action.payload.itemId
                )
                draft.cart.splice(itemIdToRemove, 1);
            });
        case ActionTypes.INCREMENT_ITEM_QUANTITY:
            return produce(state, draft => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId
                )
                
                if (itemToIncrement?.id) {
                    itemToIncrement.quantity += 1;
                }
            });
        case ActionTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, draft => {
                const itemToDecrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId
                )
                
                if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
                    itemToDecrement.quantity -= 1;
                }
            });
        case ActionTypes.CLEAR_CART:
            return produce(state, draft => {
                draft.cart = [];
            });
        default:
            return state;
    }
}