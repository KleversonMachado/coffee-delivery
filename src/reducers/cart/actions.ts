import { CartItems } from "./reducer"

export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANITY',
    CLEAR_CART = 'CLEAR_CART',
}

export type CartActions = 
    {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item: CartItems
        }
    }
    | {
        type: 
        | ActionTypes.DECREMENT_ITEM_QUANTITY 
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM,
        payload: {
            itemId: CartItems['id']
        }
    }
    | {
        type: ActionTypes.CLEAR_CART,
    }

export function addItemAction(item: CartItems) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item,
        }, 
    } satisfies CartActions
}

export function removeItemAction(itemId: CartItems['id']) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId,
        },
    } satisfies CartActions
}

export function incrementItemQuantityAction(itemId: CartItems['id']) {
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies CartActions
}

export function decrementItemQuantityAction(itemId: CartItems['id']) {
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies CartActions
}

export function clearCartAction() {
    return {
        type: ActionTypes.CLEAR_CART,
    } satisfies CartActions
}