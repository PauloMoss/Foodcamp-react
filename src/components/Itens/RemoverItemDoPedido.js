


export default function removerItem(props, nome) {

    const {tipo} = props
    const {setContPrato, contPrato, setContBeb, contBeb, setContSobr, contSobr} = props.variaveisEstado;
    const {variaveisArmazenamento} = props.variaveisEstado;
    const {pedPrato, setPedPrato, pedBeb, setPedBeb, pedSobr, setPedSobr} = variaveisArmazenamento

    if(tipo === "prato") {
        remover(setContPrato, contPrato, setPedPrato, pedPrato, nome)
    }
    if(tipo === "bebida") {
        remover(setContBeb, contBeb, setPedBeb, pedBeb, nome)
    }
    if(tipo === "sobremesa") {
        remover(setContSobr, contSobr, setPedSobr, pedSobr, nome)
    }
}

function remover(funcaoContagem, contagem, funcaoArmazenarPedido, pedido, nome) {
    const removerItemDoPedido = pedido.filter(i => i.nome !== nome)
    funcaoArmazenarPedido(removerItemDoPedido)
    funcaoContagem(contagem - 1)
}