import Log from "../models/logs.model";
import { BinarySearchRequest } from "../types/algoTypes";

export const Binary_Search = async ({ inputArr, target }: BinarySearchRequest) => {
  inputArr.sort((a,b)=>a-b);
  const startTime = performance.now(); 

  let left = 0, right = inputArr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (inputArr[mid] === target) {
      const executionTime = performance.now() - startTime;

      await Log.create({
        algorithm: "Binary Search",
        input: { inputArr, target },
        output: mid,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
      });

      return { result: mid, timeComplexity: "O(log n)", spaceComplexity: "O(1)", executionTime };
    } else if (inputArr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  const executionTime = performance.now() - startTime;
  await Log.create({
    algorithm: "Binary Search",
    input: { inputArr, target },
    output: -1,
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
  });

  return { result: -1, timeComplexity: "O(log n)", spaceComplexity: "O(1)", executionTime };
};
