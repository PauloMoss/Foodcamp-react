import React from 'react';
import Topo from './Topo';
import Pratos from './Pedidos/Pratos';
import Bebidas from './Pedidos/Bebidas';
import Sobremesas from './Pedidos/Sobremesas';
import Conclusao from './Pedidos/Conclusao';
import RevisaoPedido from './RevisaoPedido';


export default function App() {

    const [pratoSelecionado, setPratoSelecionado] = React.useState(0);
    const [bebidaSelecionada, setBebidaSelecionada] = React.useState(0);
    const [sobremesaSelecionada, setSobremesaSelecionada] = React.useState(0);

    return (
        <>
            <Topo />

            <Pratos setPrato={setPratoSelecionado} prato={pratoSelecionado} />
            <Bebidas setBebida={setBebidaSelecionada} bebida={bebidaSelecionada} />
            <Sobremesas setSobremesa={setSobremesaSelecionada} sobremesa={sobremesaSelecionada} />
            
            <Conclusao prato={pratoSelecionado} bebida={bebidaSelecionada} sobremesa={sobremesaSelecionada}/>
        </>
    );
}