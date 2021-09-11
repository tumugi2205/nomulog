import React, {useState, useEffect} from "react"
import './OuroClock.css';
import Layout from '../../component/Layout/Layout'



const OuroClock = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    // 現在時刻の設定
    var time = new Date();
    var second = time.getSeconds();
    var minute = time.getMinutes();
    var hour = time.getHours();
    // 現在時刻を元にした角度の設定
    var secondDeg = (second * 360 / 60);
    var minuteDeg = (minute * 360 / 60) + ((second * 360 / 60) / 60);
    var hourDeg = (hour * 360 / 12) + ((minute * 360 / 60) / 12)  + ((second * 360 / 60) / 720);
  
    console.log(second,secondDeg)
    console.log(minute,minuteDeg)
    console.log(hour,hourDeg)
    var animation = document.createElement("style");
    animation.innerHTML = "@keyframes rotation-s {0% {transform-origin:center bottom; transform: rotate(" + secondDeg + "deg)}100% {transform-origin:center bottom; transform: rotate(" + (secondDeg + 360) + "deg)}}@keyframes rotation-m {0% {transform-origin:center bottom; transform: rotate(" + minuteDeg + "deg)}100% {transform-origin:center bottom; transform: rotate(" + (minuteDeg + 360) + "deg)}}@keyframes rotation-h {0% {transform-origin:center bottom; transform: rotate(" + hourDeg + "deg)}100% {transform-origin:center bottom; transform: rotate(" + (hourDeg + 360) + "deg)}}";
    document.head.appendChild(animation);
  }, [])
  return(
    <Layout>
    <img
    className="ouro"
    src={`./images/Kronii.png`}
    key="Kronii"/>

<img
    className="second"
    src={`./images/second.png`}
    key="second"/>

<img
    className="minute"
    src={`./images/minute.png`}
    key="minute"/>

    <img
    className="hour"
    src={`./images/hour.png`}
    key="hour"/>
    </Layout>
  )
}

export default OuroClock;
