import React from 'react';
import useStyles from './styles';

const WeatherData = ({ lat, lng, data }) => {
    const classes = useStyles();
  
    return (
        <div className={classes.markerContainer} >
            <div lat={lat} lng={lng}>   
            <img alt={"weather-icon"} height="70px" src={`https://openweathermap.org/img/w/${data?.list?.[0]?.weather[0].icon}.png`} />
            </div>
        </div>
    )
};

    export default WeatherData