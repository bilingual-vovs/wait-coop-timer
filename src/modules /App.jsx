import React, { Component } from 'react';
import "./App.css"
import clock from "./Clock.png"
import tik from "./tik.png"

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
        this.target = new Date("2023-03-26 12:00")
        setInterval(this.update, 1)
    }
    update = () => {
        let {target} = this
        let cummon = new Date()
        let res = new Date(target - cummon)
        this.setState({
            years: res.getFullYear()-1970 ,
            mounth: res.getMonth() ,
            days: res.getDate() ,
            hours: res.getHours(),
            minutes: res.getMinutes() ,
            seconds: res.getSeconds(),
            milisec: res.getMilliseconds()
        })
    }
    render() {
        let {years, mounth, days, hours, minutes, seconds, milisec} = this.state
        let mounthPercent = 12 / mounth
        let mounthStyle = {
            transform: `rotate(${-90+360-360/mounthPercent}deg)`,
            left: 133+125*(1-Math.cos(360/mounthPercent)) + "px" ,
            top: 160+125*Math.sin(360/mounthPercent) + "px"
        }
        let daysPercent = 31 / days
        let daysStyle = {
            transform: `rotate(${-90+360-360/daysPercent}deg)`
        }
        let hoursPercent = 24 / hours
        let hoursStyle = {
            transform: `rotate(${-90+360-360/hoursPercent}deg)`
        }
        let minutesPercent = 60 / minutes
        let minutesStyle = {
            transform: `rotate(${-90+360-360/minutesPercent}deg)`,
            left: 125+125*Math.cos(360/minutesPercent) + "px",
            top: 125+125*Math.sin(360/minutesPercent) + "px"
        }
        let secondsPercent = 60 / seconds
        let secondsStyle = {
            transform: `rotate(${-90+360-360/secondsPercent}deg)`,
            left: 133+125*Math.cos(-90+360-360/secondsPercent) + "px" ,
            top: 160+125*Math.cos(-90+360-360/secondsPercent) + "px"
        }
        return (
            <div>
                <img id='clock' src={clock} alt="clock"/>
                <img style={mounthStyle} className='tik' id='mounth' src={tik} alt="tik"/>
                <img style={daysStyle} className='tik' id='day' src={tik} alt="tik"/>
                <img style={hoursStyle} className='tik' id='hours' src={tik} alt="tik"/>
                <img style={minutesStyle} className='tik' id='minutes' src={tik} alt="tik"/>
                <img style={secondsStyle} className='tik' id='seconds' src={tik} alt="tik"/>
                <img style={mounthStyle} className='tik' id='milisec' src={tik} alt="tik"/>
            </div>
            
        );
    }
}

export default App;
