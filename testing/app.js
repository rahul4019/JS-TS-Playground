// Dependency Injection

export function processOrder(data, { processPayment }) {
  // some logic

  const paymentInfo = processPayment(data.amount);
  return paymentInfo;
}

function processPayment(amount) {
  // API call to external payment gateway

  console.log(`I am original...`);
  return { id: '123', amount: amount };
}

export function greet(name) {
  return `Hello, ${name}!`;
}

export function greetInHindi(name) {
  return `नमस्ते, ${name}!`;
}
