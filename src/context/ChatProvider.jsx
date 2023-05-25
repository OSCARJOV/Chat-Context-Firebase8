import { createContext, useContext, useState, useEffect } from "react"
import {auth, db, provider } from '../firebase'
/* eslint-disable react/prop-types */

export const ChatContext = createContext()

const ChatProvider = (props) => {

    const dataUsuario = {uid:null, email:null, estado: null}
    const [usuario, setUsuario] = useState(dataUsuario)
    const [mensaje, setMensaje] = useState([])

    useEffect(() => {
        detectarusuario()
    }  , []) 
    
    const detectarusuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUsuario({uid: user.uid, email: user.email, estado:true})
                cargarMensajes()
            }else{
                setUsuario({uid:null, email:null, estado: false})
            }
        })
    }


    const ingresoUsuario = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error);

        }
    }

    const cerrarSesion = async() => {
       auth.signOut()
    } 


    const cargarMensajes = () => {
        db.collection('chat').orderBy('fecha') // nompbre de la coleccion
        .onSnapshot(query => { // esto siempre se ejecuta en el sitio web
            const arrayMensajes = query.docs.map(item => item.data())
            setMensaje(arrayMensajes)
          //  console.log(arrayMensajes);
        })
    }

    const agregaarMensajes = async(uidChat, textoInput) => { //uidchat es lo que voy a recibir del form
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                udi: uidChat
            })
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <ChatContext.Provider value={{usuario, ingresoUsuario,  cerrarSesion, mensaje, agregaarMensajes}}>
            
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider

export const useUserContext = () => useContext(ChatContext)
