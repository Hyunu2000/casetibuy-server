import express from "express";
import * as controller from "../controller/cartController.js";

const router = express.Router();

router
  .post("/add", controller.addCart)
  .post("/items", controller.getItems)
  .post("/count", controller.getCount)
  .put("/updateQty", controller.updateQty)
  .delete("/deleteItem", controller.deleteItem)
  .post("/info", controller.getId);

export default router;
