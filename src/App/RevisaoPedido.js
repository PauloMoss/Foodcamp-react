

export default function RevisaoPedido() {
    return (
        <div class="fundoEmbacado oculto">
            <div class="confirme_pedido">
                <p>Confirme seu pedido</p>
                <div class="confirme_prato"><span></span><span></span></div>
                <div class="confirme_bebida"><span></span><span></span></div>
                <div class="confirme_sobremesa"><span></span><span></span></div>
                <div class="total"><span>TOTAL</span><span></span></div>
                <a href= 'https://wa.me/?text=' target="_blank" onclick="conversa_Wpp()"><button class="tudo_certo"><span>Tudo certo, Pode pedir!</span></button></a>
                <button class="cancelar" onclick="cancelar_Pedido()"><span>Cancelar</span></button>
            </div>
        </div>
    );
}