import { Router } from "express";
import authRoutes from "./auth/auth.route";
import universitiesRoutes from "./university/university.route";
import usersRoutes from "./user/user.route";
import projectRoutes from "./project/project.route";
import departmentRoutes from "./department/department.route";
import grantRoutes from "./grant/grant.route"

const router = Router();

router.use("/auth", authRoutes);
router.use("/universities", universitiesRoutes);
router.use("/users", usersRoutes);
router.use("/projects", projectRoutes);
router.use("/departments", departmentRoutes);
router.use("/grants", grantRoutes)

export default router;
