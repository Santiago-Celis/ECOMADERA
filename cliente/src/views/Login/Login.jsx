import './Login.css'
import logo from '../../Flecha.png'

export default function Login() {
  return (
    <div>
      <div className='contenedor'>
        <div className='superior'>
            <h1 className="Titulo">ECO MADERA</h1>
        </div>
        <div className='inferior'>
        <form>
            <div className='campo'>
                <span>Ingresa tu correo</span>
                <input name='' placeholder='Correo' />
            </div>
            <div className='campo'>
                <span>Ingresa tu contraseña</span>
                <input name='' placeholder='Contraseña' />
            </div>

            
            <button type='submit'><img src={logo} alt='flecha' /></button>
        </form>
        </div>
      </div>
    </div>
  )
}
