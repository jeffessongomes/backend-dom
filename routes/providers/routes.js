import { Router } from "express";
import * as ProviderController from "../../controllers/providerController";

const router = Router();

router.get("/providers", ProviderController.getAllProviders);
router.get("/providers/:id", ProviderController.getProvider);
router.post("/providers", ProviderController.createProvider);
router.put("/providers/:id", ProviderController.updateProvider);
router.delete("/providers/:id", ProviderController.deleteProvider);

export default router;
