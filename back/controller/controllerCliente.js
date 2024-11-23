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

const consultarCliente = async (req, res) => {
    const { email, cpf } = req.query; // Aguardar os parâmetros na query

    try {
        // Buscar cliente no banco de dados com o email e CPF fornecidos
        const cliente = await Cliente.findOne({
            where: {
                emailCliente: email, // Comparar com o campo 'emailCliente' do banco de dados
                cpfCliente: cpf,     // Comparar com o campo 'cpfCliente' do banco de dados
            },
        });

        // Se o cliente não for encontrado, retorna erro 404
        if (!cliente) {
            console.log('Cliente não encontrado!');
            return res.status(404).json({ message: 'Cliente não encontrado ou dados incorretos!' });
        }

        // Retorna os dados do cliente encontrado
        console.log('Cliente encontrado:', cliente);
        res.status(200).json(cliente); // Retorna o cliente como resposta no formato JSON
    } catch (err) {
        // Caso haja erro no banco ou na consulta
        console.error('Erro ao consultar cliente:', err);
        res.status(500).json({ message: 'Erro ao consultar o Cliente!' });
    }
};




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