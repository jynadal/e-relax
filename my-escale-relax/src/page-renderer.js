import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import QuatresCentsQuatres from './pages/404'

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(component())        
    } catch (err) {
        console.warn(err)
        return React.createElement(() =>
        <QuatresCentsQuatres />)        
    }
} 

export default function PageRenderer () {
    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)
}
