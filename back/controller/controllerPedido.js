const {Pedido} = require('../model/associacao')

const cadastrarPedido = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Pedido.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Pedido"})
        console.log('erro ao cadastrar Pedido', err)
    }
}

const consultarPedido = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Pedido.findOne({where:{codPedido: dados.codPedido}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar Pedido"})
        console.log('erro ao consultar Pedido', err)
    }
}

const listarPedido = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Pedido.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Pedido"})
        console.log('erro ao listar Pedido', err)  
    }
}

const apagarPedido = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Pedido.destroy({where:{codPedido:dados.id}})
        res.status(200).json({message:"Pedido excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Pedido"})
        console.log('erro ao excluir Pedido', err)  
    }
}

const atualizarPedido = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Pedido.update(dados, {where:{codPedido:dados.codPedido}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Pedido"})
        console.log('erro ao atualizar Pedido', err)  
    }
}


module.exports = {cadastrarPedido,consultarPedido,listarPedido,apagarPedido,atualizarPedido}