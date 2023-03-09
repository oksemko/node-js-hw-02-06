const messages = {
  400: "Undefined",
  401: "Not Authorize",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const createError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = createError;

// 1. Інформаційні 100 - 199
// 100: Continue

// 2. Успішні 200 - 299
// 200: OK
// 201: Created
// 202: Accepted
// 204: No Content

// 3. Перенаправлення 300 - 399
// 301: Moved Permanently
// 307: Temporary Redirect

// 4. Клієнтські помилки 400 - 499
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found

// 5. Серверні помилки 500 - 599
// 500: Internal Server Error
// 501: Not Implemented
// 502: Bad Gateway
// 503: Service Unavailable
// 504: Gateway Timeout
