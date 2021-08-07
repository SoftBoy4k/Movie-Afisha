import React, {useState} from 'react'
import { connect } from 'react-redux'
import CardForm from '../../CardForm/CardForm'
import { Modal } from './Modal/Modal'
import { ReservedTickets } from './ReservedTickets/ReservedTickets'
import './ShoppingMenu.css'

const ShoppingMenu = ({name, activeNum, totalPrice, time, ClickHandler, price, date}) => {

    const [modalActive, setModalActive] = useState(false)

    const ClickHandlerRemove = (e) => {
        activeNum.splice(activeNum.indexOf(e.target.parentElement.dataset.place), 1)
    }

    return (
        <div className="shopping-menu__wrapper">
            <div className="shopping-menu__header-text">
                <p onClick={ClickHandlerRemove}>{name}</p>
                <p>{date}</p>
                <p>{time}</p>
            </div>
            {activeNum.map((str, i) => <ReservedTickets ClickHandlerRemove={ClickHandler} price={price}placeTickets={str.split('.')} numTickets={++i}/>)}
            <hr/>
            <p className="shopping-menu__total-price">Итого: {totalPrice}</p>
            <CardForm setModalActive={setModalActive}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        date: state.date.join('.'),
        time: state.time
    })
}

export default connect(mapStateToProps, null)(ShoppingMenu)