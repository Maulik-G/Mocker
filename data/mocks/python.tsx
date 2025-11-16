// import { Mock, Question } from '../type';
// export const mock: Mock = {
//   id: 4,
//   title: "Python Programming MCQ Mock Test",
//   category: "PYTHON",
//   durationMin: 30,
//   totalMarks: 90, // 30 × 3 marks
//   questionCount: 30,
//   description: "Randomized Python programming MCQs for practice.",
//   instructions: "Each question has one correct answer. Select the best option.",
//   sections: [
//     { name: "Python", questionCount: 30, marks: 90 }
//   ],
// };
//   export const questions: Question[] = [

//     /* Q1 */
//     {
//       id: 1,
//       qOrder: 1,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(type([]))?",
//       options: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1,
//       explanation: "In Python, [] denotes a list, so type([]) returns <class 'list'>.",
//     },

//     /* Q2 */
//     {
//       id: 2,
//       qOrder: 2,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which keyword is used to define a function in Python?",
//       options: ["func", "define", "def", "lambda"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q3 */
//     {
//       id: 3,
//       qOrder: 3,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of the following is immutable?",
//       options: ["list", "set", "tuple", "dictionary"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q4 */
//     {
//       id: 4,
//       qOrder: 4,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of: print(3 * 'ab')?",
//       options: ["ab3", "ababab", "aaabbb", "Error"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q5 */
//     {
//       id: 5,
//       qOrder: 5,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which method is used to add an element to a list?",
//       options: ["append()", "add()", "push()", "insertFirst()"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1,
//       explanation: "The append() method adds an element to the end of a list."
//     },

//     /* Q6 */
//     {
//       id: 6,
//       qOrder: 6,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(bool(''))?",
//       options: ["True", "False", "None", "Error"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q7 */
//     {
//       id: 7,
//       qOrder: 7,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which operator is used for exponentiation?",
//       options: ["^", "", "//", "%%"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q8 */
//     {
//       id: 8,
//       qOrder: 8,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(len({'a':1,'b':2,'c':3}))?",
//       options: ["6", "3", "2", "1"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q9 */
//     {
//       id: 9,
//       qOrder: 9,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of the following is NOT a valid Python loop?",
//       options: ["for", "foreach", "while", "nested for"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q10 */
//     {
//       id: 10,
//       qOrder: 10,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What does the strip() function do?",
//       options: ["Removes spaces at both ends", "Removes characters randomly", "Splits a string", "Deletes the string"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q11 */
//     {
//       id: 11,
//       qOrder: 11,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(10//3)?",
//       options: ["3.33", "3", "4", "Error"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q12 */
//     {
//       id: 12,
//       qOrder: 12,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which function converts a value into an integer?",
//       options: ["str()", "int()", "float()", "char()"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q13 */
//     {
//       id: 13,
//       qOrder: 13,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of: print(type({1,2,3}))?",
//       options: ["<class 'list'>", "<class 'set'>", "<class 'tuple'>", "<class 'dict'>"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q14 */
//     {
//       id: 14,
//       qOrder: 14,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which statement is used to handle exceptions?",
//       options: ["except", "error", "try-except", "catch"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q15 */
//     {
//       id: 15,
//       qOrder: 15,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of the following is used to create an anonymous function?",
//       options: ["def", "lambda", "func", "anon"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q16 */
//     {
//       id: 16,
//       qOrder: 16,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the correct file extension for Python files?",
//       options: [".py", ".python", ".pyt", ".pt"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q17 */
//     {
//       id: 17,
//       qOrder: 17,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which function is used to display output in Python?",
//       options: ["write()", "printf()", "print()", "console.log()"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q18 */
//     {
//       id: 18,
//       qOrder: 18,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which data type is returned by input() function?",
//       options: ["int", "float", "str", "list"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q19 */
//     {
//       id: 19,
//       qOrder: 19,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of the following can be used to iterate over both index and value?",
//       options: ["items()", "keys()", "enumerate()", "range()"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q20 */
//     {
//       id: 20,
//       qOrder: 20,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which keyword is used to create a class?",
//       options: ["struct", "class", "object", "define class"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q21 */
//     {
//       id: 21,
//       qOrder: 21,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print('abc'[::-1])?",
//       options: ["abc", "cba", "bac", "Error"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q22 */
//     {
//       id: 22,
//       qOrder: 22,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of these is NOT a Python data type?",
//       options: ["list", "set", "vector", "tuple"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q23 */
//     {
//       id: 23,
//       qOrder: 23,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of the following opens a file for reading?",
//       options: ["open('file','r')", "open('file','w')", "open('file','x')", "open('file','rw')"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q24 */
//     {
//       id: 24,
//       qOrder: 24,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(2 == '2')?",
//       options: ["True", "False", "None", "Error"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q25 */
//     {
//       id: 25,
//       qOrder: 25,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is used to install external packages in Python?",
//       options: ["python get", "pip", "installpkg", "manager"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q26 */
//     {
//       id: 26,
//       qOrder: 26,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(3 > 2 and 2 > 5)?",
//       options: ["True", "False", "None", "Error"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q27 */
//     {
//       id: 27,
//       qOrder: 27,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which of these is used to define a block of code?",
//       options: ["{}", "()", "Indentation", "Brackets"],
//       correctAnswer: "c",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q28 */
//     {
//       id: 28,
//       qOrder: 28,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which module is used for generating random numbers?",
//       options: ["random", "math", "numbers", "statistics"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q29 */
//     {
//       id: 29,
//       qOrder: 29,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "What is the output of print(type(range(5)))?",
//       options: ["<class 'range'>", "<class 'list'>", "<class 'tuple'>", "<class 'generator'>"],
//       correctAnswer: "a",
//       marks: 3,
//       negativeMarks: -1
//     },

//     /* Q30 */
//     {
//       id: 30,
//       qOrder: 30,
//       section: "Python",
//       type: "MCQ_SINGLE",
//       text: "Which keyword is used to exit a loop?",
//       options: ["exit", "break", "stop", "quit"],
//       correctAnswer: "b",
//       marks: 3,
//       negativeMarks: -1
//     }

//   ];