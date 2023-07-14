
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão

app.use(bodyParser.urlencoded ({extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => res.json({message: 'funcionando!'}));

//GET / aplicardesconto
router.get('/calculate/:valor', (req, res) => {
    const value = parceFloat(req.params.valor) || 0;
    const icmsSP = value * 0.18; // Exemplo de cálculo do ICMS em São Paulo (18%)|| se quiser descobrir 30% de qualquer valor é so trocar o 0.18 por 0.3
    res.json({ result: icmsSP });
  });

  router.get('/validate-first-letter/:substring', (req, res) => {
    const  string  = req.params.substring
  
    if (string.substring(0,1) === 'z') {
      res.json({ isFirstLetterZ: true });
    } 
    else {
      res.json({ isFirstLetterZ: false });
    }
  });
  
  

app.use('/', router)

if (require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log ('API funcionando!')
}

module.exports = app