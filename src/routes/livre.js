const livreRoute =  require('../services/livre.js')

const router = require('express').Router()


router.post('/livre', verifyToken,livreRoute.create)
router.get('/livre', verifyToken, livreRoute.getAll)
router.get('/livre/:id',  verifyToken,livreRoute.getById)
router.delete('/livres', verifyToken, livreRoute.destroyAll)
router.delete('/livre/:id', verifyToken, livreRoute.destroyById)
router.put('/livre/:id', verifyToken, livreRoute.update)



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