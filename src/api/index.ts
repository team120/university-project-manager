import { Router } from "express";
import authRoutes from "./auth/auth.route";
import universitiesRoutes from "./university/university.route";
import usersRoutes from "./user/user.route";
import projectRoutes from "./project/project.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/universities", universitiesRoutes);
router.use("/users", usersRoutes);
router.use("/projects", projectRoutes);

export default router;
