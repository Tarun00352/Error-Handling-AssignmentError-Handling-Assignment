function log(level, message, details = {}) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...details,
  };
  console.log(JSON.stringify(logEntry));
}

module.exports = log;
