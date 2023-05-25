import Chat from "./components/Chat";
import Nav from "./components/Nav";
import { useUserContext, ChatContext } from "./context/ChatProvider";


const App = () => {

 // const { saludo } = (useUserContext());

const {usuario} = useUserContext(ChatContext)

  return usuario !== null ? (
    <div>
      <Nav />
      
      {
        usuario.estado ? (
          <Chat/> 
        )  : (
          <div className='lead text-center mt-5'>Debe Iniciar Sesion</div>
        )
      }
    
    </div>    
  ) : (
    <div>
      <div>
        Cargando....
      </div>
    </div>
  )
}

export default App