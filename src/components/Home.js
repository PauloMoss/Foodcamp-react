import React from 'react';

import Topo from './Topo/Topo';
import Pratos from './Cardapio/Pratos';
import Bebidas from './Cardapio/Bebidas';
import Sobremesas from './Cardapio/Sobremesas';
import Conclusao from './Conclusao/Conclusao';

export default function Home(props) {

    const [contagemPrato, setContagemPrato] = React.useState(0);
    const [contagemBebida, setContagemBebida] = React.useState(0);
    const [contagemSobremesa, setContagemSobremesa] = React.useState(0);

    const [contagemItens, setContagemItens] = React.useState(({prato: 0, bebida: 0, sobremesa: 0}))
    console.log(contagemItens)

    return (
        <>
            <Topo />

            <Pratos variaveisArmazenamento={props} contagemItens={contagemItens} setContagemItens={setContagemItens} />
            <Bebidas variaveisArmazenamento={props} contagemItens={contagemItens} setContagemItens={setContagemItens} />
            <Sobremesas variaveisArmazenamento={props} contagemItens={contagemItens} setContagemItens={setContagemItens} />
            
            <Conclusao link={props.children} contagemItens={contagemItens} />
        </>        
    );
}