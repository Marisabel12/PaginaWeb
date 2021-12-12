import {Router, Request, Response} from "express"
import {UserControlllers}  from "../controllers/index";
const router = Router();

router.get("/user", UserControlllers.index);
router.post("/user/create", UserControlllers.createUser);
router.put("/user/edit/:id", UserControlllers.editUser);
router.delete("/user/delete/:id", UserControlllers.deleteUser);

export default router;
