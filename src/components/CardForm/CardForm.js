import React, { Component } from 'react'
import './Style/CardForm.scss'

export default class LoginForm extends Component {
    state = {
        cardname: '',
        cardnumber: '',
        expyear: '',
        cvv: ''
    }

    handelChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleClickOnSubmit = (setModalActive) => {
        const {cardname, cardnumber, expyear, cvv} = this.state
        if(cardname && cardnumber && expyear && cvv){
            this.setState(() => {return(this.state.cardname = "", this.state.cardnumber = "", this.state.expyear = "", this.state.cvv = "")})
            return setModalActive(true)
        }
        return false
    }

    render() {
        const {setModalActive} = this.props
        return (
            <form className="card-form" onSubmit={this.handleSubmit}>
                     <div className="card-elem">
                         <label className="card-label" for="cname">Имя на карте</label><br/>
                         <input className="card-input" value={this.state.cardname} type="text" id="cname" name="cardname" placeholder="Ivanov Ivan" onChange={this.handelChange} required/>
                     </div>
                     <div className="card-elem">
                         <label className="card-label" for="ccnum">Номер карты</label><br/>
                         <input className="card-input" value={this.state.cardnumber} type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={this.handelChange} required/>
                     </div>
                     <div className="card-elem">
                         <label className="card-label" for="expiration">Срок действия(мм/гг)</label><br/>
                         <input className="card-input card-input small" value={this.state.expyear} type="text" id="expyear" name="expyear" placeholder="09/25" onChange={this.handelChange} required/>
                     </div>
                     <div className="card-elem">
                         <label className="card-label" for="cvv">CV-код</label><br/>
                         <input className="card-input card-input small" value={this.state.cvv} type="text" id="cvv" name="cvv" placeholder="352" onChange={this.handelChange} required/>
                     </div>
                     <button className="card-btn" onClick={() => this.handleClickOnSubmit(setModalActive)}>Click</button>
             </form>
        )
    }
}
