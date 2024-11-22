const {Reabastecimento} = require('../model/associacao')

const cadastrarReabastecimento = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Reabastecimento.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Reabastecimento"})
        console.log('erro ao cadastrar Reabastecimento', err)
    }
}

const consultarReabastecimento = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Reabastecimento.findOne({where:{codReabastecimento: dados.codReabastecimento}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar Reabastecimento"})
        console.log('erro ao consultar Reabastecimento', err)
    }
}

const listarReabastecimento = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Reabastecimento.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Reabastecimento"})
        console.log('erro ao listar Reabastecimento', err)  
    }
}

const apagarReabastecimento = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Reabastecimento.destroy({where:{codReabastecimento:dados.id}})
        res.status(200).json({message:"Reabastecimento excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Reabastecimento"})
        console.log('erro ao excluir Reabastecimento', err)  
    }
}

const atualizarReabastecimento = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Reabastecimento.update(dados, {where:{codReabastecimento:dados.codReabastecimento}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Reabastecimento"})
        console.log('erro ao atualizar Reabastecimento', err)  
    }
}


module.exports = {cadastrarReabastecimento,consultarReabastecimento,listarReabastecimento,apagarReabastecimento,atualizarReabastecimento}