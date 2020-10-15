import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CoordenadasDelContexto } from '../contexto/Context';

import axios from 'axios'

export const Nav = () => {
    const [ciudad, setCiudad] = useState("");
    const [datos, setDatos] = useState([]);
    const [contador, setContadort] = useState(0);
    const {
        selectedCity,
        setSelectedCity,
        setLatitud,
        setLongitud,
        setQueryWeather,
    } = useContext(CoordenadasDelContexto);
    const access_token = 'pk.eyJ1IjoiZnNhbmNoZXo5MiIsImEiOiJja2c0aWIzNXkwa3ZoMnRzMXhuZnA4bTY0In0.XyaMboojf9q8L9UWbuslGw';

    
    const handleClick = () => {
        setCiudad(document.getElementById("buscador").value);
    };
    
    const handleChange = (e) => {
    setCiudad(e.target.value);
    document.getElementById("resultAPI").style.display = "inline";
    };
    const handleCityItemClick = (e) => {
        setSelectedCity(datos[e.target.id]);
        setContadort(contador + 1);

        document.getElementById("resultAPI").style.display = "none";
    };
    useEffect(() => {
        if (ciudad !== "") {
            axios
                .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json?access_token=${access_token}`)
                .then((res) => {
                    setDatos(res.data.features);
                });
            } else {
                setDatos([]);
                setSelectedCity([]);
                setLatitud("");
                setLongitud("");
                setQueryWeather(false);
            }
    }, [ciudad]);

    useEffect(() => {
        if (ciudad !== "") {
            document.getElementById("buscador").value = selectedCity.place_name;
            setLatitud(selectedCity.geometry.coordinates[1]);
            setLongitud(selectedCity.geometry.coordinates[0]);
            setQueryWeather(true);
        }
    }, [contador]);

    return (
        <>
            <div className="columns is-vcentered">
                <div className="column is-6">
                    <Link to="/" className="navbar-brand is-size-3 p-3 has-text-success">
                        Información del Clíma
                    </Link>
                </div>
                <div className="column">
                        <article className="panel is-primary">
                            <div className="panel-block">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input 
                                                className="input " 
                                                type="text" 
                                                placeholder="Buscar Ciudad"
                                                id="buscador"
                                                autoComplete="off"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="control">
                                            <Link to="/" className="button is-info">
                                                <i className="fas fa-trash-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                            </div>
                        </article>
                </div>
            </div>
            <div id="resultAPI" className="box column is-6 is-pulled-right is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd	">
                {
                    datos.map((place, index) => {
                        return (
                            <Link to="/" 
                                key={index}
                                id={index} 
                                onClick={handleCityItemClick}
                                className="panel-block is-active">
                                <span className="panel-icon">
                                    <i className="fas fa-book" aria-hidden="true"></i>
                                </span>
                                {place.place_name}
                            </Link>
                        )
                    })
                }
            </div>
            <br/>
        </>
    )
}
