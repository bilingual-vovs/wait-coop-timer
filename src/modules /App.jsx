import React, { Component } from 'react';
import "./App.css"

class App extends Component {
    state = {
        
            years: 0,
            mounth: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
    }
    componentDidMount = () => {
        this.target = new Date("2023-03-26 10:00")
        setInterval(this.update, 1)
    }
    update = () => {
        let {target} = this
        let cummon = new Date()
        let res = new Date(target - cummon)
        this.setState({
            years: res.getFullYear()-1970 ,
            mounth: res.getMonth() ,
            days: res.getDate()-1 ,
            hours: res.getHours(),
            minutes: res.getMinutes() ,
            seconds: res.getSeconds(),
            milisec: res.getMilliseconds()
        })
    }
    render() {
        let {years, mounth, days, hours, minutes, seconds, milisec} = this.state
        return (
            <div>
                <h1>Till we meet with Kristinika</h1>
                <ul>
                    <li>
                        <p>{years} y.</p>
                    </li>
                    <li>
                        <p>{mounth} m.</p>
                    </li>
                    <li>
                        <p>{days} d.</p>
                    </li>
                    <li>
                        <p> {hours} :</p>
                    </li>
                    <li>
                        <p> {minutes} :</p>
                    </li>
                    <li>
                        <p> {seconds} :</p>
                    </li>
                    <li>
                        <p> {milisec}</p>
                    </li>
                </ul>
                <h2>P. S. - That is no UA version of this amazing font, so.</h2>
            </div>
            
        );
    }
}

export default App;
