// data/types.ts

// The shape of a mock's section (e.g., VARC, DILR)
export interface Section {
  name: string;
  questionCount: number;
  marks: number;
}

// The shape of a Mock Test
export interface Mock {
  id: number;
  title: string;
  category: "CAT" | "GATE" | "CUSTOM"; // Enforce categories
  durationMin: number;
  totalMarks: number;
  questionCount: number;
  description: string;
  instructions: string;
  sections: Section[];
}

// The shape of a single Question
export interface Question {
  id: number;
  mockId: number;
  qOrder: number;
  section: string;
  text: string;
  type: "MCQ_SINGLE" | "MCQ_MULTI" | "FILL_BLANK" | "NUMERIC" | "TRUE_FALSE";
  options: string[] | null;
  correctAnswer: string | string[]; // Can be one answer or an array
  marks: number;
  negativeMarks: number;
  explanation: string;
}