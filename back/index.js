const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const controllerCliente = require('./controller/controllerCliente')
const controllerEntrega = require('./controller/controllerEntrega')
const controllerEstoque = require('./controller/controllerEstoque')
const controllerFabricante = require('./controller/controllerFabricante')
const controllerItemPedido = require('./controller/controllerItemPedido')
const controllerPagamento = require('./controller/controllerPagamento')
const controllerPedido = require('./controller/controllerPedido')
const controllerProduto = require('./controller/controllerProduto')
const controllerReabastecimento = require('./controller/controllerReabastecimento')

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/cliente', controllerCliente.cadastrarCliente)
app.get('/cliente', controllerCliente.consultarCliente)
app.get('/clientes', controllerCliente.listarCliente)
app.delete('/cliente/:id', controllerCliente.apagarCliente)
app.put('/cliente', controllerCliente.atualizarCliente)

app.post('/entrega', controllerEntrega.cadastrarEntrega)
app.get('/entregas', controllerEntrega.listarEntrega)
app.get('/entrega', controllerEntrega.consultarEntrega)
app.delete('/entrega/:id', controllerEntrega.apagarEntrega)
app.put('/entrega', controllerEntrega.atualizarEntrega)

app.post('/estoque', controllerEstoque.cadastrarEstoque)
app.get('/estoque', controllerEstoque.consultarEstoque)
app.get('/estoques', controllerEstoque.listarEstoque)
app.delete('/estoque/:id', controllerEstoque.apagarEstoque)
app.put('/estoque', controllerEstoque.atualizarEstoque)

app.post('/fabricante', controllerFabricante.cadastrarFabricante)
app.get('/fabricante', controllerFabricante.consultarFabricante)
app.get('/fabricantes', controllerFabricante.listarFabricante)
app.delete('/fabricante/:id', controllerFabricante.apagarFabricante)
app.put('/fabricante', controllerFabricante.atualizarFabricante)

app.post('/itempedido', controllerItemPedido.cadastrarItemPedido)
app.get('/itempedido', controllerItemPedido.consultarItemPedido)
app.get('/itempedidos', controllerItemPedido.listarItemPedido)
app.delete('/itempedido/:id', controllerItemPedido.apagarItemPedido)
app.put('/itempedido', controllerItemPedido.atualizarItemPedido)

app.post('/pagamento', controllerPagamento.cadastrarPagamento)
app.get('/pagamento', controllerPagamento.consultarPagamento)
app.get('/pagamentos', controllerPagamento.listarPagamento)
app.delete('/pagamento/:id', controllerPagamento.apagarPagamento)
app.put('/pagamento', controllerPagamento.atualizarPagamento)

app.post('/pedido', controllerPedido.cadastrarPedido)
app.get('/pedido', controllerPedido.consultarPedido)
app.get('/pedidos', controllerPedido.listarPedido)
app.delete('/pedido/:id', controllerPedido.apagarPedido)
app.put('/pedido', controllerPedido.atualizarPedido)

app.post('/produto', controllerProduto.cadastrarProduto)
app.get('/produto', controllerProduto.consultarProduto)
app.get('/produtos', controllerProduto.listarProduto)
app.delete('/produto/:id', controllerProduto.apagarProduto)
app.put('/produto', controllerProduto.atualizarProduto)

app.post('/reabastecimento', controllerReabastecimento.cadastrarReabastecimento)
app.get('/reabastecimento', controllerReabastecimento.consultarReabastecimento)
app.get('/reabastecimentos', controllerReabastecimento.listarReabastecimento)
app.delete('/reabastecimento/:id', controllerReabastecimento.apagarReabastecimento)
app.put('/reabastecimento', controllerReabastecimento.atualizarReabastecimento)





app.get('/', (req,res)=>{
    res.status(200).json({message:"servidor ativo"})
})

conn.sync().then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err)=>{
    console.error('erro ao rodar servidor', err)
})