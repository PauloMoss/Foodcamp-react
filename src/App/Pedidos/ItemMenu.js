import React from "react";

export default function ItemMenu(props) {

    const {tipo, nome, preco, imagem, descricao} = props;
    const {setPrato, prato} = props;
    const {setBebida, bebida} = props;
    const {setSobremesa, sobremesa} = props;

    const [selecionado, setSelecionado] = React.useState("");
    const [contador, setContador] = React.useState(1);
    const [armazenarPedido, setArmazenarPedido] = React.useState({prato: [], bebida: [], sobremesa: []});

    const dadosDoPedido = {nome: nome, quantidade: contador, preco: preco};

    function selecionarItem() {

        if(selecionado!== ""){ return }
        setSelecionado("selecionado")

        if(tipo === "prato") {
            setPrato(prato + 1)
            
            setArmazenarPedido({...armazenarPedido, prato: [dadosDoPedido]})
            
        } else if (tipo === "bebida") {
            setBebida(bebida + 1)
        } else if (tipo === "sobremesa") {
            setSobremesa(sobremesa + 1)
        }
    }

    function acrescentar() {
        console.log(armazenarPedido)
        setContador(contador + 1);
    }

    function decrementar() {

        if(tipo === "prato") {
            setPrato(prato - 1)
        } else if(tipo === "bebida") {
            setBebida(bebida - 1)
        } else if (tipo === "sobremesa") {
            setSobremesa(sobremesa - 1)
        }
        if(contador === 1) {
            setSelecionado("")
            return
        }
        setContador(contador - 1)

       
    }

    return (
        <li className={selecionado} onClick={selecionarItem}>
            <img src={imagem} alt={nome} />
            <p className="nome_prato">{nome}</p>
            <div className="descricao_conteudo">{descricao}</div>
            <span>R$</span> <span class="preço">{preco}</span>
            <div className="quantidade">
                <ion-icon name="remove-sharp" className="remover" onClick={decrementar}></ion-icon>
                {contador}
                <ion-icon name="add-sharp" className="adicionar" onClick={acrescentar}></ion-icon>
            </div>
        </li>
    );
}