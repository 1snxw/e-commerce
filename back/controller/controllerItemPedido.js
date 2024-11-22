const {ItemPedido} = require('../model/associacao')

const cadastrarItemPedido = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await ItemPedido.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar ItemPedido"})
        console.log('erro ao cadastrar ItemPedido', err)
    }
}

const consultarItemPedido = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await ItemPedido.findOne({where:{codItemPedido: dados.codItemPedido}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar ItemPedido"})
        console.log('erro ao consultar ItemPedido', err)
    }
}

const listarItemPedido = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await ItemPedido.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar ItemPedido"})
        console.log('erro ao listar ItemPedido', err)  
    }
}

const apagarItemPedido = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await ItemPedido.destroy({where:{codItemPedido:dados.id}})
        res.status(200).json({message:"ItemPedido excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir ItemPedido"})
        console.log('erro ao excluir ItemPedido', err)  
    }
}

const atualizarItemPedido = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await ItemPedido.update(dados, {where:{codItemPedido:dados.codItemPedido}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar ItemPedido"})
        console.log('erro ao atualizar ItemPedido', err)  
    }
}


module.exports = {cadastrarItemPedido,consultarItemPedido,listarItemPedido,apagarItemPedido,atualizarItemPedido}