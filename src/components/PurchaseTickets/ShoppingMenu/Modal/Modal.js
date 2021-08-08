import React from 'react'
import smile from './smile.png'
import "./Style/Modal.scss"

export const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false)}}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <img src={smile}/>
                <h2>Оплата прошла успешно!</h2>
            </div>            
        </div>
    )
}
