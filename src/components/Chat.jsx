import { ChatContext, useUserContext } from "../context/ChatProvider"
import Agregar from "./Agregar"
import { useRef, useEffect } from "react"


const Chat = () => {

    const { mensaje, usuario } = useUserContext(ChatContext)
    const refZonaChat = useRef(null)

    useEffect(() => {
        console.log(refZonaChat);
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight

    }, [mensaje])

    return (
        <div className='mt-3 px-2'
             style={{height: '75vh', overflowY: 'scroll'}}
             ref={refZonaChat}
        >

{
                mensaje.map((item, index) => (
                    usuario.uid === item.udi ? (
                        <div className='d-flex justify-content-end mb-2' key={index}>
                            <span className='badge badge-pill badge-primary'>
                                {item.texto}
                            </span>
                        </div>
                    ) : (
                        <div className='d-flex justify-content-start mb-2' key={index}>
                            <span className='badge badge-pill badge-secondary'>
                            {item.texto}
                            {console.log(usuario.uid)}
                            {console.log(item.udi)}
                            </span>
                        </div>
                    )
                ))
            }





            <Agregar />
        </div>
    )
}

export default Chat