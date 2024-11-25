let option = prompt(
    "Select operation:\n1. Basic Arithmetic (+, -, *, /)\n" +
    "2. Currency Conversion (Dollar to Rupee or Rupee to Dollar)\n" +
    "3. Weight Conversion (kg to gram)\n" +
    "4. Temperature Conversion (Celsius to Fahrenheit)\n" +
    "Enter Choice (1/2/3/4):"
  );
  
  switch (option) {
    case '1':
      let num1 = parseFloat(prompt("Enter the first number:"));
      let num2 = parseFloat(prompt("Enter the second number:"));
      let operation = prompt("Enter operation (+, -, *, /):");
  
      let result;
      if (operation === '+') result = num1 + num2;
      else if (operation === '-') result = num1 - num2;
      else if (operation === '*') result = num1 * num2;
      else if (operation === '/') {
        result = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";
      } else result = "Invalid Operation";
  
      alert("Result: " + result);
      break;
  
    case '2':
      let currencyChoice = prompt("Enter '1' to convert Dollar to Rupee or '2' to convert Rupee to Dollar:");
      let amount = parseFloat(prompt("Enter the amount:"));
  
      let exchangeRate = 84.08; // Example rate
  
      if (currencyChoice === '1') {
        let result = amount * exchangeRate;
        alert("Result = " + result.toFixed(2) + " Rupees");
      } else if (currencyChoice === '2') {
        let result = amount / exchangeRate;
        alert("Result = " + result.toFixed(2) + " Dollars");
      } else {
        alert("Invalid currency choice");
      }
      break;
  
    case '3':
      let kg = parseFloat(prompt("Enter the weight in kilograms:"));
      if (!isNaN(kg)) {
        alert("Result: " + (kg * 1000) + " grams");
      } else {
        alert("Invalid input for weight");
      }
      break;
  
    case '4':
      let cs = parseFloat(prompt("Enter the temperature in Celsius:"));
      if (!isNaN(cs)) {
        let fh = (cs * (9 / 5) + 32);
        alert("Result: " + fh.toFixed(2) + " Fahrenheit");
      } else {
        alert("Invalid input for temperature");
      }
      break;
  
    default:
      alert("Invalid Choice");
  }
  