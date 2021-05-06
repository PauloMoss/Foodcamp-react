import React from "react";
import ItemMenu from "./ItemMenu";

export default function Pratos(props) {

    const {setPrato, prato} = props;
    
    const cardapioDePratos = [
        {nome: "Frango yin yang", preco: "14,90", imagem: "Img/frango_yin_yang 1.png", descricao: "Um pouco de batata, um pouco de salada"},
        {nome: "Comida Japonesa", preco: "124,00", imagem: "Img/comida-japonesa.jpg", descricao: "Combinado variado com 60 peças"},
        {nome: "Pizza Marguerita", preco: "75,00", imagem: "Img/Pizza_Tomatoes.jpg", descricao: "Pizza gourmet sabor marguerita"},
        {nome: "Salada Tropical", preco: "12,00", imagem: "Img/salada-tropical.jpg", descricao: "Salada verde"}
    ];

    return (
        <>
            <div className="titulo_lista">Primeiro, seu prato</div>
            <ul className="prato">

                {cardapioDePratos.map(p=> (
                <ItemMenu tipo="prato" nome={p.nome} preco={p.preco} imagem={p.imagem} descricao={p.descricao} setPrato={setPrato} prato={prato}/>
                ))}

            </ul>
        </>
    );
}