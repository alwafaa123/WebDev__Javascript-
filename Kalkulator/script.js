function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const operator = document.getElementById("operator").value;
  const number2 = parseFloat(document.getElementById("number2").value);
  let hasil;
  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById("hasil").textContent =
      "mohon masukkan nomer ke dalam kolom yang valid";
    return;
  }

  switch (operator) {
    case "+":
      hasil = number1 + number2;
      break;
    case "-":
      hasil = number1 - number2;
      break;
    case "*":
      hasil = number1 * number2;
      break;
    case "/":
      hasil = number1 / number2;
      break;
    default:
      hasil = "Operator tidak valid";
  }
  if (number2 === 0 && operator === "/") {
    document.getElementById("hasil").textContent =
      "Error: Pembagian dengan nol tidak diperbolehkan";
  } else {
    document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
  }
}
