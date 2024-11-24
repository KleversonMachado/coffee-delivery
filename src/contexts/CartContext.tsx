import { createContext, useEffect, useReducer } from "react";

import {
    addItemAction,
    decrementItemQuantityAction,
    incrementItemQuantityAction,
    removeItemAction,
    clearCartAction
} from '../reducers/cart/actions';

import { cartReducer, CartItems } from "../reducers/cart/reducer";

interface CartContextType {
    cart: CartItems[];
    addItemToCart: (coffee: CartItems) => void;
    removeItemFromCart: (coffee: CartItems['id']) => void;
    decrementItemQuantity: (itemId: CartItems['id']) => void;
    incrementItemQuantity: (itemId: CartItems['id']) => void;
    clearCart: () => void;
}

interface CartContextProviderProps {
    children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({
    children
} : CartContextProviderProps) {

    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: []
        },
        (cartState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0'
            )

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return cartState;
        }
    )

    const { cart } = cartState;
    
    function addItemToCart(item: CartItems) {
        dispatch(addItemAction(item));
    }

    function removeItemFromCart(itemId: CartItems['id']) {
        dispatch(removeItemAction(itemId));
    }

    function incrementItemQuantity(itemId: CartItems['id']) {
        dispatch(incrementItemQuantityAction(itemId));
    }

    function decrementItemQuantity(itemId: CartItems['id']) {
        dispatch(decrementItemQuantityAction(itemId));
    }

    function clearCart() {
        dispatch(clearCartAction());
    }

    useEffect(() => {
        if (cartState) {
            const stateJSON = JSON.stringify(cartState);

            localStorage.setItem('@coffe-delivery:cart-state-1.0.0', stateJSON);
        }
    }, [cartState])

    return (
        <CartContext.Provider value={{
            cart,
            addItemToCart,
            removeItemFromCart,
            incrementItemQuantity,
            decrementItemQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )

}