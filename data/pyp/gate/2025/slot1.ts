// data/pyp/gate/2025/slot1.ts
import { Mock, Question } from "@/data/type";

export const mock: Mock = {
  id: 202501,
  title: "GATE CS 2025",
  category: "GATE",
  durationMin: 120,
  totalMarks: 63,
  questionCount: 43,
  description: "GATE CS 2025",
  instructions: "Follow official GATE exam rules. NAT questions are excluded.",
  sections: [
    { name: "GA", questionCount: 10, marks: 15 },
    { name: "CS-1", questionCount: 33, marks: 48 }
  ]
};
export const questions: Question[] = [

  // =========================================================
  // GA QUESTIONS (1–10)
  // =========================================================


  {
    id: 1, qOrder: 1, mockId: 202501, section: "GA",
    text: "Ravi had ______ younger brother who taught at ______ university. He was ______ honorable man.",
    type: "MCQ_SINGLE",
    options: ["a; a; an", "the; an; a", "a; an; a", "an; an; a"],
    correctAnswer: "A",
    marks: 1, negativeMarks: -0.33,
    explanation: "Honorable begins with a vowel sound. Correct sequence is a; a; an."
  },

  {
    id: 2, qOrder: 2, mockId: 202501, section: "GA",
    text: "Meaning of the word myopic.",
    type: "MCQ_SINGLE",
    options: ["visionary", "shortsighted", "progressive", "innovative"],
    correctAnswer: "B",
    marks: 1, negativeMarks: -0.33,
    explanation: "Myopic means shortsighted."
  },

  {
    id: 3, qOrder: 3, mockId: 202501, section: "GA",
    text: "Average increased from 30.8 to 31.4 after correcting a wrong entry 24 to 42. Find number of students.",
    type: "MCQ_SINGLE",
    options: ["25", "28", "30", "32"],
    correctAnswer: "C",
    marks: 1, negativeMarks: -0.33,
    explanation: "Increase in total = 18. Increase per student = 0.6. So n = 18 / 0.6 = 30."
  },

  {
    id: 4, qOrder: 4, mockId: 202501, section: "GA",
    text: "Family relation reasoning. Which statements are true?",
    type: "MCQ_SINGLE",
    options: ["Both (1) and (2)", "Both (1) and (3)", "Only (3)", "Only (4)"],
    correctAnswer: "A",
    marks: 1, negativeMarks: -0.33,
    explanation: "Statements (1) and (2) hold true based on the diagram."
  },

  {
    id: 5, qOrder: 5, mockId: 202501, section: "GA",
    text: "Map-based reasoning. Which statement is correct?",
    type: "MCQ_SINGLE",
    options: [
      "Library is northwest of the canteen",
      "Hospital is east of the chemistry lab",
      "Chemistry lab is southeast of the physics lab",
      "Classrooms and canteen are adjacent"
    ],
    correctAnswer: "C",
    marks: 1, negativeMarks: -0.33,
    explanation: "The chemistry lab is southeast of the physics lab."
  },

  {
    id: 6, qOrder: 6, mockId: 202501, section: "GA",
    text: "Chesterton passage question. Which statement is true?",
    type: "MCQ_SINGLE",
    options: ["He carries a mirror", "He planned to write an epic", "Knife is infant of sword", "Epics are inconvenient"],
    correctAnswer: "C",
    marks: 2, negativeMarks: -0.66,
    explanation: "The passage explicitly states that the pocket knife is the infant of the sword."
  },

  {
    id: 7, qOrder: 7, mockId: 202501, section: "GA",
    text: "Parallel lines QR and ST. Find ratio of areas.",
    type: "MCQ_SINGLE",
    options: ["1/3", "1/4", "2/5", "1/2"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Using similarity of triangles, the ratio becomes 1/3."
  },

  {
    id: 8, qOrder: 8, mockId: 202501, section: "GA",
    text: "Probability of exactly one 6 in three throws of a fair die.",
    type: "MCQ_SINGLE",
    options: ["75/216", "1/6", "1/18", "25/216"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "3 * (1/6) * (5/6)^2 = 75/216."
  },

  {
    id: 9, qOrder: 9, mockId: 202501, section: "GA",
    text: "Paper folding problem. Identify final pattern.",
    type: "MCQ_SINGLE",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Symmetry of folds matches pattern A."
  },

  {
    id: 10, qOrder: 10, mockId: 202501, section: "GA",
    text: "Four flavors, three scoops, order does not matter. Count combinations.",
    type: "MCQ_SINGLE",
    options: ["4", "20", "24", "48"],
    correctAnswer: "B",
    marks: 2, negativeMarks: -0.66,
    explanation: "Stars and bars: C(6,3) = 20."
  },

  // =========================================================
  // CS QUESTIONS (11–43)
  // =========================================================

  {
    id: 11, qOrder: 11, mockId: 202501, section: "CS-1",
    text: "Correct interrupt sequence.",
    type: "MCQ_SINGLE",
    options: ["(iii),(i),(ii)", "(i),(iii),(ii)", "(i),(ii),(iii)", "(iii),(ii),(i)"],
    correctAnswer: "A",
    marks: 1, negativeMarks: -0.33,
    explanation: "Correct order: complete instruction, save PC, jump to ISR."
  },

  {
    id: 12, qOrder: 12, mockId: 202501, section: "CS-1",
    text: "Which statement about symbol tables is FALSE?",
    type: "MCQ_SINGLE",
    options: ["Tracks scope", "Can use BST", "Not needed after parsing", "Created during lexical analysis"],
    correctAnswer: "C",
    marks: 1, negativeMarks: -0.33,
    explanation: "Symbol tables are used beyond parsing."
  },

  {
    id: 13, qOrder: 13, mockId: 202501, section: "CS-1",
    text: "Which optimization uses live variable analysis?",
    type: "MCQ_SINGLE",
    options: ["Runtime call management", "Register assignment", "Strength reduction", "Constant folding"],
    correctAnswer: "B",
    marks: 1, negativeMarks: -0.33,
    explanation: "Register allocation uses liveness information."
  },

  {
    id: 14, qOrder: 14, mockId: 202501, section: "CS-1",
    text: "Max page table entries for 32-bit logical address and 2 KB pages.",
    type: "MCQ_SINGLE",
    options: ["2^21", "2^20", "2^22", "2^24"],
    correctAnswer: "A",
    marks: 1, negativeMarks: -0.33,
    explanation: "Page offset = 11 bits, so entries = 2^(32-11) = 2^21."
  },

  {
    id: 15, qOrder: 15, mockId: 202501, section: "CS-1",
    text: "Which transactions must rollback after T1 abort?",
    type: "MCQ_SINGLE",
    options: ["Only T2", "Only T3", "Both", "Neither"],
    correctAnswer: "C",
    marks: 1, negativeMarks: -0.33,
    explanation: "Both dependent transactions must roll back."
  },

  {
    id: 16, qOrder: 16, mockId: 202501, section: "CS-1",
    text: "Match TCP/IP layers correctly.",
    type: "MCQ_SINGLE",
    options: ["a-I,b-II,c-III", "a-I,b-III,c-II", "a-II,b-I,c-III", "a-III,b-II,c-I"],
    correctAnswer: "B",
    marks: 1, negativeMarks: -0.33,
    explanation: "Mapping matches option B."
  },

  {
    id: 17, qOrder: 17, mockId: 202501, section: "CS-1",
    text: "If f and f composite g are onto, what must g be?",
    type: "MCQ_SINGLE",
    options: ["g is onto", "g is injective", "g is bijective", "g need not satisfy anything"],
    correctAnswer: "D",
    marks: 1, negativeMarks: -0.33,
    explanation: "g need not satisfy any specific property."
  },

  {
    id: 18, qOrder: 18, mockId: 202501, section: "CS-1",
    text: "Compare shortest path in G and MST.",
    type: "MCQ_SINGLE",
    options: ["equal", "d1 <= d2", "d1 >= d2", "never equal"],
    correctAnswer: "B",
    marks: 1, negativeMarks: -0.33,
    explanation: "Shortest path in graph is less than or equal to MST distance."
  },

  {
    id: 19, qOrder: 19, mockId: 202501, section: "CS-1",
    text: "Language generated by grammar.",
    type: "MCQ_SINGLE",
    options: ["{a^2 b^n} U {a^n b^2}", "{a^n b^2n} U {a^2n b^n}", "{a^n b^n}", "{a^2n b^2n}"],
    correctAnswer: "A",
    marks: 1, negativeMarks: -0.33,
    explanation: "Matches L = {a^2 b^n} U {a^n b^2}."
  },

  {
    id: 20, qOrder: 20, mockId: 202501, section: "CS-1",
    text: "Solve T(n) = 2T(n-1) + n 2^n.",
    type: "MCQ_SINGLE",
    options: ["Theta(n^2 2^n)", "Theta(n 2^n)", "Theta((log n)^2 2^n)", "Theta(4^n)"],
    correctAnswer: "A",
    marks: 1, negativeMarks: -0.33,
    explanation: "Solution grows as n^2 2^n."
  },

  // MULTI-SELECT 21–28

  {
    id: 21, qOrder: 21, mockId: 202501, section: "CS-1",
    text: "Insert 23 into B+ tree. Which are true?",
    type: "MCQ_MULTI",
    options: ["No split", "At least one split and redistribution", "Total nodes same", "Height increases"],
    correctAnswer: ["B", "D"],
    marks: 1, negativeMarks: 0,
    explanation: "Insertion causes split and height increase."
  },

  {
    id: 22, qOrder: 22, mockId: 202501, section: "CS-1",
    text: "TCP handshake. Which flag settings are correct?",
    type: "MCQ_MULTI",
    options: ["P3 SYN=1 ACK=1", "P2 SYN=1 ACK=1", "P2 SYN=0 ACK=1", "P1 SYN=1"],
    correctAnswer: ["B", "D"],
    marks: 1, negativeMarks: 0,
    explanation: "Correct handshake is SYN, SYN-ACK, ACK."
  },

  {
    id: 23, qOrder: 23, mockId: 202501, section: "CS-1",
    text: "System of equations. Which are correct?",
    type: "MCQ_MULTI",
    options: [
      "Exactly one k gives no solution",
      "Infinite k give no solution",
      "Exactly one k gives one solution",
      "Exactly one k gives infinite solutions"
    ],
    correctAnswer: ["A", "D"],
    marks: 1, negativeMarks: 0,
    explanation: "One value yields no solution and one yields infinite."
  },

  {
    id: 24, qOrder: 24, mockId: 202501, section: "CS-1",
    text: "Which identities hold for Boolean function X?",
    type: "MCQ_MULTI",
    options: ["A", "B", "C", "D"],
    correctAnswer: ["B", "D"],
    marks: 1, negativeMarks: 0,
    explanation: "Simplification matches B and D."
  },

  {
    id: 25, qOrder: 25, mockId: 202501, section: "CS-1",
    text: "Two's complement of -6 in multiple forms.",
    type: "MCQ_MULTI",
    options: ["10001010", "11111010", "1000...1010", "1111...1010"],
    correctAnswer: ["B", "D"],
    marks: 1, negativeMarks: 0,
    explanation: "Correct 2's complement encodings match B and D."
  },

  {
    id: 26, qOrder: 26, mockId: 202501, section: "CS-1",
    text: "Which statements about BSTs are true?",
    type: "MCQ_MULTI",
    options: ["Max path = n - 1", "Inorder gives sorted list", "Worst case search is O(log n)", "Every BST is a min-heap"],
    correctAnswer: ["A", "B"],
    marks: 1, negativeMarks: 0,
    explanation: "Worst case BST search is O(n), not O(log n)."
  },

  {
    id: 27, qOrder: 27, mockId: 202501, section: "CS-1",
    text: "Which ALU operations are possible?",
    type: "MCQ_MULTI",
    options: ["Two registers", "Register + immediate", "Two immediates", "Only register + immediate"],
    correctAnswer: ["A", "B", "C"],
    marks: 1, negativeMarks: 0,
    explanation: "ISA allows all except only reg+imm restriction."
  },

  {
    id: 28, qOrder: 28, mockId: 202501, section: "CS-1",
    text: "NFA statements. Which are false?",
    type: "MCQ_MULTI",
    options: ["May accept with < n states", "May have DFA < n states", "Exists DFA <= 2^n", "Every DFA > 2^n"],
    correctAnswer: ["D"],
    marks: 1, negativeMarks: 0,
    explanation: "Not every DFA is larger than 2^n."
  },

  // MCQ 36–45 -> qOrder 29–38

  {
    id: 29, qOrder: 29, mockId: 202501, section: "CS-1",
    text: "Bits to store all tags in a direct mapped cache.",
    type: "MCQ_SINGLE",
    options: ["6 x 2^10", "8 x 2^10", "2^12", "2^14"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Matches formula for tag storage."
  },

  {
    id: 30, qOrder: 30, mockId: 202501, section: "CS-1",
    text: "Max immediate bits in a 32-bit instruction.",
    type: "MCQ_SINGLE",
    options: ["16", "20", "22", "24"],
    correctAnswer: "B",
    marks: 2, negativeMarks: -0.66,
    explanation: "20 bits is maximum immediate field allowed."
  },

  {
    id: 31, qOrder: 31, mockId: 202501, section: "CS-1",
    text: "Average waiting time in two-processor priority scheduling.",
    type: "MCQ_SINGLE",
    options: ["9.00", "8.75", "6.50", "7.50"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Calculated average = 9.00."
  },

  {
    id: 32, qOrder: 32, mockId: 202501, section: "CS-1",
    text: "Tuple relational calculus selecting MI players.",
    type: "MCQ_SINGLE",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Expression corresponds to option A."
  },

  {
    id: 33, qOrder: 33, mockId: 202501, section: "CS-1",
    text: "Routing table: interface for IP 145.36.109.70.",
    type: "MCQ_SINGLE",
    options: ["E3", "E1", "E2", "E5"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Correct matching route is E3."
  },

  {
    id: 34, qOrder: 34, mockId: 202501, section: "CS-1",
    text: "Eigenvalues of A to the power 13.",
    type: "MCQ_SINGLE",
    options: ["1,-1", "2sqrt2,-2sqrt2", "4sqrt2,-4sqrt2", "64sqrt2,-64sqrt2"],
    correctAnswer: "D",
    marks: 2, negativeMarks: -0.66,
    explanation: "Eigenvalues scale with exponent 13."
  },

  {
    id: 35, qOrder: 35, mockId: 202501, section: "CS-1",
    text: "Minimized Boolean function corresponds to which option?",
    type: "MCQ_SINGLE",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    marks: 2, negativeMarks: -0.66,
    explanation: "Correct simplified form matches A."
  },

  {
    id: 36, qOrder: 36, mockId: 202501, section: "CS-1",
    text: "If tree diameter is 30, what is BFS tree height?",
    type: "MCQ_SINGLE",
    options: ["Exactly 15", "Exactly 30", "At least 15", "At least 30"],
    correctAnswer: "C",
    marks: 2, negativeMarks: -0.66,
    explanation: "Height is at least half the diameter."
  },

  {
    id: 37, qOrder: 37, mockId: 202501, section: "CS-1",
    text: "For languages L1 and L2, which are regular?",
    type: "MCQ_SINGLE",
    options: ["Both regular", "L1 regular, L2 not", "L1 not, L2 regular", "Neither regular"],
    correctAnswer: "C",
    marks: 2, negativeMarks: -0.66,
    explanation: "L2 is regular; L1 is not."
  },

  {
    id: 38, qOrder: 38, mockId: 202501, section: "CS-1",
    text: "Which of L1 and L2 are context free?",
    type: "MCQ_SINGLE",
    options: ["Both CFL", "L1 CFL and L2 not", "L1 not CFL and L2 CFL", "Neither CFL"],
    correctAnswer: "C",
    marks: 2, negativeMarks: -0.66,
    explanation: "L1 is not context free, L2 is."
  },

  // MSQ 46–50 -> qOrder 39–43

  {
    id: 39, qOrder: 39, mockId: 202501, section: "CS-1",
    text: "Which statements about FIRST and FOLLOW sets are true?",
    type: "MCQ_MULTI",
    options: ["A", "B", "C", "D"],
    correctAnswer: ["A", "D"],
    marks: 2, negativeMarks: 0,
    explanation: "A and D hold for FIRST/FOLLOW definitions."
  },

  {
    id: 40, qOrder: 40, mockId: 202501, section: "CS-1",
    text: "Decomposition of team(name, city, owner). Which are correct?",
    type: "MCQ_MULTI",
    options: ["team not BCNF", "t1 and t2 are BCNF", "lossless", "team not 3NF"],
    correctAnswer: ["B", "C"],
    marks: 2, negativeMarks: 0,
    explanation: "Decomposition is lossless and both subrelations are in BCNF."
  },

  {
    id: 41, qOrder: 41, mockId: 202501, section: "CS-1",
    text: "Which predicate logic expressions represent 'Everyone has exactly one mother'?",
    type: "MCQ_MULTI",
    options: ["A", "B", "C", "D"],
    correctAnswer: ["B", "D"],
    marks: 2, negativeMarks: 0,
    explanation: "Correct formalization matches options B and D."
  },

  {
    id: 42, qOrder: 42, mockId: 202501, section: "CS-1",
    text: "Which statements about structure (F, o) are correct?",
    type: "MCQ_MULTI",
    options: ["Abelian group", "Abelian monoid", "Non-Abelian group", "Non-Abelian monoid"],
    correctAnswer: ["B"],
    marks: 2, negativeMarks: 0,
    explanation: "Structure forms an abelian monoid only."
  },

  {
    id: 43, qOrder: 43, mockId: 202501, section: "CS-1",
    text: "Which of the following languages are accepted by a DFA?",
    type: "MCQ_MULTI",
    options: ["Even number of b's", "Contains bab", "Ends with bab", "Does not contain aba"],
    correctAnswer: ["C"],
    marks: 2, negativeMarks: 0,
    explanation: "Only 'Ends with bab' is guaranteed regular."
  }

];