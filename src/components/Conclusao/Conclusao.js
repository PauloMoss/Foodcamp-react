


export default function Conclusao(props) {
    

    if(props.prato!==0 && props.bebida!==0 && props.sobremesa!==0) {

        return (
            <div className="conclusao_pedido">
                <button className="pedido_fechado" >{props.link}</button>
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