
import './InputCreditCard.scss';

function InputCreditCard() {
    return (
        <div className='input-credit-card'>
            <i className='fa fa-credit-card' />
            <input type={'text'} placeholder={"Card number"} />
        </div>
    )
}

export default InputCreditCard