const livreRoute =  require('../services/livre.js')

const router = require('express').Router()


router.post('/livre', livreRoute.create)
router.get('/livre',  livreRoute.getAll)
router.get('/livre/:id',  livreRoute.getById)
router.delete('/livres',  livreRoute.destroyAll)
router.delete('/livre/:id',  livreRoute.destroyById)
router.put('/livre/:id',  livreRoute.update)



function verifyToken(req,res,next){

    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(' ');

        const bearerToken = bearer[1];

        req.token = bearerToken;

        if(req.token.length>60){
          next();
        }else{
          let message = {message: "Vous n'avez pas acces a ce systeme... Merci"}
          res.status(510).send(message)
        }
          
    }else{

        let message = {message: "Vous n'avez pas acces a ce systeme... Merci"}
        res.status(510).send(message)
    }
}

module.exports = router