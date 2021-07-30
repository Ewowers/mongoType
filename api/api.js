const { Router } = require("express");
const logic = require("./logic");
const router = Router();
router.post("/add", logic.add); //добавление в бд
router.get("/", logic.get); //получение всего бд
router.get("/id=:id", logic.getOne); //получение по id
module.exports = router;
