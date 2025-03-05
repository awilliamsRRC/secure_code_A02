// example.ts

// Example of Insecure HTTP Requests (A3 - Sensitive Data Exposure)
function sendSensitiveData() {
  const username = "admin";
  const password = "123456";
  fetch("http://example.com/api", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

// Example of Cross-Site Scripting (XSS) vulnerability (A7 - Cross-Site Scripting (XSS))
function injectXSS() {
  const userInput = "<script>alert('XSS Attack');</script>";
  const outputElement = document.getElementById("output");
  if (outputElement) {
    outputElement.innerHTML = userInput;
  }
}

// Unsafe use of eval() (A1 - Injection)
function unsafeEval() {
  const userInput = "alert('Injected code')";
  eval(userInput); // Dangerous use of eval
}

// Example of Exposed Sensitive Data (A3 - Sensitive Data Exposure)
function exposeSensitiveData() {
  const sensitiveData = { apiKey: "1234567890" };
  console.log(sensitiveData); // Exposing sensitive data in the console
}

// Triggering all the issues
sendSensitiveData();
injectXSS();
unsafeEval();
exposeSensitiveData();
