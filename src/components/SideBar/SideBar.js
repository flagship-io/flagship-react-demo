import { useState, useContext } from 'react'
import { appContext, FS_DEMO_CREDENTIAL } from '../../App'
import './Sidebar.scss'

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

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(false)

    const context = useContext(appContext)
    const [fsData, setFsData] = useState(context.credential)

    function onSideMenuToggle() {
        setIsOpen(x => !x)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        context.setCredential(fsData)
        localStorage.setItem(FS_DEMO_CREDENTIAL, JSON.stringify(fsData))
    }

    return (
        <div className={`fs-side-menu ${isOpen ? "opened" : null} `}>
            <div className="inner">

                <button className="fs-side-menu-open" onClick={onSideMenuToggle}>FlagShip</button>
                <div className='title'>
                    Flagship Credentials
                </div>
                <form method="post" onSubmit={onSubmit}>
                    <FormInput name="apiKey" label="Api Key" value={fsData.apiKey} onChange={(value) => {
                        setFsData(item => ({ ...item, apiKey: value }))
                    }} />
                    <FormInput name="envId" label="Env ID" value={fsData.envId} onChange={(value) => {
                        setFsData(item => ({ ...item, envId: value }))
                    }} />
                    <button>Submit</button>
                </form>

            </div>
        </div>)
}