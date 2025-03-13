import Log from "../models/logs.model";
import { QuickSortRequest } from "../types/algoTypes";

export const QuickSort = async ({ inputArr }: QuickSortRequest): Promise<{ result: number[]; timeComplexity: string; spaceComplexity: string; executionTime: number }> => {
  const startTime = performance.now();

  if (inputArr.length <= 1) {
    return { result: inputArr, timeComplexity: "O(n log n)", spaceComplexity: "O(n)", executionTime: 0 };
  }

  const pivot = inputArr[inputArr.length - 1];
  const left = inputArr.filter(element => element < pivot);
  const right = inputArr.filter(element => element > pivot);

  const leftSorted = await QuickSort({ inputArr: left });
  const rightSorted = await QuickSort({ inputArr: right });

  const sortedArray: number[] = [...leftSorted.result, pivot, ...rightSorted.result];

  const executionTime = performance.now() - startTime;

  await Log.create({
    algorithm: "Quick Sort",
    input: inputArr,
    output: sortedArray,
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    createdAt: new Date(),
  });

  return { result: sortedArray, timeComplexity: "O(n log n)", spaceComplexity: "O(n)", executionTime };
};
