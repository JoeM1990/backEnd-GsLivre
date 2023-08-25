const db = require('../models')

const Livre=db.livre


const create = async(req,res) => {

    let titre =  req.body.titre;
    let auteur =  req.body.auteur;

    const livre = Livre.create({titre: titre, auteur: auteur})

            if(livre != null){
                res.status(200).send(livre)
                console.log(livre)
            }else{
                res.status(500).send("Echec d'enregistrement")
                return 
            }
      
}

const getAll = async(req,res) => {

    let livre = await Livre.findAll({
        order: [
            ["createdAt", "DESC"],
          ],
    })

    let data ={
        "code": 200,
        "message": 'La liste de tout les livres',
        "data": livre
    }

    if(livre != null){
        res.status(200).send(data)
        
    }else{
        res.status(500).send("Aucun livre")
        return 
    }

}

const getById = async(req,res) => {

    let id = req.params.id
    let livre = await Livre.findOne({ where: {id: id}})

    let data ={
        "code": 200,
        "message": 'Les infos du livre',
        "data": livre
    }

    if(livre != null){
        res.status(200).send(livre)
        
    }else{
        res.status(500).send("Aucun livre")
        return 
    }

}

const update = async(req,res) => {
    
    let id = req.params.id

    let titre = req.body.titre
    let auteur = req.body.auteur

    let livre = await Livre.update({titre: titre, auteur: auteur}, { where: {id: id}})
    

    let data ={
        "code": 200,
        "message": 'Modification effectuée',
        "data": livre
    }


    // if(livre != null){
    //     res.status(200).send(data)   
    // }else{
    //     res.status(500).send("Echec")
    //     return 
    // }
    
    res.status(200).send(livre)
}

const destroyById = async(req,res) => {

    let id = req.params.id

    let livre = await Livre.destroy({ where: {id: id}})

    let data ={
        "code": 200,
        "message": 'Suppression effectuée',
        "data": livre
    }

    if(livre != null){
        res.status(200).send(data)   
    }else{
        res.status(500).send("Echec")
        return 
    }

}

const destroyAll = async(req,res) => {

    let livre = await Livre.destroy({
        where: {},
        truncate: true
      })


    let data ={
        "code": 200,
        "message": 'Suppression effectuée',
        "data": livre
    }

    if(livre != null){
        res.status(200).send(data)   
    }else{
        res.status(500).send("Echec")
        return 
    }

   
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    destroyById,
    destroyAll,
}