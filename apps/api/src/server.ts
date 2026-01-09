import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
