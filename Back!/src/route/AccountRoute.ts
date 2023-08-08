import express, { Request, Response } from "express";
import { fetchAccounts } from "../controller/accountsController";

const router = express.Router();

router.get("/accounts", async (req: Request, res: Response) => {
  try {
    const accounts = await fetchAccounts();
    res.json(accounts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

export default router;
