import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/header'

import Home from './pages/home'
import Filme from './pages/filme'
import Erro from './pages/erro'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes