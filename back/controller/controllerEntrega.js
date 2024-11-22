const {Entrega} = require('../model/associacao')

const cadastrarEntrega = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Entrega.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Entrega"})
        console.log('erro ao cadastrar Entrega', err)
    }
}

const consultarEntrega = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Entrega.findOne({where:{codEntrega: dados.codEntrega}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar Entrega"})
        console.log('erro ao consultar Entrega', err)
    }
}

const listarEntrega = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Entrega.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Entrega"})
        console.log('erro ao listar Entrega', err)  
    }
}

const apagarEntrega = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Entrega.destroy({where:{codEntrega:dados.id}})
        res.status(200).json({message:"Entrega excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Entrega"})
        console.log('erro ao excluir Entrega', err)  
    }
}

const atualizarEntrega = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Entrega.update(dados, {where:{codEntrega:dados.codEntrega}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Entrega"})
        console.log('erro ao atualizar Entrega', err)  
    }
}


module.exports = {cadastrarEntrega,consultarEntrega,listarEntrega,apagarEntrega,atualizarEntrega}