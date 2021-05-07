import React from 'react';
import conversaWpp from './ConversaWpp';

export default function RevisaoPedido(props) {

    const [linkWpp, setLinkWpp] = React.useState('https://wa.me/?text=')
    const {pedPrato, pedBeb, pedSobr} = props

    let valorTotalDoPedido = 0;
    pedPrato.forEach(p => {valorTotalDoPedido += p.valor});
    pedBeb.forEach(b => {valorTotalDoPedido += b.valor});
    pedSobr.forEach(s => {valorTotalDoPedido += s.valor});

    valorTotalDoPedido = (String(valorTotalDoPedido.toFixed(2))).replace(".", ",")

    if(pedPrato!==[] && pedBeb!==[] && pedSobr!==[]) {
        return (
            <>
                <div className="topo">
                    <h1>FoodCamp</h1>
                    <h2>Sua comida em 6 minutos</h2>
                </div>
                <div className="confirme_pedido">
                    <p>Confirme seu pedido</p>
                    <div className="menuEscolhido">
                        {pedPrato.map(p=> (<div><span>{p.nome} {(p.quantidade === 1) ? "" : `(x${p.quantidade})`}</span> <span>R$ {(String(p.valor.toFixed(2))).replace(".", ",")}</span></div>))}
                        {pedBeb.map(b=> (<div><span>{b.nome} {(b.quantidade === 1) ? "" : `(x${b.quantidade})`}</span> <span>R$ {(String(b.valor.toFixed(2))).replace(".", ",")}</span></div>))}
                        {pedSobr.map(s=> (<div><span>{s.nome} {(s.quantidade === 1) ? "" : `(x${s.quantidade})`}</span> <span>R$ {(String(s.valor.toFixed(2))).replace(".", ",")}</span></div>))}

                        <div className="total"><span>TOTAL</span><span>R$ {valorTotalDoPedido}</span></div>
                    </div>
                    <a href={linkWpp} target="_blank" onClick={() => conversaWpp(props, valorTotalDoPedido, setLinkWpp)}><button className="tudo_certo"><span>Tudo certo, Pode pedir!</span></button></a>
                    <button className="cancelar"><span>{props.children}</span></button>
                </div>
            </>
        );
    } else {
        return (
            <button class="cancelar"><span>{props.children}</span></button>
        );
    }
}

