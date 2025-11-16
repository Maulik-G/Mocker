import { Mock, Question } from '../type';

export const mock: Mock = {
  id: 6,
  title: "Data Structures & Algorithms MCQ Mock Test",
  category: "TECH",
  durationMin: 35,
  totalMarks: 90,
  questionCount: 30,
  description: "30 MCQs covering core Data Structures & Algorithms.",
  instructions: `
📘 DSA MCQ Mock Test — Instructions

• Total Questions: 30  
• Marks per Question: 3  
• Negative Marking: -1  
• Duration: 35 minutes  

• MCQs are single-choice—select the best option.
• Navigation between questions is allowed.
• Your progress autosaves, but you must press Submit to finalize.

⏳ Time & Submission
• Timer starts when you begin.
• Test will auto-submit if time expires.
• After submission, answers cannot be changed.

⚠️ Rules
• No external help—no Google, notes, ChatGPT, or IDEs.
• Avoid switching tabs; suspicious activity may be logged.
• Use a stable internet connection.

🧰 Technical Help
• Screenshot issues and contact support.
• Mention mock ID: 6.

Good luck! 🚀
`,

  sections: [
    { name: "DSA", questionCount: 30, marks: 90 }
  ],
};

export const questions: Question[] = [

  /* ----------- DSA QUESTIONS (1–30) ------------ */

  {
    id: 1,
    qOrder: 1,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Binary search halves the search space each step."
  },

  {
    id: 2,
    qOrder: 2,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Queue removes elements in First-In-First-Out order."
  },

  {
    id: 3,
    qOrder: 3,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which traversal visits nodes in sorted order for BST?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "BST inorder traversal gives ascending order."
  },

  {
    id: 4,
    qOrder: 4,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which algorithm uses divide and conquer?",
    options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Merge Sort splits and merges recursively."
  },

  {
    id: 5,
    qOrder: 5,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which data structure uses LIFO?",
    options: ["Array", "Queue", "Stack", "Linked List"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Stack removes the last inserted element first."
  },

  {
    id: 6,
    qOrder: 6,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Worst-case time of QuickSort:",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    correctAnswer: "d",
    marks: 3,
    negativeMarks: -1,
    explanation: "Worst case occurs with already sorted pivot selections."
  },

  {
    id: 7,
    qOrder: 7,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which is used to detect cycles in graphs?",
    options: ["DFS", "BFS", "Topological Sort", "Dijkstra"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "DFS helps detect back edges forming cycles."
  },

  {
    id: 8,
    qOrder: 8,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which structure is best for implementing recursion?",
    options: ["Queue", "Stack", "Heap", "Deque"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Function calls use system stack."
  },

  {
    id: 9,
    qOrder: 9,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which algorithm finds shortest path in weighted graphs (no negatives)?",
    options: ["DFS", "Prim's", "Dijkstra", "Bellman-Ford"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Dijkstra handles non-negative weighted graphs."
  },

  {
    id: 10,
    qOrder: 10,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which sorting algorithm is stable?",
    options: ["QuickSort", "HeapSort", "MergeSort", "Selection Sort"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "MergeSort maintains relative order of equal keys."
  },

  {
    id: 11,
    qOrder: 11,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Minimum number of edges in a tree with N nodes?",
    options: ["N", "N-1", "N+1", "N/2"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "All trees have exactly N−1 edges."
  },

  {
    id: 12,
    qOrder: 12,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which DS gives O(1) average lookup?",
    options: ["Array", "Linked List", "HashMap", "Binary Tree"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Hashing gives constant-time average access."
  },

  {
    id: 13,
    qOrder: 13,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which graph traversal uses a queue?",
    options: ["DFS", "BFS", "Inorder", "Postorder"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "BFS explores level by level using a queue."
  },

  {
    id: 14,
    qOrder: 14,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which heap is used in priority queue?",
    options: ["Min Heap", "Max Heap", "Binary Tree", "AVL Tree"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "Min-heap gives smallest element in O(1)."
  },

  {
    id: 15,
    qOrder: 15,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Adjacency matrix takes how much space?",
    options: ["O(V)", "O(E)", "O(V²)", "O(V+E)"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Matrix stores V×V cells."
  },

  {
    id: 16,
    qOrder: 16,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which traversal is used in building expression trees?",
    options: ["Postorder", "Preorder", "Inorder", "Level Order"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "Postorder is used to evaluate expressions."
  },

  {
    id: 17,
    qOrder: 17,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Balanced BST has height:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Balanced BST reduces height to log scale."
  },

  {
    id: 18,
    qOrder: 18,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which statement is true about linked lists?",
    options: ["Random access allowed", "Requires contiguous memory", "Insertion is O(1)", "Search is O(1)"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Linked list insertions at head are O(1)."
  },

  {
    id: 19,
    qOrder: 19,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which does NOT use weights?",
    options: ["MST", "Dijkstra", "BFS", "Bellman-Ford"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "BFS works on unweighted graphs."
  },

  {
    id: 20,
    qOrder: 20,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Stack can be implemented using:",
    options: ["Array", "Linked List", "Both", "None"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Stack logic works on both structures."
  },

  {
    id: 21,
    qOrder: 21,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Worst-case time of HeapSort:",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Heap sort maintains O(n log n) complexity."
  },

  {
    id: 22,
    qOrder: 22,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "A complete binary tree of height h has max nodes:",
    options: ["2h", "h²", "2^(h+1)-1", "h!"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Complete binary tree formula: 2^(h+1)−1."
  },

  {
    id: 23,
    qOrder: 23,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "What does topological sort apply to?",
    options: ["Trees", "Cyclic graphs", "DAGs", "All graphs"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Topological order exists only for DAGs."
  },

  {
    id: 24,
    qOrder: 24,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which sorting is best for almost sorted data?",
    options: ["Bubble Sort", "Insertion Sort", "QuickSort", "HeapSort"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Insertion sort runs nearly in O(n)."
  },

  {
    id: 25,
    qOrder: 25,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "What is the height of a skewed BST?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Skewed BST becomes a linked list."
  },

  {
    id: 26,
    qOrder: 26,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which data structure supports both ends insertion?",
    options: ["Queue", "Deque", "Stack", "Tree"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Deque supports insertion at both ends."
  },

  {
    id: 27,
    qOrder: 27,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which algorithm detects negative cycles?",
    options: ["Dijkstra", "Prim", "Bellman-Ford", "Kruskal"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Bellman-Ford detects negative weight cycles."
  },

  {
    id: 28,
    qOrder: 28,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Space complexity of recursion mainly depends on:",
    options: ["Stack space", "Heap", "Global variables", "Input size"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "Recursive calls push frames into the call stack."
  },

  {
    id: 29,
    qOrder: 29,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which tree is strictly height-balanced?",
    options: ["BST", "AVL", "Red-Black", "Heap"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "AVL strictly maintains height difference ≤1."
  },

  {
    id: 30,
    qOrder: 30,
    mockId: 6,
    section: "DSA",
    type: "MCQ_SINGLE",
    text: "Which DS is used for backtracking?",
    options: ["Queue", "Stack", "Array", "Heap"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Backtracking stores choices using stack."
  }

];
