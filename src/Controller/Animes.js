import { openDb } from '../configDB.js';

export async function getAnimes(req, res){
    openDb().then( db => {
        db.all('select * from animes')
        .then(animes =>  res.json(animes))
    });
}

// export async function getAnimes(req, res){
//     let id = req.body.id;
//     openDb().then(db=>{
//         db.get('SELECT * FROM Pessoa WHERE id=?', [id])
//         .then(pessoa=> res.json(pessoa) );
//     });
// }

// export async function insertPessoa(req, res){
//     let pessoa = req.body;
//     openDb().then(db=>{
//         db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
//     });
//     res.json({
//         "statusCode": 200
//     })
// }

// export async function updatePessoa(req, res){
//     let pessoa = req.body;
//     openDb().then(db=>{
//         db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
//     });
//     res.json({
//         "statusCode": 200
//     })
// }

// export async function deletePessoa(req, res){
//     let id = req.body.id;
//     openDb().then(db=>{
//         db.get('DELETE FROM Pessoa WHERE id=?', [id])
//         .then(res=>res)
//     });
//     res.json({
//         "statusCode": 200
//     })
// }