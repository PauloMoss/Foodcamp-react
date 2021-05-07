


export default function removerItem(props, nome) {

    const {tipo} = props
    const {contagemItens, setContagemItens}  = props.variaveisEstado;
    const {variaveisArmazenamento} = props.variaveisEstado;
    const {armazenarPedido, setArmazenarPedido} = variaveisArmazenamento

    // Eu gostaria de criar uma funcao generica pra fazer a remocao, mas nao consegui passar a chave do objeto como parametro! :(

    if(tipo === "prato") {

        const removerItemDoPedido = armazenarPedido.prato.filter(i => i.nome !== nome)
        setArmazenarPedido({...armazenarPedido, prato: removerItemDoPedido})
        setContagemItens({...contagemItens, prato: (contagemItens.prato - 1)})
    }
    if(tipo === "bebida") {

        const removerItemDoPedido = armazenarPedido.bebida.filter(i => i.nome !== nome)
        setArmazenarPedido({...armazenarPedido, bebida: removerItemDoPedido})
        setContagemItens({...contagemItens, bebida: (contagemItens.bebida - 1)})
    }
    if(tipo === "sobremesa") {

        const removerItemDoPedido = armazenarPedido.sobremesa.filter(i => i.nome !== nome)
        setArmazenarPedido({...armazenarPedido, sobremesa: removerItemDoPedido})
        setContagemItens({...contagemItens, sobremesa: (contagemItens.sobremesa - 1)})
    }
}