const {
  register,
  login,
  returnproblem,
  addproblem,
  deleteproblem,
  correctionproblem,
} = require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddlewares");
const { problem } = require("../Controllers/AuthControllers");
//자동생성 되는거보니 기능인듯

const router = require("express").Router();

router.post("/api", checkUser);
router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/problem", addproblem);
router.get("/api/problem", problem);
router.get("/api/problem:id", returnproblem);
router.put("/api/problem:id", correctionproblem);
router.delete("/api/problem:id", deleteproblem);

module.exports = router;
