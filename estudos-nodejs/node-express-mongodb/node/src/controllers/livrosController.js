import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao recuperar os dados..`});
            } else {
                console.log(`GET /livros executado com sucesso`)
                res.status(200).json(livros);
            }
        });
    };

    static cadastraLivro = (req,res) => {
        let livro = new livros(req.body);
        
        livro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            } else {
                console.log(`POST /livros executado com sucesso`)
                res.status(201).send(livro.toJSON());
            }

        });
    };


}

export default LivrosController;