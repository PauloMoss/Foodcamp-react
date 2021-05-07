


export default function Conclusao(props) {
    
    const {contagemItens} = props

    if(contagemItens.prato!==0 && contagemItens.bebida!==0 && contagemItens.sobremesa!==0) {
        return (
            <div className="conclusao_pedido">
                {props.link}
            </div>
        );
    } else {
        return (
            <div className="conclusao_pedido">
                <button className="pedido_aberto" >Selecione os 3 itens para fechar o pedido</button>
            </div>
        );
    }
}