import { ChatContext, useUserContext } from "../context/ChatProvider"

import {useState} from 'react'



const Agregar = () => {

    const { agregaarMensajes, usuario } = useUserContext(ChatContext)
    const [nota, setNota] = useState('')

const agregar = (e) => {
    e.preventDefault()
    if(!nota.trim()){
        console.log('vacio');
        return
    }
    agregaarMensajes(usuario.uid, nota)
    setNota('')
}


    return (
        <form
        className='fixed-bottom input-group p-3 bg-dark' 
        onSubmit={agregar}
        >
        

        <input 
            type="text"
            className='form-control'
            value={nota}
            onChange={e => setNota(e.target.value)}  // aqui es donde capturo lo que escribe el usuario
        />
        <div className='input-group-append'>
            <button className='btn btn-primary'
                    type='submit'
            >
                enviar
            </button>
        </div>

        </form >
       
    )

}

export default Agregar 