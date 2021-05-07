import React from 'react';
import conversaWpp from './ConversaWpp';
import Topo from '../Topo/Topo';

export default function RevisaoPedido(props) {

    const [linkWpp, setLinkWpp] = React.useState('https://wa.me/?text=')
    const {armazenarPedido} = props
    const {prato, bebida, sobremesa} = armazenarPedido
    
    let valorTotalDoPedido = 0;
    prato.forEach(p => {valorTotalDoPedido += p.valor});
    bebida.forEach(b => {valorTotalDoPedido += b.valor});
    sobremesa.forEach(s => {valorTotalDoPedido += s.valor});
    valorTotalDoPedido = (String(valorTotalDoPedido.toFixed(2))).replace(".", ",")

    if(prato!==[] && bebida!==[] && sobremesa!==[]) {
        return (
            <>
                <Topo />
                <div className="confirme_pedido">
                    <p>Confirme seu pedido</p>
                    <div className="menuEscolhido">
                        {prato.map(p=> (<div><span>{p.nome} {(p.quantidade === 1) ? "" : `(x${p.quantidade})`}</span><span>R$ {(String(p.valor.toFixed(2))).replace(".", ",")}</span></div>))}
                        {bebida.map(b=> (<div><span>{b.nome} {(b.quantidade === 1) ? "" : `(x${b.quantidade})`}</span><span>R$ {(String(b.valor.toFixed(2))).replace(".", ",")}</span></div>))}
                        {sobremesa.map(s=> (<div><span>{s.nome} {(s.quantidade === 1) ? "" : `(x${s.quantidade})`}</span><span>R$ {(String(s.valor.toFixed(2))).replace(".", ",")}</span></div>))}

                        <div className="total"><span>TOTAL</span><span>R$ {valorTotalDoPedido}</span></div>
                    </div>
                    <a href={linkWpp} target="_blank" onClick={() => conversaWpp(props, valorTotalDoPedido, setLinkWpp)}><button className="tudo_certo"><span>Tudo certo, Pode pedir!</span></button></a>
                    <button className="cancelar" onClick={() => cancelarPedido(props)}><span>{props.children}</span></button>
                </div>
            </>
        );
    } else {
        return alert("Erro")
    }
}

function cancelarPedido(props) {

    const {setArmazenarPedido} = props;
    setArmazenarPedido(({prato: [], bebida: [], sobremesa: []}));
}

