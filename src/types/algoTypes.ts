export interface LogEntry {
    algorithm: string;
    input: unknown;
    output: unknown;
    timeComplexity: string;
    spaceComplexity: string;
    createdAt?: Date;
}

export interface BinarySearchRequest {
    inputArr: number[];
    target: number;
}

export interface QuickSortRequest {
    inputArr: number[];
}

export interface BFSRequest {
    graph: Record<string, string[]>;
    start: string;
}
