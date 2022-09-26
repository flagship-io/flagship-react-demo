import { Link } from 'react-router-dom'
import styles from './Success.module.scss'

function Success() {
    return (
        <div className={styles.success}>
            <div className={styles.circle}>
                <img src='/credit-card-check.svg' alt='credit card' />
            </div>
            <div className={styles.message}>Payment successfully completed</div>
            <Link to="/payment"><i className='fa-regular fa-arrow-left-long' /> Go back to the store</Link>
        </div>
    )
}

export default Success