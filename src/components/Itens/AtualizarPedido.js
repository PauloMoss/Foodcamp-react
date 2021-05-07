

export default function atualizarPedido(props, nome, contador, valorDoItem) {

    const {tipo} = props
    const {variaveisArmazenamento} = props.variaveisEstado;
    const {armazenarPedido, setArmazenarPedido} = variaveisArmazenamento

    // Eu gostaria de criar uma funcao generica pra fazer a atualizacao, mas nao consegui passar a chave do objeto como parametro! :(

    if(tipo === "prato") {
        const atualizar = armazenarPedido.prato.find(i => i.nome === nome);
        atualizar.quantidade = contador
        atualizar.valor = (contador * valorDoItem)
        setArmazenarPedido({...armazenarPedido, prato: [...armazenarPedido.prato.filter(i => i.nome !== nome), atualizar]})
    }
    if(tipo === "bebida") {
        const atualizar = armazenarPedido.bebida.find(i => i.nome === nome);
        atualizar.quantidade = contador
        atualizar.valor = (contador * valorDoItem)
        setArmazenarPedido({...armazenarPedido, bebida: [...armazenarPedido.bebida.filter(i => i.nome !== nome), atualizar]})
    }
    if(tipo === "sobremesa") {
        const atualizar = armazenarPedido.sobremesa.find(i => i.nome === nome);
        atualizar.quantidade = contador
        atualizar.valor = (contador * valorDoItem)
        setArmazenarPedido({...armazenarPedido, sobremesa: [...armazenarPedido.sobremesa.filter(i => i.nome !== nome), atualizar]})
    }
}