const {Fabricante} = require('../model/associacao')

const cadastrarFabricante = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const cadastrar = await Fabricante.create(dados)
        res.status(201).json(cadastrar)
        console.log(cadastrar)
    }catch(err){
        res.status(500).json({message:"erro ao cadastrar Fabricante"})
        console.log('erro ao cadastrar Fabricante', err)
    }
}

const consultarFabricante = async(req,res)=>{
    const id = req.params.id;
    try {
        const fabricante = await Fabricante.findOne({ where: { codFabricante: id } });
        if (fabricante) {
            res.status(200).json(fabricante);
        } else {
            res.status(404).json({ message: 'Fabricante não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
}

const listarFabricante = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const listar = await Fabricante.findAll()
        res.status(200).json(listar)
    }catch(err){
        res.status(500).json({message:"erro ao listar Fabricante"})
        console.log('erro ao listar Fabricante', err)  
    }
}

const apagarFabricante = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try{
        const apagar = await Fabricante.destroy({where:{codFabricante:dados.id}})
        res.status(200).json({message:"Fabricante excluido com sucesso"})
    }catch(err){
        res.status(500).json({message:"erro ao excluir Fabricante"})
        console.log('erro ao excluir Fabricante', err)  
    }
}

const atualizarFabricante = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const atualizar = await Fabricante.update(dados, {where:{codFabricante:dados.codFabricante}})
        res.status(200).json(atualizar)
    }catch(err){
        res.status(500).json({message:"erro ao atualizar Fabricante"})
        console.log('erro ao atualizar Fabricante', err)  
    }
}


module.exports = {cadastrarFabricante,consultarFabricante,listarFabricante,apagarFabricante,atualizarFabricante}