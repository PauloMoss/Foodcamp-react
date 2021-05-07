

export default function atualizarPedido(props, nome, contador, valorDoItem) {

    const {tipo} = props
    const {variaveisArmazenamento} = props.variaveisEstado;
    const {pedPrato, setPedPrato, pedBeb, setPedBeb, pedSobr, setPedSobr} = variaveisArmazenamento

    if(tipo === "prato") {
        atualizar(setPedPrato, pedPrato, nome, contador, valorDoItem)
    }
    if(tipo === "bebida") {
        atualizar(setPedBeb, pedBeb, nome, contador, valorDoItem)
    }
    if(tipo === "sobremesa") {
        atualizar(setPedSobr, pedSobr, nome, contador, valorDoItem)
    }
}

function atualizar(funcaoArmazenarPedido, pedido, nome, contador, valorDoItem) {
    const atualizar = pedido.find(i => i.nome === nome);
    atualizar.quantidade = contador
    atualizar.valor = (contador * valorDoItem)
    funcaoArmazenarPedido([...pedido.filter(i => i.nome !== nome), atualizar])
}