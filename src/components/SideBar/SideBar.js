import { useState, useContext } from 'react'
import { appContext, FS_DEMO_CREDENTIAL } from '../../App'
import './Sidebar.scss'

const FormInput = ({ name, label, value, required, onChange }) => {
    return (
        <div>
            <label htmlFor={name} >{label}</label>
            <input required={required} name={name} value={value} onChange={(e) => {
                onChange(e.target.value)
            }} />
        </div>
    )
}

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(false)

    const context = useContext(appContext)
    const [fsData, setFsData] = useState(context.fsData)

    function onSideMenuToggle() {
        setIsOpen(x => !x)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        context.setFsData(fsData)
        localStorage.setItem(FS_DEMO_CREDENTIAL, JSON.stringify(fsData))
        window.location.reload()
    }

    return (
        <div className={`fs-side-menu ${isOpen ? "opened" : null} `}>
            <div className="inner">

                <button className="fs-side-menu-open" onClick={onSideMenuToggle}>
                    <i className={`fa-regular fa-arrow-${isOpen ? "down" : "up"}`}></i>
                    <div>Flagship</div>
                </button>
                <div className='title'>
                    Flagship Credentials
                </div>
                <form method="post" onSubmit={onSubmit}>
                    <FormInput name="envId" label="Env ID" value={fsData.envId} required={true} onChange={(value) => {
                        setFsData(item => ({ ...item, envId: value }))
                    }} />
                    <FormInput name="apiKey" label="Api Key" value={fsData.apiKey} required={true} onChange={(value) => {
                        setFsData(item => ({ ...item, apiKey: value }))
                    }} />
                    <FormInput name="visitorId" label="Visitor ID" value={fsData.visitorId} onChange={(value) => {
                        setFsData(item => ({ ...item, visitorId: value }))
                    }} />
                    <button>
                        Validate</button>
                </form>

            </div>
        </div >)
}