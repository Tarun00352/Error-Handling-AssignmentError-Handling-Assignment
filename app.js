const log = require("./logger");

function processUserInput(input) {
  try {
    if (typeof input !== "string") {
      throw new TypeError("Expected input to be a string");
    }

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      throw new Error("Input must not be empty");
    }

    const result = `Processed: ${trimmedInput}`;
    log("info", "Input processed successfully", { input: trimmedInput });
    return result;

  } catch (err) {
    log("error", "Error processing input", {
      input,
      error: err.message,
      stack: err.stack,
    });
    return "Invalid input. Please enter a non-empty string.";
  }
}
console.log(processUserInput("Hello World"));
