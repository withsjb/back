const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      "kishan sheth super secret key",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          try {
            const user = await User.findById(decodedToken.id);
            if (user) {
              res.json({ status: true, user: user.email, role: user.role });
            } else {
              res.json({ status: false });
            }
            next();
          } catch (error) {
            console.error(error);
            res.json({ status: false });
            next();
          }
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
