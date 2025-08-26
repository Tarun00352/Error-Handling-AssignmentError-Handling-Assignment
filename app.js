const log = require("./logger");

function processUserInput(input) {
  try {
    
    if (typeof input !== "string") {
      throw new Error("Input must be a string");
    }
    if (input.trim() === "") {
      throw new Error("Input cannot be empty");
    }

    log("info", "Input processed successfully", { input });
    return `Processed: ${input}`;
  } catch (err) {
    log("error", "Error processing input", {
      input,
      error: err.message,
      stack: err.stack,
    });
    return "Oops! Something went wrong. Please provide valid input.";
  }
}

console.log(processUserInput("Hello World"));   
