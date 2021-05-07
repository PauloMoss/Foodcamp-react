import ItemMenu from './ItemMenu';

export default function Bebidas(props) {

    const {setBebida, bebida} = props;
    const {pedidoBebida, setPedidoBebida} = props;

    const cardapioDeBebidas = [
        {nome: "Coquinha gelada", preco: "4,80", imagem: "Img/coquinha_gelada 1.png", descricao: "Lata 350ml"},
        {nome: "Suco Natural", preco: "11,70", imagem: "Img/sucos.jpg", descricao: "Diversos sabores 500ml"},
        {nome: "Cerveja Corona", preco: "14,60", imagem: "Img/corona.jpg", descricao: "Corona com limão, garrafa gelada 350ml"},
        {nome: "Água", preco: "3,80", imagem: "Img/garrafaAgua-500ml.png", descricao: "Garrafa d'água 500ml"}
    ];
    return (
        <>
            <div className="titulo_lista">Agora, sua bebida</div>
            <ul className="bebida">
                
                {cardapioDeBebidas.map(b => (
                <ItemMenu tipo="bebida" nome={b.nome} preco={b.preco} imagem={b.imagem} descricao={b.descricao} setBebida={setBebida} bebida={bebida} pedidoBebida={pedidoBebida} setPedidoBebida={setPedidoBebida}/>
                ))}

            </ul>
        </>
    );
}