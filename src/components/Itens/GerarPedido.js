
export default function gerarPedido(props, dadosDoPedido) {

    const {tipo} = props;
    const {setContPrato, contPrato, setContBeb, contBeb, setContSobr, contSobr} = props.variaveisEstado;
    const {variaveisArmazenamento} = props.variaveisEstado;
    const {pedPrato, setPedPrato, pedBeb, setPedBeb, pedSobr, setPedSobr} = variaveisArmazenamento

    if(tipo === "prato") {
        pedidoDoItem(setContPrato, contPrato, setPedPrato, pedPrato, dadosDoPedido)
    }
    if(tipo === "bebida") {
        pedidoDoItem(setContBeb, contBeb, setPedBeb, pedBeb, dadosDoPedido)
    }
    if(tipo === "sobremesa") {
        pedidoDoItem(setContSobr, contSobr, setPedSobr, pedSobr, dadosDoPedido)
    }
}

function pedidoDoItem(funcaoContagem, contagem, funcaoArmazenarPedido, pedido, dadosDoPedido) {
    funcaoContagem(contagem + 1)

        if(contagem === 0) {
            funcaoArmazenarPedido([dadosDoPedido])
        } else {
            funcaoArmazenarPedido([...pedido, dadosDoPedido])
        } 
}