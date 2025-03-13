import { Request, Response } from "express";
import { BFS } from "../services/breadthFirstSearch.service";
import { BFSRequest } from "../types/algoTypes";
import winstonLogger from "../utils/logger";

export const bfs = async (req: Request, res: Response):Promise<void> => {
  try {
    const { graph, start }: BFSRequest = req.body;
    if (typeof graph !== "object" || typeof start !== "string") {
      res.status(400).json({ error: "Invalid input" });
      return;
    }

    const response = await BFS({ graph, start });
    winstonLogger.info({
      message: "BFS Algorithm Execution",
      algorithm: "Breadth-First Search",
      input: { graph, start },
      output: response.result,
      executionTime: `${response.executionTime.toFixed(2)}ms`,
    });
    res.json(response);
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
};
