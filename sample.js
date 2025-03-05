// Example of Insecure HTTP Requests (A3 - Sensitive Data Exposure)
fetch("http://example.com/api", {
  method: "POST",
  body: JSON.stringify({ username: "admin", password: "123456" })
});

// Example of Cross-Site Scripting (XSS) vulnerability (A7 - Cross-Site Scripting (XSS))
let userComment = "<script>alert('XSS Attack');</script>";
document.getElementById("commentSection").innerHTML = userComment;

// Unsafe eval() usage (A1 - Injection)
let userInput = "alert('Injected code')";
eval(userInput);

// Exposed sensitive data (A3 - Sensitive Data Exposure)
let sensitiveData = { apiKey: '123456789' };
console.log(sensitiveData); // Exposing sensitive information
