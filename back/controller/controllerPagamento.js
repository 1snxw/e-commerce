const {Pagamento} = require('../model/associacao')

const cadastrarPagamento = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Pagamento.create(dados, {raw:true})
        res.status(201).json(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Pagamento"})
        console.log('erro ao cadastrar Pagamento', err)
    }
}

const consultarPagamento = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try{    
        const consultar = await Pagamento.findOne({where:{codPagamento: dados.codPagamento}})
        res.status(200).json(consultar)
    }catch(err){
        res.status(500).json({message:"erro ao consultar Pagamento"})
        console.log('erro ao consultar Pagamento', err)
    }
}

const listarPagamento = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Pagamento.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Pagamento"})
        console.log('erro ao listar Pagamento', err)  
    }
}

const apagarPagamento = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Pagamento.destroy({where:{codPagamento:dados.id}})
        res.status(200).json({message:"Pagamento excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Pagamento"})
        console.log('erro ao excluir Pagamento', err)  
    }
}

const atualizarPagamento = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Pagamento.update(dados, {where:{codPagamento:dados.codPagamento}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Pagamento"})
        console.log('erro ao atualizar Pagamento', err)  
    }
}


module.exports = {cadastrarPagamento,consultarPagamento,listarPagamento,apagarPagamento,atualizarPagamento}