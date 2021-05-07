import React from "react";

export default function ItemMenu(props) {

    const {nome, preco, imagem, descricao} = props;

    const [selecionado, setSelecionado] = React.useState("");
    const [contador, setContador] = React.useState(1);
    const dadosDoPedido = {nome: nome, quantidade: contador, preco: preco};

    function selecionarItem() {

        if(selecionado!== ""){ return }
        setSelecionado("selecionado")

        gerarPedido(props, dadosDoPedido)
    }

    function acrescentar() {
        setContador(contador + 1);

        atualizarPedido(props, nome, (contador + 1))
    }

    function decrementar() {

        if(contador === 1) {
            setSelecionado("")
            removerItem(props, nome)
            return
        }
        setContador(contador - 1)

        atualizarPedido(props, nome, (contador - 1))
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

function gerarPedido(props, dadosDoPedido) {

    const {tipo, setPrato, prato, pedidoPrato, setPedidoPrato} = props;
    const {setBebida, bebida, pedidoBebida, setPedidoBebida} = props;
    const {setSobremesa, sobremesa, pedidoSobremesa, setPedidoSobremesa} = props;

    if(tipo === "prato") {
        setPrato(prato + 1)

        if(prato === 0) {
            setPedidoPrato([dadosDoPedido])
        } else {
            setPedidoPrato([...pedidoPrato, dadosDoPedido])
        }  
    }
    if(tipo === "bebida") {
        setBebida(bebida + 1)

        if(bebida === 0) {
            setPedidoBebida([dadosDoPedido])
        } else {
            setPedidoBebida([...pedidoBebida, dadosDoPedido])
        }  
    }
    if(tipo === "sobremesa") {
        setSobremesa(sobremesa + 1)

        if(sobremesa === 0) {
            setPedidoSobremesa([dadosDoPedido])
        } else {
            setPedidoSobremesa([...pedidoSobremesa, dadosDoPedido])
        }  
    }
}

function atualizarPedido(props, nome, contador) {

    const {tipo, pedidoPrato, setPedidoPrato} = props;
    const {pedidoBebida, setPedidoBebida} = props;
    const {pedidoSobremesa, setPedidoSobremesa} = props;

    if(tipo === "prato") {
        const atualizar = pedidoPrato.find(i => i.nome === nome);
        atualizar.quantidade = contador
        setPedidoPrato([...pedidoPrato.filter(i => i.nome !== nome), atualizar])
    }
    if(tipo === "bebida") {
        const atualizar = pedidoBebida.find(i => i.nome === nome);
        atualizar.quantidade = contador
        setPedidoBebida([...pedidoBebida.filter(i => i.nome !== nome), atualizar])
    }
    if(tipo === "sobremesa") {
        const atualizar = pedidoSobremesa.find(i => i.nome === nome);
        atualizar.quantidade = contador
        setPedidoSobremesa([...pedidoSobremesa.filter(i => i.nome !== nome), atualizar])
    }
}

function removerItem(props, nome) {

    const {tipo, setPrato, prato, pedidoPrato, setPedidoPrato} = props;
    const {setBebida, bebida, pedidoBebida, setPedidoBebida} = props;
    const {setSobremesa, sobremesa, pedidoSobremesa, setPedidoSobremesa} = props;

    if(tipo === "prato") {
        const removerItemDoPedido = pedidoPrato.filter(i => i.nome !== nome)
        setPedidoPrato(removerItemDoPedido)
        setPrato(prato - 1)
    }
    if(tipo === "bebida") {
        const removerItemDoPedido = pedidoBebida.filter(i => i.nome !== nome)
        setPedidoBebida(removerItemDoPedido)
        setBebida(bebida - 1)
    }
    if(tipo === "sobremesa") {
        const removerItemDoPedido = pedidoSobremesa.filter(i => i.nome !== nome)
        setPedidoSobremesa(removerItemDoPedido)
        setSobremesa(sobremesa - 1)
    }
}