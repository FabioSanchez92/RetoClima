import React from 'react'
import { Context } from '../contexto/Context'
import {Nav} from '../header/nav'
import { InfoDia } from '../infodia/InfoDia'
import { InfoHoy } from '../infohoy/InfoHoy'
import { VariablesClima } from '../variables/VariablesClima'
export const InicioApp = () => {
    return (

            <Context>
                <Nav/>
                <InfoHoy/>
                <InfoDia></InfoDia>
                <VariablesClima/>

            </Context>
    )
}
