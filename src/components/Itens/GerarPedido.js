
export default function gerarPedido(props, dadosDoPedido) {
    
    const {tipo} = props;
    const {contagemItens, setContagemItens}  = props.variaveisEstado;
    const {variaveisArmazenamento} = props.variaveisEstado;
    const {armazenarPedido, setArmazenarPedido} = variaveisArmazenamento

    if(tipo === "prato") {

        setContagemItens({...contagemItens, prato: (contagemItens.prato + 1)})
        setArmazenarPedido({...armazenarPedido, prato: [...armazenarPedido.prato, dadosDoPedido]})
    }
    if(tipo === "bebida") {
        
        setContagemItens({...contagemItens, bebida: (contagemItens.bebida + 1)})
        setArmazenarPedido({...armazenarPedido, bebida: [...armazenarPedido.bebida, dadosDoPedido]})
    }
    if(tipo === "sobremesa") {
        
        setContagemItens({...contagemItens, sobremesa: (contagemItens.sobremesa + 1)})
        setArmazenarPedido({...armazenarPedido, sobremesa: [...armazenarPedido.sobremesa, dadosDoPedido]})
    }
}