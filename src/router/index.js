import { Router } from "express";
import {metaconnect,createAccount} from "../../MetaApi"


const router = Router();
router.get("/info", async (req, res)=>{

    const valores = await metaconnect();

    res.status(200).json({valores: valores[4]})

});

router.post("/create", async (req, res)=>{

    const valores = await createAccount();
    console.log(valores)
    res.status(200).send(valores)

});

export default router;