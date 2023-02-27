
const { parseToInteger } = require('./parser/parseInt');

export const run = () => {
  const calculateTotalButton = document.getElementById('calculate-button');

  calculateTotalButton.addEventListener('click', () => {
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;

    const A = parseToInteger(a);
    const B = parseToInteger(b);

    const C = document.getElementById('result');

    C.innerHTML = A + B;
  });
};
