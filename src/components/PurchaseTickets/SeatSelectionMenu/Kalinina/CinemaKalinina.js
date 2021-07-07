import React, { Component } from 'react'
import './CinemaKalinina.css'


export default class CinemaKalinina extends Component {
    state = {
        activeNum: [],
        totalPrice: 0
    }

    ClickHandler = (e) => {
        let {activeNum} = this.state;
        const elemNum = e.target.dataset.place;
        !activeNum.includes(elemNum) && activeNum.length < 5 ? this.ChoicePlace(activeNum, elemNum, e) : this.CancelPlace(activeNum, elemNum, e);
    }

    ChoicePlace = (activeNum, elemNum, e) => {
        this.setState(() => {
            return (
                activeNum = activeNum.push(elemNum),
                this.state.totalPrice = this.state.totalPrice + +e.target.dataset.price
            )
        }) 
    }

    CancelPlace = (activeNum, elemNum, e) => {
        this.setState(() => {
            return(
                activeNum.splice(activeNum.indexOf(elemNum), 1),
                this.state.totalPrice = this.state.totalPrice - +e.target.dataset.price
            )
        }) 
    }

    render() {
        console.log(this.state.totalPrice)
        console.log(this.state.activeNum)
        return (
            <>
                <div className="seat-place">

                    <div className="seat-place__numbers">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                    </div>

                    <div className="seat-place__place">
                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.1" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.1" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.1" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.1" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.1" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.1" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.1" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.1" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.1" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.1" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.1" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.1" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.1') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.1" data-price="6.50">13</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.2" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.2" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.2" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.2" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.2" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.2" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.2" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.2" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.2" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.2" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.2" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.2" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.2" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.2" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.2" data-price="6.50">15</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('16.2') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="16.2" data-price="6.50">16</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.3" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.3" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.3" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.3" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.3" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.3" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.3" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.3" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.3" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.3" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.3" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.3" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.3" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.3" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.3" data-price="6.50">15</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('16.3') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="16.3" data-price="6.50">16</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.4" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.4" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.4" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.4" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.4" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.4" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.4" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.4" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.4" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.4" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.4" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.4" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.4" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.4" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.4" data-price="6.50">15</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('16.4') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="16.4" data-price="6.50">16</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.5" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.5" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.5" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.5" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.5" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.5" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.5" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.5" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.5" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.5" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.5" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.5" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.5" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.5" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.5') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.5" data-price="6.50">15</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.6" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.6" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.6" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.6" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.6" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.6" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.6" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.6" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.6" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.6" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.6" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.6" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.6" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.6" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.6') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.6" data-price="6.50">15</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.7" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.7" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.7" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.7" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.7" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.7" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.7" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.7" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.7" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.7" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.7" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.7" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.7" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.7" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.7') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.7" data-price="6.50">15</span></div>
                        </div>

                        <div className="place-row">
                            <div className="place"><span className={this.state.activeNum.includes('1.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="1.8" data-price="6.50">1</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('2.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="2.8" data-price="6.50">2</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('3.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="3.8" data-price="6.50">3</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('4.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="4.8" data-price="6.50">4</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('5.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="5.8" data-price="6.50">5</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('6.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="6.8" data-price="6.50">6</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('7.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="7.8" data-price="6.50">7</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('8.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="8.8" data-price="6.50">8</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('9.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="9.8" data-price="6.50">9</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('10.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="10.8" data-price="6.50">10</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('11.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="11.8" data-price="6.50">11</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('12.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="12.8" data-price="6.50">12</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('13.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="13.8" data-price="6.50">13</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('14.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="14.8" data-price="6.50">14</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('15.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="15.8" data-price="6.50">15</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('16.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="16.8" data-price="6.50">16</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('17.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="17.8" data-price="6.50">17</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('18.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="18.8" data-price="6.50">18</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('19.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="19.8" data-price="6.50">19</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('20.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="20.8" data-price="6.50">20</span></div>
                            <div className="place"><span className={this.state.activeNum.includes('21.8') ? "span activeE" : "span"} onClick={this.ClickHandler} data-place="21.8" data-price="6.50">21</span></div>
                        </div>

                    </div>

                    <div className="seat-place__numbers">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                    </div>
                </div>

                <p className="total-price">Сумма: {this.state.totalPrice}р.</p>
            </>
        )
    }
}