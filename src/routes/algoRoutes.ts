import express from "express";
import { binarySearch } from "../controller/binarySearch.controller";
import { quickSort } from "../controller/quickSort.controller";
import { bfs } from "../controller/bfs.controller";

const router = express.Router();

router.post("/binary-search", binarySearch);
router.post("/quick-sort", quickSort);
router.post("/bfs", bfs);

export default router;
