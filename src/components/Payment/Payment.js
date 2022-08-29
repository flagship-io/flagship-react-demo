import InputCreditCard from '../InputCreditCard/InputCreditCard'
import './Payment.scss'


function Payment() {

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
            <div>
                <button className="apple-pay">
                    <i className="fa-brands fa-apple-pay"></i>
                </button>
                <div className="google-pay">
                    <i className="fa-brands fa-google-pay"></i>
                </div>
                <div className="paypal-pay">
                    <i className="fa-brands fa-paypal"></i>
                </div>
            </div>
        </div>
    )
}

export default Payment