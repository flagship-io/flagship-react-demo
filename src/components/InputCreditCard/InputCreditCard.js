
import React, { useRef, useState } from 'react';
import './InputCreditCard.scss';


function InputCreditCard({ onValidCreditCard }) {

    const [creditCardNumber, setCreditCardNumber] = useState("")
    const hasValidCard = useRef(false)

    const onTextChange = (e) => {
        const value = e.target.value.replace(/\D+/g, "")
        const creditCard = `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(8, 12)} ${value.slice(12, 19)}`.trim()
        setCreditCardNumber(creditCard)
        if (creditCard.length === 19) {
            onValidCreditCard(creditCard)
            hasValidCard.current = true
        } else {
            if (hasValidCard.current) {
                onValidCreditCard(null)
                hasValidCard.current = true
            }
        }
    }

    return (
        <div className='input-credit-card'>
            <i className='fa fa-credit-card' />
            <input type={'text'}
                maxLength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                value={creditCardNumber}
                inputMode={'numeric'}
                onChange={onTextChange}
            />
        </div>
    )
}

export default React.memo(InputCreditCard)