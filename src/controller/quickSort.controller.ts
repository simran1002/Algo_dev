import { Request, Response } from "express";
import { QuickSort } from "../services/quickSort.service";
import { QuickSortRequest } from "../types/algoTypes";
import winstonLogger from "../utils/logger";

export const quickSort = async (req: Request, res: Response):Promise<void> => {
  try {
    const { inputArr }: QuickSortRequest = req.body;
    if (!Array.isArray(inputArr)) {
      res.status(400).json({ error: "Invalid input" });
      return;
    }

    const response = await QuickSort({ inputArr });
    winstonLogger.info({
      message: "Quick Sort Algorithm Execution",
      algorithm: "Quick Sort",
      input: { inputArr },
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
