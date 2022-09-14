import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        console.log(`Acessando rota principal...`)
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros
    )

};

export default routes;