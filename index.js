const express = require('express');
const app = express();

app.get('/validate', (req, res) => {
  const str = req.query.str || '';
  const isFirstLetterZ = str.charAt(0) === 'z';
  res.json({ result: isFirstLetterZ });
});

app.get('/calculate', (req, res) => {
  const value = parseFloat(req.query.value) || 0;
  const icmsSP = calculateICMSSP(value);
  const calculatedValue = calculate30Percent(value);
  res.json({ result: calculatedValue, icmsSP });
});

function calculateICMSSP(value) {
  // Lógica para calcular o ICMS em São Paulo (SP)
  const icmsRate = 0.18; // 18%
  const icmsSP = value * icmsRate;
  return icmsSP;
}

function calculate30Percent(value) {
  // Lógica para calcular 30% do valor
  const calculatedValue = value * 0.3;
  return calculatedValue;
}

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});