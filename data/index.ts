// data/index.ts
import { Mock, Question } from './type';

// 1. Import all your mock data files
import * as cat2024slot1 from './pyp/cat/2024/slot1';
import * as gate2025slot1 from './pyp/gate/2025/slot1';
import * as gate2024slot1 from './pyp/gate/2024/slot1';
// 2. Combine them into the two arrays your app expects
const allMocks: Mock[] = [
  cat2024slot1.mock,
  gate2025slot1.mock,
  gate2024slot1.mock,
  // ... add other mocks here
];

const allQuestions: Question[] = [
  ...cat2024slot1.questions,
  ...gate2025slot1.questions,   
  ...gate2024slot1.questions,
  // ... add other questions here
];

// 3. Export the final object
export const DEMO_DATA = {
  mocks: allMocks,
  questions: allQuestions,
};