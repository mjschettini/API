const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/',(req,res,next) =>{ //definindo a rota POST para o endereço /
    res.status(200).send({ //definindo o status da requisição e a mensagem de retorno (JSON)
        mensagem: 'RETORNA TODOS OS PRODUTOS  usando o GET dentro da rota de produtos ' //mensagem de retorno
    });
});

//INSERE UM PREDUTO
router.post('/',(req,res,next)=>{//definindo a rota POST para o endereço /
    const produto ={
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({//definindo o status da requisição e a mensagem de retorno (JSON)
        mensagem: 'INSERE UM PREDUTO usando o POST dentro da rota de produtos',//mensagem de retorno
        produtoCriado: produto
    });
});

//RETORNA UM PRODUTO
router.get('/:id_prod', (req,res,next)=>{//definindo a rota GET para o endereço /IID_PROD
    const id = req.params.id_prod; //capturando o valor recebido de id_prod e armazenado em id

    if (id==97){
        res.status(200).send({//definindo o status da requisição e a mensagem de retorno (JSON)
            mensagem: 'RETORNA UM PRODUTO usando o POST em um produto específico',
            id: id, 
            mensagem2: 'ID PREMIADO'
    
        });
    }
    else{
        res.status(200).send({//definindo o status da requisição e a mensagem de retorno (JSON)
            mensagem: 'RETORNA UM PRODUTO usando o POST em um produto específico',
            id: id

        });
    }
    
});

//
router.patch(('/'),(req,res,next)=>{
    res.status(201).send({
        mensagem: 'EDITA UM PRODUTO utilizando PATCH na rota de produtos'
    });
});

//REMOVE UM PRODUTO
router.delete(('/'),(req,res,next)=>{
    res.status(201).send({
        mensagem: 'REMOVE UM PRODUTO utilizando DELETE na rota de produtos'
    });
});

module.exports = router;