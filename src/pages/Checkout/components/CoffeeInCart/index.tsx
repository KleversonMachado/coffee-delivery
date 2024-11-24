import { useState } from "react";
import { CoffeeProps } from "../../../../api/CoffeeAPI";
import { ActionsOnItem, CartContainer, CountInput, ImgItem, Line, PriceItem, RemoveButton, WrapperActions } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../../../hooks/useCart";

export function CoffeeInCart({id,img,title,price}: CoffeeProps) {
    const { cart, incrementItemQuantity, decrementItemQuantity, removeItemFromCart } = useCart();

    const quantityInCartContext = cart.find(item => item.id === id);
    let quantity = 0;

    if (quantityInCartContext) {
        quantity = quantityInCartContext.quantity;
    }

    const [quantityCart, setQuantityCart] = useState(quantity);

    function increment() {
        incrementItemQuantity(id);
        setQuantityCart(state => state + 1);
    }

    function decrement() {
        if (quantityCart > 1) {
            decrementItemQuantity(id);
            setQuantityCart(state => state - 1);
        }
    }

    return (
        <>
        <CartContainer>
            <ImgItem>
                <img src={img} />
            </ImgItem>
            <ActionsOnItem>
                <p>{title}</p>
                <WrapperActions>
                    <CountInput>
                        <button onClick={decrement} type="button">
                            <Minus size={14} weight="bold" />
                        </button>
                        <span>{quantityCart}</span>
                        <button onClick={increment} type="button">
                            <Plus size={14} weight="bold" />
                        </button>
                    </CountInput>
                    <RemoveButton type="button" onClick={() => removeItemFromCart(id)}>
                        <Trash size={16} />
                        Remover
                    </RemoveButton>
                </WrapperActions>
            </ActionsOnItem>
            <PriceItem>
                <h4>R$ {(price * quantityCart).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h4>
            </PriceItem>
        </CartContainer>
        <Line />
        </>
    )
}