import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ActionsCheckout, AddressLegend, CartResult, CheckoutContainer, CoffeeCartList, FormCheckout, InfoCheckout, InputCEP, InputCity, InputComplement, InputForm, InputGroupThree, InputGroupTwo, InputNeighborhood, InputNumber, InputsCheckout, InputStreet, InputUF, PaymentLegend, PaymethodCheckout, SelectedCoffees, WrapperPayments } from "./styles";
import { CoffeeInCart } from "./components/CoffeeInCart";
import { CoffeeAPI } from "../../api/CoffeeAPI";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";


const newCheckoutFormValidationSchema = zod.object({
    cep: zod.
        string().
        min(8, 'O CEP deve ter pelo menos 8 caracteres').
        max(9, 'O CEP ultrapassou o limite de 9 caracteres').
        regex(/^[0-9]+$/, 'O CEP deve ser apenas números'),
    street: zod.string().min(3, 'A rua deve ter pelo menos 3 caracteres'),
    number: zod.number().min(1, 'O número deve ter pelo menos 1 caractere'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(3, 'O bairro deve ter pelo menos 3 caracteres'),
    city: zod.string().min(3, 'A cidade deve ter pelo menos 3 caracteres'),
    uf: zod.string().length(2, 'O estado deve ter 2 caracteres'),
    paymentMethod: zod.enum(['credit','debit','money'], {
      invalid_type_error: 'Informe um método de pagamento'
    }),
  });
  
  type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>;
  
  
  export function Checkout() {
    
    const { cart, clearCart } = useCart();
    const { setFormDataFn } = useFormData();

    const navigate = useNavigate();
    
    const calculateTotalItemsValue = cart.reduce((acc, coffee) => {
      const coffeeDetails = CoffeeAPI.find(item => item.id === coffee.id);
      return acc + (coffeeDetails?.price || 0) * (coffee.quantity || 1);
    }, 0)
 
    const newCheckoutForm = useForm<NewCheckoutFormData>({
        resolver: zodResolver(newCheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            number: undefined,
            complement: '',
            neighborhood: '',
            city: '',
            uf: '',
            paymentMethod: undefined,
        }
    })

    const { handleSubmit, register } = newCheckoutForm;

    const handleFormSubmit = (data: NewCheckoutFormData) => {
        event?.preventDefault();

        setFormDataFn({
          street: data.street,
          city: data.city,
          neighborhood: data.neighborhood,
          number: data.number,
          uf: data.uf,
          paymentMethod: data.paymentMethod
        })

        clearCart();

        navigate('/success');
    }

    return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormCheckout>
          <h1>Complete seu pedido</h1>
          <InfoCheckout>
            <AddressLegend>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressLegend>
            <InputsCheckout>
              <InputCEP 
                id="cep"
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              <InputStreet
                id="street"
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              <InputGroupTwo>
                <InputNumber
                  id="number"
                  type="number"
                  placeholder="Número"
                  {...register('number', { valueAsNumber: true })}
                />
                <div>
                  <InputComplement
                    id="complement"
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />      
                </div>
              </InputGroupTwo>
              <InputGroupThree>
                <InputNeighborhood
                  id="neighborhood"
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                <InputCity
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <InputUF
                  id="uf"
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  {...register('uf')}
                />
              </InputGroupThree>
            </InputsCheckout>
          </InfoCheckout>
          <PaymethodCheckout>
            <PaymentLegend>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </PaymentLegend>
            <WrapperPayments>
              <input
                type="radio"
                id="credit" 
                value="credit"
                
                {...register('paymentMethod')}
              />
              <label htmlFor="credit">
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </label>

              <input
                type="radio"
                id="debit"
                value="debit"
                {...register('paymentMethod')}
              />
              <label htmlFor="debit">
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </label>

              <input
                type="radio"
                id="money"
                value="money"
                {...register('paymentMethod')}
              />
              <label htmlFor="money">
                <Money size={16} />
                <span>Dinheiro</span>
              </label>
            </WrapperPayments>
          </PaymethodCheckout>
        </FormCheckout>
                    

            <SelectedCoffees>
                <h1>Cafés selecionados</h1>
                <ActionsCheckout>
                    <CoffeeCartList>
                      {cart.length > 0 ? (
                        cart.map(coffee => {
                          const coffeeDetails = CoffeeAPI.find(item => item.id === coffee.id);

                          if (coffeeDetails) {
                            return (
                              <CoffeeInCart 
                                key={coffeeDetails?.id} 
                                id={coffeeDetails.id}
                                img={coffeeDetails?.img}
                                description={coffeeDetails?.description}
                                variations={coffeeDetails?.variations}
                                title={coffeeDetails?.title}
                                price={coffeeDetails?.price}
                              />
                            )
                          }
                          
                        })
                      ) : (<h1>Carrinho vazio</h1>)}
                    </CoffeeCartList>
                    <CartResult>
                      <div>
                          <span>Total de itens</span>
                          <span>R$ {calculateTotalItemsValue.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                      </div>
                      <div>
                          <span>Entrega</span>
                          <span>R$ 3,50</span>
                      </div>
                      <div>
                          <h3>Total</h3>
                          <h3>R$ {(cart.reduce((acc, coffee) => {
                              const coffeeDetails = CoffeeAPI.find(item => item.id === coffee.id);
                              return acc + (coffeeDetails?.price || 0) * (coffee.quantity || 1); // Multiplica pelo quantidade
                          }, 0) + 3.50).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h3> {/* Adiciona o custo de entrega */}
                      </div>
                    </CartResult>

                    <InputForm 
                        type="submit" 
                        value={"Confirmar pedido"} 
                    />
                </ActionsCheckout>
            </SelectedCoffees>
        </form>
    </CheckoutContainer>
    )
}