import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import DataUtils from "../utils/DataUtils.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        console.log(`${DataUtils.dataHoraAtualComTimezone()} - Acessando rota principal...`)
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )

};

export default routes;