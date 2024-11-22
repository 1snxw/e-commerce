const {Cliente} = require('../model/associacao')

const cadastrarCliente = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Cliente.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar cliente"})
        console.log('erro ao cadastrar cliente', err)
    }
}

const consultarCliente = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Cliente.findOne({where:{codCliente: dados.codCliente}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar cliente"})
        console.log('erro ao consultar cliente', err)
    }
}

const listarCliente = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Cliente.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar cliente"})
        console.log('erro ao listar cliente', err)  
    }
}

const apagarCliente = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Cliente.destroy({where:{codCliente:dados.id}})
        res.status(200).json({message:"cliente excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir cliente"})
        console.log('erro ao excluir cliente', err)  
    }
}

const atualizarCliente = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Cliente.update(dados, {where:{codCliente:dados.codCliente}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar cliente"})
        console.log('erro ao atualizar cliente', err)  
    }
}


module.exports = {cadastrarCliente,consultarCliente,listarCliente,apagarCliente,atualizarCliente}