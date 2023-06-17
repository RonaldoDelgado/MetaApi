import { Router } from "express";
import metaconnect from "../../MetaApi"


const router = Router();
router.get("/info", async (req, res)=>{

    const valores = await metaconnect();

    res.status(200).json({valores: valores[4]})

});

export default router;