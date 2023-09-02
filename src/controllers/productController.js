const db = require("../config/db");

exports.getOneProduct = (req, res) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
}
exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM produtos';

    db.query(query, (err, data) => {
        if(err) throw res.json(err); 
        return res.status(200).json(...data); 
    })
    
}
exports.AddProduct = (async (req, res) => {
    const {nome, preco, quantidade} = req.body;
    const query = 'INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?);';

    db.query(query, [nome, preco, quantidade], (err, data) => {
        if(err) throw res.json(err);
        res.status(201).send('Produto adicionado!'); 
    }); 

});

exports.editProduct = (req, res) => {
    const id = req.params.id;
    const {nome, preco, quantidade} = req.body;
    const query = 'UPDATE produtos SET nome = ?, preco = ?,  quantidade = ? WHERE id = ?';

    db.query(query, [nome, preco, quantidade, id], (err, data) => {
        if(err) throw res.json(err);

        res.status(201).send(`Produto alterado com sucesso!`);
    });
};

exports.delProduct = (req, res) => {
    let id = req.params.id;
    const query = 'DELETE FROM produtos WHERE id = ?';

    db.query(query, id, (err, data) => {
        if(err) throw res.json(err);

        res.status(200).send(`Produto deletado com sucesso!`);
    });
    
};