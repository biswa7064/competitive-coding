class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
  }
}

const error = new CustomError("original error message")
const customError1 = new CustomError("custom error message", 400)
const customError2 = new CustomError("custom error message2", 403)

const testError = () => {
  try {
    throw new CustomError(error.message)
  } catch (err) {
    console.log("original error", err.statusCode)
  }
}
testError()
console.log({ error, customError1, customError2 })
