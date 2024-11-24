import { Minus, Plus, ShoppingCart, Check } from "phosphor-react";
import { ActionArea, AddToCartButton, CardContainer, CardVariation, CountInput, WrapperCardContent } from "./styles";
import { useEffect, useState } from "react";
import { CoffeeProps } from "../../../../api/CoffeeAPI";
import { useCart } from "../../../../hooks/useCart";

export function CoffeeCard(coffee: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);
    const [isItemAdded, setIsItemAdded] = useState(false);
    const { addItemToCart } = useCart();

    function increment() {
        setQuantity(state => state + 1);
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(state => state - 1);
        }
    }

    function handleAddItem() {
        addItemToCart({ id: coffee.id, quantity });
        setIsItemAdded(true);
        setQuantity(1);
    }

    useEffect(() => {
        let timeout : number;

        if (isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false);
            }, 1000);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isItemAdded]);

    return (
        <CardContainer>
            <img src={coffee.img} />
            <WrapperCardContent>
                <CardVariation>
                    {coffee.variations.map(variant => (
                        <span key={variant}>{variant}</span>
                    ))}
                </CardVariation>
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
                <ActionArea>
                    <div>
                        <span>R$&nbsp;</span>
                        <h3>{coffee.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h3>
                    </div>
                    <CountInput>
                        <button onClick={decrement}>
                            <Minus size={14} weight="bold" />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={increment}>
                            <Plus size={14} weight="bold" />
                        </button>
                    </CountInput>
                    <AddToCartButton disabled={isItemAdded} onClick={handleAddItem}>
                        {isItemAdded ? (
                            <Check size={20} />
                        ) : (
                            <ShoppingCart size={20} weight="fill" />
                        )}
                    </AddToCartButton>
                </ActionArea>
            </WrapperCardContent>
        </CardContainer>
    )
}