import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CoordenadasDelContexto } from '../contexto/Context'

export const VariablesClima = () => {
    const { weatherInfo, queryWeather } = useContext(CoordenadasDelContexto);

    if (weatherInfo !== "") {
        return (
            <div className="p-2">
        
                    <div class="field is-grouped is-grouped-multiline is-inline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-dark"> Wind:</span>
                            <span class="tag is-info">{weatherInfo.current.wind_speed}<small>m/s</small></span>
                            </div>
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-multiline is-inline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-dark"> Humidity:</span>
                            <span class="tag is-info"> {weatherInfo.current.humidity}<small>%</small></span>
                            </div>
                        </div>
                    </div>


 
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-dark"> Dew Pt:</span>
                            <span class="tag is-info"> {weatherInfo.current.dew_point}<small>°C</small></span>
                            </div>
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-dark"> Uv Index:</span>
                            <span class="tag is-info"> {weatherInfo.current.uvi}<small></small></span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-dark"> Visibility:</span>
                            <span class="tag is-info">  {weatherInfo.current.visibility}<small>mts</small></span>
                            </div>
                        </div>
                    </div>


                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-dark"> Pressure:</span>
                            <span class="tag is-info">  {weatherInfo.current.pressure}<small>hPa</small></span>
                            </div>
                        </div>
                    </div>

            </div>
            );
        } else {
            return (
            <div className="spinner-grow text-center" role="status">

            </div>
            );
        }
}
