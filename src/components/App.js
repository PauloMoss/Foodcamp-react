import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import RevisaoPedido from './FinalizarPedido/RevisaoPedido';

export default function App() {

    const [armazenarPedido, setArmazenarPedido] = React.useState({prato: [], bebida: [], sobremesa: []})
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home armazenarPedido={armazenarPedido} setArmazenarPedido={setArmazenarPedido}>
                        <Link to="/revisar"><button className="pedido_fechado" >Fechar Pedido</button></Link>
                    </Home>
                </Route>
                <Route path="/revisar">
                    <RevisaoPedido armazenarPedido={armazenarPedido} setArmazenarPedido={setArmazenarPedido}>
                        <Link to="/" >Cancelar</Link>
                    </RevisaoPedido>
                </Route>
            </Switch>
        </Router>
    );
}