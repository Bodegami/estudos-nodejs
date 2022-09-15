import livros from "../models/Livro.js";
import DataUtils from "../utils/DataUtils.js";

class LivrosController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao recuperar os dados..`});
            } else {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - GET /livros executado com sucesso`)
                res.status(200).json(livros);
            }

        });
    };

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do livro não localizado..`})
            } else {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - GET /livros/{id} executado com sucesso`)
                res.status(200).send(livros);
            }

        });
    };

    static cadastraLivro = (req,res) => {
        let livro = new livros(req.body);
        
        livro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`});
            } else {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - POST /livros executado com sucesso`)
                res.status(201).send(livro.toJSON());
            }

        });
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body }, (err) => {
            if(!err) {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - PUT /livros/{id} executado com sucesso.`)
                res.status(200).send({message: `Livro atualizado com sucesso!!`})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar...`})
            }

        });
    };





    static dataHoraAtual() {
        let today = Date.now();
        let now = new Date(today);
        return now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    }


}

export default LivrosController;