import { ChatContext, useUserContext } from "../context/ChatProvider"


const Nav = () => {

    const { usuario, ingresoUsuario, cerrarSesion } = useUserContext(ChatContext)
    return (
        <nav className='navbar navbar-dark bg-dark'>
            CHAT
            <span>
                <div>

                    {
                        usuario.estado ? (
                        <button 
                            className='btn btn-outline-danger my-4'
                            onClick= {cerrarSesion}
                        >
                            Cerrar sesion
                        </button>
                        ) : (
                        <button className='btn btn-outline-success my-2'
                        onClick= {ingresoUsuario}
                        >
                            Acceder
                        </button>
                        )
                    }


                </div>
            </span>
        </nav>
    )

}

export default Nav