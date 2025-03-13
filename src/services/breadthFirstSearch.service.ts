import Log from "../models/logs.model";
import { BFSRequest } from "../types/algoTypes";

export const BFS = async ({ graph, start }: BFSRequest) => {
  const startTime = performance.now();

  const queue: string[] = [start];
  const visited: string[] = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node && !visited.includes(node)) {
      visited.push(node);
      queue.push(...graph[node]);
    }
  }

  const executionTime = performance.now() - startTime;
  await Log.create({
    algorithm: "BFS",
    input: { graph, start },
    output: visited,
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
  });

  return { result: visited, timeComplexity: "O(V + E)", spaceComplexity: "O(V)", executionTime };
};
