// data/pyp/cat/2024/slot1_quant.ts
import { Mock, Question } from '@/data/type';

export const mock: Mock = {
  id: 2,
  title: "CAT 2024 Slot 1 Quant",
  category: "CAT",
  durationMin: 30,
  totalMarks: 51, // 17 MCQs × 3 marks
  questionCount: 17,
  description: "Quantitative Aptitude Section of CAT 2024 Slot 1",
  instructions: `
Quantitative Ability (QA) Section Instructions:

1.  **Section Duration:** You will have 40 minutes to complete this section.
2.  **Total Questions:** This section contains 22 questions.
3.  **Question Types:** The section contains both Multiple Choice Questions (MCQs) and Non-MCQ (TITA - Type In The Answer) questions.
4.  **Marking Scheme:**
    * **MCQs:** +3 marks for a correct answer, -1 mark for an incorrect answer.
    * **Non-MCQs (TITA):** +3 marks for a correct answer, 0 marks for an incorrect answer.
    * No marks are deducted for unattempted questions.
5.  **On-Screen Calculator:**
    * An on-screen calculator is available for this section. You can access it by clicking the "Calculator" button.
    * You are not permitted to use a personal, physical calculator.
6.  **Navigation:**
    * You can navigate between any question within this section during the 40-minute time limit.
7.  **Answering:**
    * For MCQs, select one option.
    * For TITA questions, use the on-screen keypad to type in your numerical answer.
`,
  sections: [
    { name: "Quant", questionCount: 17, marks: 51 }
  ],
};

export const questions: Question[] = [
  /* Q1 */
  {
    id: 101,
    mockId: 2,
    qOrder: 1,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "In the XY-plane, the area of the region defined by y ≥ x + 4 and -4 ≤ x² + y² + 4(x - y) ≤ 0 is",
    options: ["π", "2π", "4π", "3π"],
    correctAnswer: "B",
    marks: 3,
    negativeMarks: -1,
    explanation: "Rearranging the inequalities, we find that the region is bounded by the line y = x + 4 and the circle (x + 2)² + (y - 2)² = 4. The area of the sector of the circle minus the area of the triangle formed by the line and the x-axis gives us the required area, which calculates to 2π."
  },

  /* Q2 */
  {
    id: 102,
    mockId: 2,
    qOrder: 2,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "The sum of all real values of k for which (1/8)^k × (1/32768)^(1/3) = 1/8 × (1/32768)^(1/k)",
    options: ["4/3", "-4/3", "2/3", "-2/3"],
    correctAnswer: "D",
    marks: 3,
    negativeMarks: -1,
    explanation: "Solving the equation by equating the exponents and simplifying, we find the sum of all real values of k to be -2/3."
  },
  

  /* Q3 (was qOrder 7 originally) */
  {
    id: 103,
    mockId: 2,
    qOrder: 3,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "If x is a positive real number such that 4 log10 x + 4 log10 x² + 8 log10 x⁷ = 13, find ⌊x⌋",
    options: ["4", "5", "6", "7"],
    correctAnswer: "B",
    marks: 3,
    negativeMarks: -1,
    explanation: "Using logarithm properties, simplify the expression to find the value of x. Then, take the floor of x to get the answer."
  },

  /* Q4 (was qOrder 8) */
  {
    id: 104,
    mockId: 2,
    qOrder: 4,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "If (a + b√n) is the positive square root of (29 - 12√5), what is the maximum value of (a + b + n)?",
    options: ["22", "4", "6", "18"],
    correctAnswer: "A",
    marks: 3,
    negativeMarks: -1,
    explanation: "The positive square root of (29 - 12√5) can be expressed as (a + b√n). By squaring and equating terms, we find the values of a, b, and n. The maximum value of (a + b + n) is then calculated."
  },

  /* Q5 (was qOrder 9) */
  {
    id: 105,
    mockId: 2,
    qOrder: 5,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "A shop sells grains; after sequential selling operations the final total sold is zero. Find initial kg.",
    options: ["50", "18", "42", "36"],
    correctAnswer: "A",
    marks: 3,
    negativeMarks: -1,
    explanation: "Let the initial quantity be x kg. Set up equations based on the selling operations and solve for x to find the initial kg of grains."
  },

  /* Q6 (was qOrder 11) */
  {
    id: 106,
    mockId: 2,
    qOrder: 6,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "Given sets A = {2,3,5,7,11,13} and B = {1,8,27}. Total number of onto functions from A to B is:",
    options: ["665", "667", "537", "540"],
    correctAnswer: "D",
    marks: 3,
    negativeMarks: -1,  
    explanation: "Using the principle of inclusion-exclusion, calculate the total number of onto functions from set A to set B."
  },

  /* Q7 (was qOrder 12) */
  {
    id: 107,
    mockId: 2,
    qOrder: 7,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "Selling price ensures 40% profit. If cost was 40% less and SP 5 less, profit would be 50%. Find SP.",
    options: ["20", "15", "14", "10"],
    correctAnswer: "A",
    marks: 3,
    negativeMarks: -1   ,
    explanation: "Let the cost price be C and selling price be S. Set up equations based on the profit conditions and solve for S to find the selling price."
  },

  /* Q8 (was qOrder 13) */
  {
    id: 108,
    mockId: 2,
    qOrder: 8,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "For four numbers with given average conditions, difference between largest and smallest is:",
    options: ["12", "33", "18", "21"],
    correctAnswer: "C",
    marks: 3,
    negativeMarks: -1,
    explanation: "Using the given average conditions, set up equations to find the difference between the largest and smallest numbers."
  },

  /* Q9 (was qOrder 14) */
  {
    id: 109,
    mockId: 2,
    qOrder: 9,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "10,000 deposited in bank A at 5% SI, then after maturity deposited in B at 6% SI. Ratio of interests = 10:13. Years in A?",
    options: ["6", "4", "3", "5"],
    correctAnswer: "C",
    marks: 3,
    negativeMarks: -1,
    explanation: "Let the number of years in bank A be x. Set up the equation based on the simple interest formula and the given ratio to solve for x."
  },

  /* Q10 (was qOrder 15) */
  {
    id: 110,
    mockId: 2,
    qOrder: 10,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "A fruit seller has 187 fruits. Apples:mangoes = 5:2. After selling some fruits ratio becomes 3:2. Find unsold fruits.",
    options: ["50", "18", "42", "36"],
    correctAnswer: "B",
    marks: 3,
    negativeMarks: -1,
    explanation: "Let the number of unsold apples and mangoes be x and y respectively. Using the given ratios and total fruits, set up equations to solve for x and y, then find the total unsold fruits."
  },

  /* Q11 (was qOrder 16) */
  {
    id: 111,
    mockId: 2,
    qOrder: 11,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "ABCD rectangle with AB = 56, BC = 45; E midpoint of CD. Find radius of incircle of triangle ADE.",
    options: ["12", "14", "10", "9"],
    correctAnswer: "A",
    marks: 3,
    negativeMarks: -1,
    explanation: "Using the properties of rectangles and triangles, calculate the radius of the incircle of triangle ADE."
  },

  /* Q12 (was qOrder 17) */
  {
    id: 112,
    mockId: 2,
    qOrder: 12,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "If quadratic equations share a common negative root, find (2m + 3n).",
    options: ["20", "15", "18", "10"],
    correctAnswer: "C",
    marks: 3,
    negativeMarks: -1,
    explanation: "Given that the quadratic equations share a common negative root, use the relationships between roots and coefficients to find the value of (2m + 3n)."
  },

  /* Q13 (was qOrder 18) */
  {
    id: 113,
    mockId: 2,
    qOrder: 13,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "Kamal, Amal, Vimal incomes ratio 8:6:5; house rent % of total in October?",
    options: ["15.28", "13.26", "14", "14.84"],
    correctAnswer: "B",
    marks: 3,
    negativeMarks: -1,
    explanation: "Calculate the percentage of house rent in October based on the given income ratios of Kamal, Amal, and Vimal."
  },

  /* Q14 (was qOrder 19) */
  {
    id: 114,
    mockId: 2,
    qOrder: 14,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "AP sequence x1 to x100 where x5 = -4 and 2x7 + 2x5 = x11 + x13. Find x100.",
    options: ["-196", "206", "204", "-194"],
    correctAnswer: "D",
    marks: 3,
    negativeMarks: -1,
    explanation: "Using the properties of arithmetic progression and the given conditions, find the 100th term of the sequence."
  },

  /* Q15 (was qOrder 20) */
  {
    id: 115,
    mockId: 2,
    qOrder: 15,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "A glass is filled with milk. 2/3 removed and replaced 4 times. Final ratio milk:water?",
    options: ["1:26", "1:80", "1:27", "1:81"],
    correctAnswer: "B",
    marks: 3,
    negativeMarks: -1,  
    explanation: "Using the concept of repeated removal and replacement, calculate the final ratio of milk to water in the glass."
  },

  /* Q16 (was qOrder 21) */
  {
    id: 116,
    mockId: 2,
    qOrder: 16,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "Two places A and B 45 km apart. Anil and Sunil meet after 1.5 hrs. Anil reaches B exactly 1 hr 15 mins after Sunil reaches A. Speed of Anil?",
    options: ["18", "14", "12", "16"],
    correctAnswer: "C",
    marks: 3,
    negativeMarks: -1,
    explanation: "Let the speed of Anil be x km/h and Sunil be y km/h. Using the given conditions, set up equations to solve for x, which gives the speed of Anil."
  },

  /* Q17 (was qOrder 22) */
  {
    id: 117,
    mockId: 2,
    qOrder: 17,
    section: "QUANT",
    type: "MCQ_SINGLE",
    text: "When 10^100 is divided by 7, remainder is",
    options: ["1", "3", "4", "6"],
    correctAnswer: "C",
    marks: 3,
    negativeMarks: -1,
    explanation: "Using modular arithmetic and Fermat's Little Theorem, calculate the remainder when 10^100 is divided by 7, which results in 4."
  },
];
// Note: Explanations for each question can be added similarly if needed.