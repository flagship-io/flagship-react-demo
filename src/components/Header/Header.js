import { useFsFlag } from '@flagship.io/react-sdk'
import './Header.scss'

function Header() {
    const paymentHeaderTitle = useFsFlag("payment_header_title_text", "Demo app")
    const paymentHeaderColor = useFsFlag("payment_header_color", "red")
    return (
        <div className="header" style={{ background: paymentHeaderColor.getValue() }}>
            <div className='title'>{paymentHeaderTitle.getValue()}</div>
            <a href='/'>
                <img src='social_github_icon.svg' alt='github' />
            </a>
        </div>)
}

export default Header