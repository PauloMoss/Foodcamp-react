import React from "react";

import gerarPedido from './GerarPedido';
import atualizarPedido from './AtualizarPedido'; 
import removerItem from './RemoverItemDoPedido';

export default function ItemMenu(props) {

    const {nome, preco, imagem, descricao} = props;

    const [selecionado, setSelecionado] = React.useState("");
    const [contador, setContador] = React.useState(1);
    const valorDoItem = Number(preco.replace(",", "."))
    const dadosDoPedido = {nome: nome, quantidade: contador, valor: valorDoItem};

    function selecionarItem() {

        if(selecionado!== ""){ return }
        setSelecionado("selecionado")
        gerarPedido(props, dadosDoPedido)
    }

    function aumentar() {

        setContador(contador + 1);
        atualizarPedido(props, nome, (contador + 1), valorDoItem)
    }

    function diminuir() {

        if(contador === 1) {
            setSelecionado("")
            removerItem(props, nome)
            return
        }
        setContador(contador - 1)
        atualizarPedido(props, nome, (contador - 1), valorDoItem)
    }

    return (
        <li className={selecionado} onClick={selecionarItem}>
            <img src={imagem} alt={nome} />
            <p className="nome_prato">{nome}</p>
            <div className="descricao_conteudo">{descricao}</div>
            <span>R$</span> <span class="preço">{preco}</span>
            <div className="quantidade">
                <ion-icon name="remove-sharp" class="remover" onClick={diminuir}></ion-icon>
                {contador}
                <ion-icon name="add-sharp" class="adicionar" onClick={aumentar}></ion-icon>
            </div>
        </li>
    );
}