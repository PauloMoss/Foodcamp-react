

export default function conversaWpp(props, valorTotalDoPedido, setLinkWpp) {

    const {pedPrato, pedBeb, pedSobr} = props

    const wppOla = "Olá, gostaria de fazer o pedido:"
    let wppPedidoPrato = "";
    pedPrato.forEach(p => {wppPedidoPrato += "\n - Prato: " + p.nome + ((p.quantidade === 1) ? "" : `(x${p.quantidade})`)})

    let wppPedidoBebida = "";
    pedBeb.forEach(b => {wppPedidoBebida += "\n - Bebida: " + b.nome + ((b.quantidade === 1) ? "" : `(x${b.quantidade})`)})

    let wppPedidoSobremesa = "";
    pedSobr.forEach(s => {wppPedidoSobremesa += "\n - Sobremesa: " + s.nome + ((s.quantidade === 1) ? "" : `(x${s.quantidade})`)})

    const valorTotal = "\nTotal: R$ " + valorTotalDoPedido;

    const msg = encodeURIComponent(wppOla + wppPedidoPrato + wppPedidoBebida + wppPedidoSobremesa + valorTotal);
    
    setLinkWpp("https://wa.me/5521993778424?text=" +  msg)
}