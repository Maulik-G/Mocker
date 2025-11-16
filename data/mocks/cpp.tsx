import { Mock, Question } from '../type';

export const mock: Mock = {
  id: 11,
  title: "C++ Programming MCQ Mock Test",
  category: "TECH",
  durationMin: 30,
  totalMarks: 90,
  questionCount: 30,
  description: "30 MCQs covering core C++ concepts, OOP, pointers, STL.",
  instructions: "Choose the correct option. Short explanations included.",

  sections: [
    { name: "C++", questionCount: 30, marks: 90 }
  ],
};
 export const questions: Question[] = [

    {
      id: 1,
      qOrder: 1,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which extension is correct for C++ files?",
      options: [".cpp", ".cxx", ".c++", "All of the above"],
      correctAnswer: "d",
      marks: 3,
      negativeMarks: -1,
      explanation: "C++ files commonly use .cpp, .cxx, and .c++."
    },

    {
      id: 2,
      qOrder: 2,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which syntax correctly creates an object?",
      options: ["class obj;", "object obj;", "MyClass obj;", "new obj;"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Objects are created using ClassName objectName."
    },

    {
      id: 3,
      qOrder: 3,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Function/operator with same name but different parameters refers to:",
      options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Compile-time polymorphism enables function overloading."
    },

    {
      id: 4,
      qOrder: 4,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "sizeof(char) is:",
      options: ["4 bytes", "1 byte", "2 bytes", "Depends on system"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "char always occupies 1 byte."
    },

    {
      id: 5,
      qOrder: 5,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Header file for cout and cin:",
      options: ["<stdio.h>", "<iostream>", "<stream>", "<input>"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "iostream defines cout, cin."
    },

    {
      id: 6,
      qOrder: 6,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "OOP concept bundling data + functions is:",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Encapsulation binds data and methods together."
    },

    {
      id: 7,
      qOrder: 7,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Syntax for reference variable:",
      options: ["int* a", "int& a", "int a&", "ref a"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "& binds a reference to another variable."
    },

    {
      id: 8,
      qOrder: 8,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which operator cannot be overloaded?",
      options: ["+", "=", "::", "[]"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Scope resolution (::) cannot be overloaded."
    },

    {
      id: 9,
      qOrder: 9,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Memory allocation operator in C++ is:",
      options: ["malloc", "allocate", "new", "calloc"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "new allocates memory in C++."
    },

    {
      id: 10,
      qOrder: 10,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Keyword used for inheritance:",
      options: ["extends", "inherits", "public", "childof"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "public/protected/private are used for inheritance."
    },

    {
      id: 11,
      qOrder: 11,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "sizeof(int*) in 64-bit system:",
      options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Pointers are 8 bytes on a 64-bit system."
    },

    {
      id: 12,
      qOrder: 12,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Default access specifier in class is:",
      options: ["public", "private", "protected", "global"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Members are private by default in a class."
    },

    {
      id: 13,
      qOrder: 13,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which is NOT a C++ loop?",
      options: ["for", "while", "do-while", "loop"],
      correctAnswer: "d",
      marks: 3,
      negativeMarks: -1,
      explanation: "There is no 'loop' keyword in C++."
    },

    {
      id: 14,
      qOrder: 14,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which keyword defines a constant?",
      options: ["static", "const", "constant", "final"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "const makes a variable unmodifiable."
    },

    {
      id: 15,
      qOrder: 15,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which STL container is LIFO?",
      options: ["queue", "stack", "vector", "map"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Stack follows last-in-first-out."
    },

    {
      id: 16,
      qOrder: 16,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which frees memory allocated by new?",
      options: ["free()", "delete", "destroy()", "erase()"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "delete frees memory allocated with new."
    },

    {
      id: 17,
      qOrder: 17,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "cout << (5/2) outputs:",
      options: ["2.5", "2", "2.0", "Error"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Integer division 5/2 gives 2."
    },

    {
      id: 18,
      qOrder: 18,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Valid C++ string initialization:",
      options: ["string s = 'abc';", "string s = abc;", "string s = \"abc\";", "str s = abc;"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Double quotes are required for strings."
    },

    {
      id: 19,
      qOrder: 19,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which function runs automatically when object is created?",
      options: ["destructor", "constructor", "init()", "starter()"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Constructor initializes objects at creation."
    },

    {
      id: 20,
      qOrder: 20,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Scope resolution operator is:",
      options: ["->", "::", ".", ":"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: ":: accesses global/class members."
    },

    {
      id: 21,
      qOrder: 21,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which feature allows same function name?",
      options: ["Overloading", "Overriding", "Inlining", "Binding"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "Function overloading uses same name different parameters."
    },

    {
      id: 22,
      qOrder: 22,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Keyword for exception handling:",
      options: ["handle", "error", "try", "trap"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Exceptions begin with try block."
    },

    {
      id: 23,
      qOrder: 23,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "cout << (true + true) gives:",
      options: ["true", "false", "2", "1"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "true is 1, so 1+1 = 2."
    },

    {
      id: 24,
      qOrder: 24,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Keyword for templates:",
      options: ["pattern", "template", "typename", "model"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Templates are created using 'template'."
    },

    {
      id: 25,
      qOrder: 25,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which is a valid STL container?",
      options: ["arraylist", "vector", "linkedhash", "tree"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "vector is a standard STL container."
    },

    {
      id: 26,
      qOrder: 26,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which operator accesses pointer object members?",
      options: [".", "->", "::", "&"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Pointer member access uses ->."
    },

    {
      id: 27,
      qOrder: 27,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "The 'virtual' keyword enables:",
      options: ["Early binding", "Dynamic dispatch", "Static linking", "Overloading"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "virtual enables runtime polymorphism."
    },

    {
      id: 28,
      qOrder: 28,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Which allocates array memory?",
      options: ["new", "new[]", "malloc", "array_new"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "new[] allocates array dynamically."
    },

    {
      id: 29,
      qOrder: 29,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Destructor begins with:",
      options: ["!", "~", "@", "#"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Destructor syntax is ~ClassName."
    },

    {
      id: 30,
      qOrder: 30,
      mockId: 11,
      section: "C++",
      type: "MCQ_SINGLE",
      text: "Keyword that prevents modification:",
      options: ["const", "static", "final", "protect"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "const defines read-only data."
    }

    ];
