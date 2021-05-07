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

    const [pedidoPrato, setPedidoPrato] = React.useState();
    const [pedidoBebida, setPedidoBebida] = React.useState();
    const [pedidoSobremesa, setPedidoSobremesa] = React.useState();

    return (
        <>
            <Topo />

            <Pratos setPrato={setPratoSelecionado} prato={pratoSelecionado} pedidoPrato={pedidoPrato} setPedidoPrato={setPedidoPrato} />
            <Bebidas setBebida={setBebidaSelecionada} bebida={bebidaSelecionada} pedidoBebida={pedidoBebida} setPedidoBebida={setPedidoBebida} />
            <Sobremesas setSobremesa={setSobremesaSelecionada} sobremesa={sobremesaSelecionada} pedidoSobremesa={pedidoSobremesa} setPedidoSobremesa={setPedidoSobremesa} />
            
            <Conclusao prato={pratoSelecionado} bebida={bebidaSelecionada} sobremesa={sobremesaSelecionada}/>
        </>
    );
}