const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/',(req,res,next) =>{ //definindo a rota POST para o endereço /
    res.status(200).send({ //definindo o status da requisição e a mensagem de retorno (JSON)
        mensagem: 'RETORNA TODOS OS PEDIDOS usando o GET dentro da rota de pedidos' //mensagem de retorno
    });
});

//INSERE UM PEDIDO
router.post('/',(req,res,next)=>{//definindo a rota POST para o endereço /
    const pedido = {
        id_prod: req.body.id_prod,
        quantidade: req.body.quantidade
    };
    res.status(201).send({//definindo o status da requisição e a mensagem de retorno (JSON)
        mensagem: 'INSERE UM PEDIDO usando o POST dentro da rota de pedidos',//mensagem de retorno
        pedidoCriado: pedido
    });
});

//RETORNA UM PEDIDO
router.get('/:id_ped', (req,res,next)=>{//definindo a rota GET para o endereço /IID_PROD
    const id = req.params.id_ped; //capturando o valor recebido de id_ped e armazenado em id

        res.status(200).send({//definindo o status da requisição e a mensagem de retorno (JSON)
            mensagem: 'RETORNA UM PEDIDO usando o POST em um pedido específico',
            id: id
    
        });
    
    
});

//EDITA UM PEDIDO
router.patch(('/'),(req,res,next)=>{
    res.status(201).send({
        mensagem: 'EDITA UM PEDIDO utilizando PATCH na rota de pedidos'
    });
});

//REMOVE UM PEDIDO
router.delete(('/'),(req,res,next)=>{
    res.status(201).send({
        mensagem: 'REMOVE UM PEDIDO utilizando DELETE na rota de pedidos'
    });
});

module.exports = router;