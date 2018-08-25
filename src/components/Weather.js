import React from 'react';
import './Weather.css';
import PropTypes from "prop-types";
import styled from "styled-components";
import conditions_rain from "../img/rain.png";
import conditions_clear from "../img/clear.png";
import conditions_thunder from "../img/thunder.png";
import conditions_clouds from "../img/clouds.png";
import conditions_snow from "../img/snow.png";
import bg_rain from "../video/rain.mp4";
import bg_clear from "../video/clear.mp4";
import bg_thunder from "../video/thunder.mp4";
import bg_clouds from "../video/clouds.mp4";
import bg_snow from "../video/snow.mp4";

const weatherCases = {
    Rain: {
        title: "비가 오는 날에는 무릎이 시려오죠.",
        subtitle: "외출할 때에는 우산을 챙기세요.",
        icon: conditions_rain,
        bg: bg_rain,
    },
    Clear: {
        title: "하늘이 맑은 날에는 무릎이 시려오죠.",
        subtitle: "사실 언제든지 아프답니다.",
        icon: conditions_clear,
        bg: bg_clear,
    },
    Thunderstorm: {
        title: "번개가 치는 날.",
        subtitle: "저는 번개를 무서워 합니다.",
        icon: conditions_thunder,
        bg: bg_thunder,
    },
    Clouds: {
        title: "구름이 많이 끼인 날",
        subtitle: "고양이 구름을 찾아보자.",
        icon: conditions_clouds,
        bg: bg_clouds,
    },
    Snow: {
        title: "부산은 눈이 오지 않아요.",
        subtitle: "광주와서 많이 봤지만 그래도 좋아요.",
        icon: conditions_snow,
        bg: bg_snow,
    },
};

function Weather({ weatherName, temp, wind, region, hum, }) {
    console.log(weatherName);
    return (
        <DIV>
            <video autoPlay loop id="video-background" muted>
                <source src={weatherCases["Clouds"].bg} type="video/mp4" />
            </video>
            <div className="content">
                <p className="conditions">Clouds</p>
                <p className="region">{region}</p>
                <img src={weatherCases["Clouds"].icon} className="icons"/>
                <p className="temperature">{temp}º / {wind}㎳</p>
                <p className="humidity">Humidity : {hum}%</p>
                <p className="title">{weatherCases["Clouds"].title}</p>
                <p className="subtitle">{weatherCases["Clouds"].subtitle}</p>
            </div>
        </DIV>
    );
};

const DIV=styled.div`
    font-weight : bold;
`

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    hum: PropTypes.number.isRequired,
}

export default Weather