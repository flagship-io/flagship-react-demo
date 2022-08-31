import { useFsFlag } from '@flagship.io/react-sdk'
import styles from './Header.module.scss'

function Header() {
    const paymentHeaderTitle = useFsFlag("payment_header_title_text", "Demo app")
    const paymentHeaderColor = useFsFlag("payment_header_color", "red")
    return (
        <div className={styles.header} style={{ background: paymentHeaderColor.getValue() }}>
            <div className={styles.title}>{paymentHeaderTitle.getValue()}</div>
            <a target={'_blank'} href='https://github.com/flagship-io/flagship-react-demo' rel="noreferrer">
                <img className={styles["icon-github"]} src='social_github_icon.svg' alt='github' />
            </a>
        </div>)
}

export default Header