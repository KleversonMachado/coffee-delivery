import { CartHeader, HeaderContainer, LocaleHeader, LogoHeader, RightSideHeader } from "./style";
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { CartItems } from "../../reducers/cart/reducer";

export function Header() {

    const { cart } = useCart();

    function sumTotalItemsCart(items: CartItems[]) {
        return items.reduce((total: number, item: CartItems) => total + item.quantity, 0);
    }

    return (
        <HeaderContainer>
            <LogoHeader>
                <NavLink to={"/"}>
                    <img src={Logo} alt='O logotipo do serviço "Coffee Delivery" apresenta uma xícara de café estilizada com um design de foguete no centro, simbolizando velocidade e eficiência. A xícara de café é roxa, e o texto "Coffee Delivery" está escrito em negrito, em letras pretas, à direita da xícara.' />
                </NavLink>
            </LogoHeader>
            <RightSideHeader>
                <LocaleHeader>
                    <MapPin size={19} weight="fill" />
                    <span>Curitiba, PR</span>
                </LocaleHeader>
                <NavLink to={"/checkout"}>
                    <CartHeader>
                        <ShoppingCart size={19} weight="fill" />
                    </CartHeader>
                    {cart.length > 0 && <span>{sumTotalItemsCart(cart)}</span>}
                </NavLink>
            </RightSideHeader>
        </HeaderContainer>
    )
}