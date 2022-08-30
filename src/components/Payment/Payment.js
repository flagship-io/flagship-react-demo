import { useFsFlag } from '@flagship.io/react-sdk'
import InputCreditCard from '../InputCreditCard/InputCreditCard'
import './Payment.scss'


function Payment() {
    const featurePaymentPaypalEnable = useFsFlag("feature_payment_paypal_enable", true)
    const featurePaymentApplePayEnable = useFsFlag("feature_payment_applePay_enable", false)
    const featurePaymentGooglePayEnable = useFsFlag("feature_payment_googlePay_enable", false)
    const paymentCtaPrefixText = useFsFlag("payment_cta_prefix_text", "Pay")
    return (
        <div className="payment">
            <div className='payment-info row'>
                <div>
                    Rubber Duck
                </div>
                <div>
                    Order N°00066
                </div>
            </div>
            <div className='payment-price row'>
                <div className='price'>50.00 $</div>
            </div>
            <div className='credit-card-row'>
                <div className='title'>Pay by credit card</div>
                <InputCreditCard />
            </div>

            <hr />
            <div className='row'>
                Other payment methods
            </div>
            <div className='payment-btn-container'>
                {featurePaymentApplePayEnable.getValue() && <button className="apple-pay">
                    <i className="fa-brands fa-apple-pay"></i>
                </button>}
                {featurePaymentGooglePayEnable.getValue() && <button className="google-pay">
                    <img src='google-pay.svg' alt='google play' />
                </button>}
                {featurePaymentPaypalEnable.getValue() && <button className="paypal-pay">
                    <img src='paypal.svg' alt='paypal' />
                </button>}
            </div>

            <div>
                <button className='pay-btn'>{paymentCtaPrefixText.getValue()} 50.00 $</button>
            </div>
        </div>
    )
}

export default Payment