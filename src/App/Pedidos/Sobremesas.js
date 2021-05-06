import ItemMenu from "./ItemMenu";

export default function Sobremesas(props) {

    const {setSobremesa, sobremesa} = props;

    const cardapioDeSobremesas = [
        {tipo: "Sobremesa", nome: "Pudim", preco: "12,20", imagem: "Img/pudim 1.png", descricao: "Pudim tradicional"},
        {tipo: "Sobremesa", nome: "Sundae", preco: "17,90", imagem: "Img/top-sundae.png", descricao: "Top Sundae 3 sabores"},
        {tipo: "Sobremesa", nome: "Bolo de pote", preco: "16,00", imagem: "Img/bolo-no-pote.jpg", descricao: "Bolo de chocolate 250g"},
        {tipo: "Sobremesa", nome: "Salada de Frutas", preco: "10,50", imagem: "Img/Frutas.jpg", descricao: "Pote de salada de frutas"}
    ];
    return (
        <>
            <div className="titulo_lista">Por fim, sua sobremesa</div>
            <ul className="sobremesa">
                
                {cardapioDeSobremesas.map(s => (
                <ItemMenu tipo="sobremesa" nome={s.nome} preco={s.preco} imagem={s.imagem} descricao={s.descricao} setSobremesa={setSobremesa} sobremesa={sobremesa}/>
                ))}

            </ul>
        </>
    );
}