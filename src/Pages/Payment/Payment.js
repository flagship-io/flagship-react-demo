import { HitType, useFlagship, useFsFlag } from '@flagship.io/react-sdk'
import { useCallback, useState } from 'react'
import InputCreditCard from '../../components/InputCreditCard/InputCreditCard'
import { NavLink, useNavigate } from "react-router-dom";
import './Payment.scss'
import styled from 'styled-components'

const PayButton = styled.button`
    width: 100%;
    height: 40px;
    background: ${props => props.paymentCtaEnabledColor};
    color:white;
    border-radius: 6px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:active {
    opacity: 0.8;
    }
    &:hover {
    background: #10882f;
    }
    &:disabled {
    opacity: 1;
    background: ${props => props.paymentCtaDisabledColor};
    color:grey;
    }
`;

function Payment() {

    const [hasValidCreditCard, setHasValidCreditCard] = useState(false)
    const [orderNumber] = useState(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000)
    const paymentAmount = "50.00"

    //Getting flags
    const featurePaymentPaypalEnable = useFsFlag("feature_payment_paypal_enable", true)
    const featurePaymentApplePayEnable = useFsFlag("feature_payment_applePay_enable", false)
    const featurePaymentGooglePayEnable = useFsFlag("feature_payment_googlePay_enable", false)
    const paymentCtaPrefixText = useFsFlag("payment_cta_prefix_text", "Pay")
    const paymentCtaEnabledColor = useFsFlag("payment_cta_enabled_color", "#F2F2F2")
    const paymentCtaDisabledColor = useFsFlag("payment_cta_disabled_color", "#F2F2F2")

    const hasOtherPaymentMethod = featurePaymentPaypalEnable.getValue() ||
        featurePaymentApplePayEnable.getValue() || featurePaymentGooglePayEnable.getValue()

    const fs = useFlagship()
    const navigate = useNavigate()

    const onPaymentSuccess = (paymentMethod) => {
        fs.hit.send({
            type: HitType.TRANSACTION,
            transactionId: `${orderNumber}`,
            affiliation: "payment",
            totalRevenue: Number(paymentAmount),
            currency: "USD",
            paymentMethod
        })
        navigate('/payment-success')
    }

    const onValidCreditCard = useCallback((creditCard) => {
        setHasValidCreditCard(!!creditCard)
    }, [])

    return (
        <div className="payment">
            <div className='payment-info row'>
                <div>
                    Rubber Duck
                </div>
                <div>
                    Order N°{orderNumber}
                </div>
            </div>
            <div className='payment-price row'>
                <div className='price'>{paymentAmount} $</div>
            </div>
            <div className='credit-card-row'>
                <div className='small-text mt-5'>Pay by credit card</div>
                <InputCreditCard onValidCreditCard={onValidCreditCard} />
            </div>


            {hasOtherPaymentMethod &&
                <>
                    <hr />
                    <div className='row small-text'>
                        Other payment methods
                    </div>
                    <div className='payment-btn-container'>
                        {featurePaymentApplePayEnable.getValue() && <button className="apple-pay" onClick={() => {
                            onPaymentSuccess("Apple pay")
                        }}>
                            <i className="fa-brands fa-apple-pay"></i>
                        </button>}
                        {featurePaymentGooglePayEnable.getValue() && <button className="google-pay" onClick={() => {
                            onPaymentSuccess("Google pay")
                        }}>
                            <img src='google-pay.svg' alt='google play' />
                        </button>}
                        {featurePaymentPaypalEnable.getValue() && <button className="paypal-pay" onClick={() => {
                            onPaymentSuccess("Paypal")
                        }}>
                            <img src='paypal.svg' alt='paypal' />
                        </button>}
                    </div>
                </>
            }

            <div className='credit-card-pay-container'>
                <PayButton
                    paymentCtaEnabledColor={paymentCtaEnabledColor.getValue()}
                    paymentCtaDisabledColor={paymentCtaDisabledColor.getValue()}
                    disabled={!hasValidCreditCard}
                    onClick={() => {
                        onPaymentSuccess("Credit-card")
                    }}
                >{paymentCtaPrefixText.getValue()} {paymentAmount} $</PayButton>
            </div>

            <div className='credential-container'>
                <NavLink to="/">Change credential</NavLink>
            </div>
        </div>
    )
}

export default Payment