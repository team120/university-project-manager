import { Router } from "express";
import * as universityActions from "./university.controller";

const universityRouter = Router();

universityRouter.get("", universityActions.getAllUniversities);
universityRouter.get("/:id", universityActions.getOneUniversity);

export default universityRouter;
