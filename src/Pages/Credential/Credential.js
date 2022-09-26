import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext, FS_DEMO_CREDENTIAL } from '../../App'
import './Credential.scss'

const FormInput = ({ name, label, value, onChange }) => {
    return (
        <div>
            <label htmlFor={name} >{label}</label>
            <input required name={name} value={value} onChange={(e) => {
                onChange(e.target.value)
            }} />
        </div>
    )
}

export default function Credential() {


    const navigate = useNavigate();
    const context = useContext(appContext)

    const [data, setData] = useState(context.credential)

    const onSubmit = (e) => {
        e.preventDefault();
        context.setCredential(data)
        localStorage.setItem(FS_DEMO_CREDENTIAL, JSON.stringify(data))
        navigate('payment')
    }
    return (
        <div className="main credential">
            <div className='title'>
                Flagship Credentials
            </div>
            <form method="post" onSubmit={onSubmit}>
                <FormInput name="apiKey" label="Api Key" value={data.apiKey} onChange={(value) => {
                    setData(item => ({ ...item, apiKey: value }))
                }} />
                <FormInput name="envId" label="Env ID" value={data.envId} onChange={(value) => {
                    setData(item => ({ ...item, envId: value }))
                }} />
                <button>Submit</button>
            </form>
        </div>)
}