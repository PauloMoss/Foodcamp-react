import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import RevisaoPedido from './RevisaoPedido';

export default function App() {

    const [pedidoPrato, setPedidoPrato] = React.useState();
    const [pedidoBebida, setPedidoBebida] = React.useState();
    const [pedidoSobremesa, setPedidoSobremesa] = React.useState();

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home pedPrato={pedidoPrato} setPedPrato={setPedidoPrato} pedBeb={pedidoBebida} setPedBeb={setPedidoBebida} pedSobr={pedidoSobremesa} setPedSobr={setPedidoSobremesa}>
                        <Link to="/revisar">Fechar Pedido</Link>
                    </Home>
                </Route>
                <Route path="/revisar">
                    <RevisaoPedido pedPrato={pedidoPrato} pedBeb={pedidoBebida} pedSobr={pedidoSobremesa}>
                        <Link to="/">Cancelar</Link>
                    </RevisaoPedido>
                </Route>
            </Switch>
        </Router>
    );
}