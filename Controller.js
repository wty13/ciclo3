const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá mundo!');
});

app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome: "Jesus",
        endereco: "Rua centro",
        cidade: "Marialva",
        uf: "PR",
        nascimento:"2021-08-27", 
    });
    res.send('Cliente foi inserido!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.get('/pedidos', async(req,res)=>{
    let create=await pedido.create({
        idCliente: "1",
        idServico: "1",
        valor: "1",
        data: "2021-08-27",
    });
    res.send('Pedido foi inserido!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});