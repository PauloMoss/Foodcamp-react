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

    return (
        <>
            <Topo />

            <Pratos setContPrato={setContagemPrato} contPrato={contagemPrato} variaveisArmazenamento={props} />
            <Bebidas setContBeb={setContagemBebida} contBeb={contagemBebida} variaveisArmazenamento={props} />
            <Sobremesas setContSobr={setContagemSobremesa} contSobr={contagemSobremesa} variaveisArmazenamento={props} />
            
            <Conclusao link={props.children} prato={contagemPrato} bebida={contagemBebida} sobremesa={contagemSobremesa}/>
        </>        
    );
}