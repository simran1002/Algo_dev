## Project Description

This project implements three fundamental algorithms via RESTful APIs:

- *Binary Search* - Efficiently searches for an element in a sorted array.
- *Quick Sort* - Sorts an array using the QuickSort algorithm.
- *Breadth-First Search (BFS)* - Traverses a graph/tree from a given start node.

Each API call is logged, storing:

- *Algorithm Name*
- *Input Data*
- *Output Data*

This allows reusing previous results without re-executing the same request.

---

## 🛠 Tech Stack

- *Backend:* Node.js with Express.js  
- *Language:* TypeScript  
- *Database (Logging):* MongoDB  
- *Containerization :* Docker  

---

## API Endpoints

### *Binary Search API*

- *Endpoint:* POST /api/binary-search
- *Description:* Searches for an element in a sorted array using Binary Search.
- *Request Body:*

  json
  {
    "inputArr": [1, 3, 5, 7, 9, 11],
    "target": 7
  }
- **Response Body:**

  json
  {
    "result": 0,
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "executionTime": 0.007999999997991836
  }

### *Quick Sort API*

- *Endpoint:* POST /api/quick-sort
- *Description:* Sorts an array using QuickSort.
- *Request Body:*

  json
  {
  "inputarr": [9, 3, 7, 1, 6]
  }

- **Response Body:**

  json
  {
    "result":[1,2,3,4,5,6,7,8,9,10],
    "timeComplexity":"O(n log n)",
    "spaceComplexity":"O(n)",
    "executionTime":698.2417000000132
  }

### *Breadth-First Search (BFS) API*

- *Endpoint:* POST /api/bfs
- *Description:* Sorts an array using QuickSort.
- *Request Body:*

  json
  {
    "graph": {
        "A": ["B", "C"],
        "B": ["A", "D", "E"],
        "C": ["A", "F"],
        "D": ["B"],
        "E": ["B", "F"],
        "F": ["C", "E"]
    },
    "startNode": "A"
  }
- **Response Body:**

  json
  {
    "result":["A","B","C","D","E","F"],
    "timeComplexity":"O(V + E)",
    "spaceComplexity":"O(V)",
    "executionTime":0.021700000012060627
  }

## How to Run the Project

### Setup

```sh
git clone https://github.com/simran1002/Algo_dev.git
cd Algo_dev
npm install
npm run start