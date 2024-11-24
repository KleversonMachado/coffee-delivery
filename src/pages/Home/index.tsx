import { BadgesHome, Bright, CoffeeLists, HomeContainer, IconContainerGray, IconContainerOrange, IconContainerPurple, IconContainerYellow, LeftHome, MainHome, RightHome, WrapperCafesHome } from "./styles";
import MainImg from '../../assets/MainImage.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeAPI } from "../../api/CoffeeAPI";
import BrightImg from '../../assets/Bright.svg'

export function Home() {
    return (
        <HomeContainer>
        <MainHome>
            <LeftHome>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <BadgesHome>
                    <div>
                        <IconContainerOrange>
                            <ShoppingCart size={14} weight="fill" />
                        </IconContainerOrange>
                        <span>Compra simples e segura</span>
                    </div>
                    <div>
                        <IconContainerGray>
                            <Package size={14} weight="fill" />
                        </IconContainerGray>
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div>
                        <IconContainerYellow>
                            <Timer size={14} weight="fill" />
                        </IconContainerYellow>
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div>
                        <IconContainerPurple>
                            <Coffee size={14} weight="fill" />
                        </IconContainerPurple>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </BadgesHome>
                <Bright src={BrightImg} />
            </LeftHome>
            <RightHome>
                <img src={MainImg} alt='copo descartável de café branco com tampa preta e uma manga preta que possui o texto "Coffee Delivery" junto com um logotipo. O fundo apresenta uma forma amarela com grãos de café, café moído e um porta-filtro preenchido com café moído.' />
                <Bright src={BrightImg} />
                <Bright src={BrightImg} />
            </RightHome>
        </MainHome>
        <WrapperCafesHome>
            <h2>Nossos cafés</h2>
            <CoffeeLists>
                {CoffeeAPI.map(coffee => (
                 <CoffeeCard
                  key={coffee.id}
                  id={coffee.id}
                  img={coffee.img}
                  title={coffee.title}
                  variations={coffee.variations}
                  description={coffee.description}
                  price={coffee.price}
                 />
                ))}
            </CoffeeLists>
        </WrapperCafesHome>
        </HomeContainer>
    )
}