import express from "express";

import {
  fetchAllUserController,
  fetchSearchUserController
} from "./userControllers";

const router = express.Router();

router.route("/fetchAllUsers").get(fetchAllUserController);

router.route("/fetchSearchUser/:username").get(fetchSearchUserController);

export default router;
