import { Mock, Question } from '../type';

export const mock: Mock = {
  id: 10,
  title: "Python Programming MCQ Mock Test",
  category: "TECH",
  durationMin: 30,
  totalMarks: 90,
  questionCount: 30,
  description: "30 MCQs on Python programming fundamentals.",
  instructions: "Each question has one correct option.",

  sections: [
    { name: "Python", questionCount: 30, marks: 90 }
  ],
};

export const questions: Question[] = [

  {
    id: 1,
    qOrder: 1,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which function is used to output data in Python?",
    options: ["echo()", "printf()", "print()", "display()"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "print() is the correct function used to display output."
  },

  {
    id: 2,
    qOrder: 2,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which function returns the number of items in a list?",
    options: ["size()", "len()", "count()", "length()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "len() returns the total number of elements in a list."
  },

  {
    id: 3,
    qOrder: 3,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which method adds an element to the end of a list?",
    options: ["push()", "append()", "add()", "insert()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "append() adds a new item to the end of a list."
  },

  {
    id: 4,
    qOrder: 4,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which keyword is used to define a function?",
    options: ["func", "define", "def", "function"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Functions in Python are defined using the 'def' keyword."
  },

  {
    id: 5,
    qOrder: 5,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "What is the output of range(5)?",
    options: ["0 to 5", "1 to 5", "0 to 4", "5 values starting from 1"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "range(5) generates 0,1,2,3,4."
  },

  {
    id: 6,
    qOrder: 6,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which datatype stores key-value pairs?",
    options: ["list", "tuple", "dictionary", "set"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "A dictionary stores data as key-value pairs."
  },

  {
    id: 7,
    qOrder: 7,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which operator checks value equality?",
    options: ["is", "==", "equals()", "==="],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "== checks if two values are equal."
  },

  {
    id: 8,
    qOrder: 8,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which keyword exits a loop immediately?",
    options: ["continue", "stop", "exit", "break"],
    correctAnswer: "d",
    marks: 3,
    negativeMarks: -1,
    explanation: "break stops the entire loop immediately."
  },

  {
    id: 9,
    qOrder: 9,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which statement handles errors in Python?",
    options: ["try-except", "catch", "handler", "trap"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "try-except is used for error handling in Python."
  },

  {
    id: 10,
    qOrder: 10,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which module must be imported to use mathematical functions?",
    options: ["math", "cmath", "numbers", "random"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "The math module provides mathematical functions."
  },

  {
    id: 11,
    qOrder: 11,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Python blocks are defined by:",
    options: ["Braces {}", "Semicolons", "Indentation", "Parentheses"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Python uses indentation to define code blocks."
  },

  {
    id: 12,
    qOrder: 12,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which datatype is immutable?",
    options: ["list", "tuple", "set", "dictionary"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Tuples cannot be changed after creation."
  },

  {
    id: 13,
    qOrder: 13,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "list[1:4] returns elements from index:",
    options: ["1 to 4", "1 to 3", "0 to 3", "2 to 4"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Slicing stops one step before the end index."
  },

  {
    id: 14,
    qOrder: 14,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which datatype represents decimal values?",
    options: ["float", "bool", "int", "string"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "float stores decimal numbers."
  },

  {
    id: 15,
    qOrder: 15,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which keyword creates an anonymous function?",
    options: ["anon", "lambda", "func", "mini"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "lambda creates small, inline functions."
  },

  {
    id: 16,
    qOrder: 16,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which function opens a file?",
    options: ["file()", "open()", "read()", "openfile()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "open() is used for file handling."
  },

  {
    id: 17,
    qOrder: 17,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which keyword returns a value from a function?",
    options: ["exit", "yield", "return", "give"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "return sends output back to the caller."
  },

  {
    id: 18,
    qOrder: 18,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "List comprehension is used for:",
    options: ["Creating loops", "Short list creation", "Sorting lists", "Filtering data only"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "List comprehension is a compact way to create lists using loops."
  },

  {
    id: 19,
    qOrder: 19,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "What is the value of None?",
    options: ["0", "Empty string", "Null equivalent", "False"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "None represents the absence of a value."
  },

  {
    id: 20,
    qOrder: 20,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Strings in Python are:",
    options: ["Mutable", "Immutable", "Numeric", "Logical"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "String content cannot be modified directly."
  },

  {
    id: 21,
    qOrder: 21,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which function gives index + value while iterating?",
    options: ["items()", "enumerate()", "zip()", "index()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "enumerate() returns both index and value."
  },

  {
    id: 22,
    qOrder: 22,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which method applies a function to each list element?",
    options: ["apply()", "map()", "reduce()", "lambda()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "map() applies a function to each item of an iterable."
  },

  {
    id: 23,
    qOrder: 23,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which keyword defines a class?",
    options: ["object", "define", "class", "struct"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Classes in Python begin with the 'class' keyword."
  },

  {
    id: 24,
    qOrder: 24,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "super() is used for:",
    options: ["Calling child methods", "Memory allocation", "Calling parent class methods", "Closing program"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "super() accesses parent class properties/methods."
  },

  {
    id: 25,
    qOrder: 25,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "*args is used for:",
    options: ["Keyword arguments", "Storing unlimited positional arguments", "Defining classes", "Modules"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "*args collects variable-length positional arguments."
  },

  {
    id: 26,
    qOrder: 26,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "Which tool installs Python packages?",
    options: ["npm", "pip", "conda", "install"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "pip is Python's default package installer."
  },

  {
    id: 27,
    qOrder: 27,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "_init_ is:",
    options: ["Destructor", "Constructor", "Iterator", "Operator"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "_init_ runs automatically when an object is created."
  },

  {
    id: 28,
    qOrder: 28,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "json.loads() converts:",
    options: ["Python → JSON", "JSON → Python object", "String → CSV", "Dict → CSV"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "loads() converts JSON string into Python objects."
  },

  {
    id: 29,
    qOrder: 29,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "The pass statement is used to:",
    options: ["Break loop", "Do nothing", "Stop program", "Skip import"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "pass does nothing and is used as a placeholder."
  },

  {
    id: 30,
    qOrder: 30,
    mockId: 10,
    section: "Python",
    type: "MCQ_SINGLE",
    text: "random.randint(a, b) returns:",
    options: ["Float", "Value between a & b inclusive", "Value > b", "Only a"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "randint() returns a random integer including both limits."
  }

];
