const {Produto} = require('../model/associacao')

const cadastrarProduto = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Produto.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Produto"})
        console.log('erro ao cadastrar Produto', err)
    }
}

const consultarProduto = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Produto.findOne({where:{codProduto: dados.codProduto}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar Produto"})
        console.log('erro ao consultar Produto', err)
    }
}

const listarProduto = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Produto.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Produto"})
        console.log('erro ao listar Produto', err)  
    }
}

const apagarProduto = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Produto.destroy({where:{codProduto:dados.id}})
        res.status(200).json({message:"Produto excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Produto"})
        console.log('erro ao excluir Produto', err)  
    }
}

const atualizarProduto = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Produto.update(dados, {where:{codProduto:dados.codProduto}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Produto"})
        console.log('erro ao atualizar Produto', err)  
    }
}


module.exports = {cadastrarProduto,consultarProduto,listarProduto,apagarProduto,atualizarProduto}