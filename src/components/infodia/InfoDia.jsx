import React, { useContext } from 'react'
import { CoordenadasDelContexto } from '../contexto/Context';

export const InfoDia = () => {
    const { weatherInfo } = useContext(CoordenadasDelContexto);

    const dias = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    if (weatherInfo !== "") {
    return (
        <>

            <div className="container ">
                <div class="columns is-multiline is-mobile is-centered">
                    {
                        weatherInfo.daily.map((i, index) => {
                            let fecha = new Date(i.dt * 1000);
                            let dia = dias[fecha.getDay()];
                            let dayMinTemp = `${i.temp.min}°C`;
                            let dayMaxTemp = `${i.temp.max}°C`;
                            let codeIcon = i.weather[0].icon;
                            let description = i.weather[0].description;
                            let pressure = i.pressure;
                            let humidity = i.humidity;
                            let windSpeed = i.wind_speed;
                            return(
                            
                                <div class="column is-2">
                                    <article class="column is-12 is-centered is-multiline is-mobile tile is-child notification is-primary-light">
                                        <div className="card">
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src={`http://openweathermap.org/img/wn/${codeIcon}@2x.png`} alt="Placeholder image"/>
                                                </figure>
                                                <p class="title is-6 has-text-centered p-4">{dia}</p>
                                                <p class="tag is-success is-light has-text-centered  p-4">{description}</p>
                                            </div>
                                        </div>
                                        <div class="tags are-medium mt-2">
                                            <span class="tag is-info is-normal">Min:{` ${dayMinTemp}`}</span>
                                            <span class="tag is-info is-normal">Max:{` ${dayMaxTemp}`}</span>
                                        </div>
                                        <div class="tags are-medium mt-2">
                                            <span class="tag is-info is-normal is-light"><code>{` ${ pressure } `}</code>hPa</span>
                                            <span class="tag is-info is-normal is-light"> <code>{` ${ humidity } `}</code>%</span>
                                            <span class="tag is-info is-normal is-light"> <code>{` ${ windSpeed } `}</code>m/s</span>
                                        </div>
                                    </article>
                                </div>
                                
                            )
                            
                        })
                        
                    }
                </div>
            </div>
        </>
    );
    } else {
    return (
        <div className="spinner-grow text-center" role="status">
    
        </div>
    );
    }
}
