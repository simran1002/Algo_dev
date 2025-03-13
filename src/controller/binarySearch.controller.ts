import { Request, Response } from "express";
import { Binary_Search } from "../services/binarySearch.service";
import { BinarySearchRequest } from "../types/algoTypes";
import winstonLogger from "../utils/logger";

export const binarySearch = async (req: Request, res: Response): Promise<void> => {
  try {
    const { inputArr, target } = req.body as BinarySearchRequest;

    if (!Array.isArray(inputArr) || typeof target !== "number") {
      res.status(400).json({ error: "Invalid input" });
      return;
    }
    if (!isSorted(inputArr)) {
      res.status(400).json({ error: "Input array must be sorted in ascending order." });
      return;
    }
    const response = await Binary_Search({ inputArr, target });
    winstonLogger.info({
      message: "Binary Search Algorithm Execution",
      algorithm: "Binary Search",
      input: { inputArr, target },
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

const isSorted = (arr: number[]): boolean => {
  return arr.every((val, i, array) => i === 0 || array[i - 1] <= val);
};