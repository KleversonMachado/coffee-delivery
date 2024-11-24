import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useFormData } from "../../hooks/useFormData"
import { SuccessBox, SuccessBoxLayer, SuccessContainer, SuccessIconOrange, SuccessIconPurple, SuccessIconYellow } from "./styles";
import Illustration from '../../assets/Illustration.svg';

export function Success() {
    const { formData } = useFormData();

    const paymentMethodMap: { [key: string]: string } = {
        credit: 'Cartão de Crédito',
        debit: 'Cartão de Débito',
        money: 'Dinheiro'
    };

    const getPaymentMethodName = (method: string) => {
        return paymentMethodMap[method] || method;
    };

    return (
        <SuccessContainer>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <SuccessBox>
                    {formData.number !== 0 ? (
                <>
                    <SuccessBoxLayer>
                        <SuccessIconPurple>
                            <MapPin size={16} weight="fill" />
                        </SuccessIconPurple>
                        <div>
                            <span>
                                Entrega em <b>{formData.street}, {formData.number}</b>
                            </span><br />
                            <span>
                                {formData.neighborhood} - {formData.city}, {formData.uf}
                            </span>
                        </div>
                    </SuccessBoxLayer>
                    <SuccessBoxLayer>
                        <SuccessIconYellow>
                            <Timer size={16} weight="fill" />
                        </SuccessIconYellow>
                        <div>
                            <span>Previsão de entrega</span><br />
                            <span><b>20 min - 30 min</b></span>
                        </div>
                    </SuccessBoxLayer>
                    <SuccessBoxLayer>
                        <SuccessIconOrange>
                            <CurrencyDollar size={16} />
                        </SuccessIconOrange>
                        <div>
                            <span>Pagamento na entrega</span><br />
                            <span><b>{getPaymentMethodName(formData.paymentMethod)}</b></span>
                        </div>
                    </SuccessBoxLayer>
                </>
                ) : (
                    <p>Você ainda não realizou compras...</p>
                )}
                </SuccessBox>
            </div>
            <div>
                <img src={Illustration} />
            </div>
        </SuccessContainer>
    )
}