import { Link } from 'react-router-dom'
import styles from './Success.module.scss'
import { useEffect } from 'react'

function Success() {
    useEffect(()=>{
        // eslint-disable-next-line no-undef
        analytics.page(null,"Success page");
    }, [])
    return (
        <div className={styles.success}>
            <div className={styles.circle}>
                <img src='/credit-card-check.svg' alt='credit card' />
            </div>
            <div className={styles.message}>Payment successfully completed</div>
            <Link to="/"><i className='fa-regular fa-arrow-left-long' /> Go back to the store</Link>
        </div>
    )
}

export default Success