import ImgExpressoTradicional from '../assets/cafes/expresso_tradicional.svg';
import ImgExpressoAmericano from '../assets/cafes/expresso_americano.svg';
import ImgExpressoCremoso from '../assets/cafes/expresso_cremoso.svg';
import ImgExpressoGelado from '../assets/cafes/expresso_gelado.svg';
import ImgCafeComLeite from '../assets/cafes/cafe_com_leite.svg';
import ImgLatte from '../assets/cafes/latte.svg';
import ImgCapuccino from '../assets/cafes/capuccino.svg';
import ImgMacchiato from '../assets/cafes/macchiato.svg';
import ImgMocaccino from '../assets/cafes/mocaccino.svg';
import ImgChocolateQuente from '../assets/cafes/chocolate_quente.svg';
import ImgCubano from '../assets/cafes/cubano.svg';
import ImgHavaiano from '../assets/cafes/havaiano.svg';
import ImgArabe from '../assets/cafes/arabe.svg';
import ImgIrlandes from '../assets/cafes/irlandes.svg';

export interface CoffeeProps {
    id: string;
    img: string;
    variations: string[];
    title: string;
    description: string;
    price: number;
}

export const CoffeeAPI: CoffeeProps[] = [
    {
        id: "1",
        img: ImgExpressoTradicional,
        title: "Expresso Tradicional",
        variations: ["Tradicional"],
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90
    },
    {
        id: "2",
        img: ImgExpressoAmericano,
        title: "Expresso Americano",
        variations: ["Tradicional"],
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 10.90
    },
    {
        id: "3",
        img: ImgExpressoCremoso,
        title: "Expresso Cremoso",
        variations: ["Tradicional"],
        description: "Café expresso tradicional com espuma cremosa",
        price: 11.90
    },
    {
        id: "4",
        img: ImgExpressoGelado,
        title: "Expresso Gelado",
        variations: ["Tradicional", "Gelado"],
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 12.90
    },
    {
        id: "5",
        img: ImgCafeComLeite,
        title: "Café com Leite",
        variations: ["Tradicional", "Com leite"],
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 8.90
    },
    {
        id: "6",
        img: ImgLatte,
        title: "Latte",
        variations: ["Tradicional", "Com leite"],
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 13.90
    },
    {
        id: "7",
        img: ImgCapuccino,
        title: "Capuccino",
        variations: ["Tradicional", "Com leite"],
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 14.90
    },
    {
        id: "8",
        img: ImgMacchiato,
        title: "Macchiato",
        variations: ["Tradicional", "Com leite"],
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 10.90
    },
    {
        id: "9",
        img: ImgMocaccino,
        title: "Mocaccino",
        variations: ["Tradicional", "Com leite"],
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 15.90
    },
    {
        id: "10",
        img: ImgChocolateQuente,
        title: "Chocolate Quente",
        variations: ["Especial", "Com leite"],
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 12.90
    },
    {
        id: "11",
        img: ImgCubano,
        title: "Cubano",
        variations: ["Especial", "Alcoólico", "Gelado"],
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 16.90
    },
    {
        id: "12",
        img: ImgHavaiano,
        title: "Havaiano",
        variations: ["Especial"],
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 14.90
    },
    {
        id: "13",
        img: ImgArabe,
        title: "Árabe",
        variations: ["Especial"],
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 13.90
    },
    {
        id: "14",
        img: ImgIrlandes,
        title: "Irlandês",
        variations: ["Especial", "Alcoólico"],
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 17.90
    }
]