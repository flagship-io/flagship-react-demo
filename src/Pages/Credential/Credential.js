import './Credential.scss'

export default function Credential() {
    return (
        <div className="main credential">
            <div className='title'>
                Flagship Credentials
            </div>
            <form>
                <div>
                    <label htmlFor="apiKey" >Api Key</label>
                    <input name="apiKey" />
                </div>
                <div>
                    <label htmlFor="envId" >Env ID</label>
                    <input name="envId" />
                </div>
            </form>
        </div>)
}