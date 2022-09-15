import autores from "../models/Autor.js";
import DataUtils from "../utils/DataUtils.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao recuperar os dados..`});
            } else {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - GET /autores executado com sucesso!!`)
                res.status(200).json(autores);
            }

        });
    };

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do autor não localizado..`})
            } else {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - GET /autores/{id} executado com sucesso!!`)
                res.status(200).send(autores);
            }

        });
    };

    static cadastraAutor = (req,res) => {
        let autor = new autores(req.body);
        
        autor.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor`});
            } else {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - POST /autores executado com sucesso!!`)
                res.status(201).send(autor.toJSON());
            }

        });
    };

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body }, (err) => {
            if(!err) {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - PUT /autores/{id} executado com sucesso!!`)
                res.status(200).send({message: `autor atualizado com sucesso!!`})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar autor...`})
            }

        });
    };

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                console.log(`${DataUtils.dataHoraAtualComTimezone()} - DELETE /autores/{id} executado com sucesso!!`)
                res.status(200).send({message: `autor removido com sucesso!!`})
            } else {
                res.status(400).send({message: `${err.message} - falha ao excluir autor...`})
            }
        });
    };

}

export default AutorController;