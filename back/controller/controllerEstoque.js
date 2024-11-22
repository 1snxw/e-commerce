const {Estoque} = require('../model/associacao')

const cadastrarEstoque = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Estoque.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Estoque"})
        console.log('erro ao cadastrar Estoque', err)
    }
}

const consultarEstoque = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Estoque.findOne({where:{codEstoque: dados.codEstoque}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar Estoque"})
        console.log('erro ao consultar Estoque', err)
    }
}

const listarEstoque = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Estoque.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Estoque"})
        console.log('erro ao listar Estoque', err)  
    }
}

const apagarEstoque = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Estoque.destroy({where:{codEstoque:dados.id}})
        res.status(200).json({message:"Estoque excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Estoque"})
        console.log('erro ao excluir Estoque', err)  
    }
}

const atualizarEstoque = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Estoque.update(dados, {where:{codEstoque:dados.codEstoque}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Estoque"})
        console.log('erro ao atualizar Estoque', err)  
    }
}


module.exports = {cadastrarEstoque,consultarEstoque,listarEstoque,apagarEstoque,atualizarEstoque}