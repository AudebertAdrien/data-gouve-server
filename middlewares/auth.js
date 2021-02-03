const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw new Error("Invalid user ID");
    } else {
      next();
    }
  } catch (e) {
    res.status(402).json({
      error: { message: e.message || "Invalid request" },
    });
  }
};
