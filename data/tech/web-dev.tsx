import { Mock, Question } from "../type";

export const mock: Mock = {
  id: 5,
  title: "Web Development MCQ Mock Test",
  category: "TECH",
  durationMin: 50,
  totalMarks: 150,
  questionCount: 50,
  description: "50 MCQs covering HTML, CSS, JavaScript, and Next.js concepts.",
  instructions: "Choose the correct option. Short explanations provided.",

  sections: [
    { name: "Web Development", questionCount: 50, marks: 150 }
  ],
}

export const questions: Question[] = [

  /* ---------------- HTML (1–12) ---------------- */

  {
    id: 1,
    qOrder: 1,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<p>"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "<a> tag is used to create clickable links."
  },

  {
    id: 2,
    qOrder: 2,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Which tag creates the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "<h1> is the largest heading level."
  },

  {
    id: 3,
    qOrder: 3,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Which attribute provides alternate text for images?",
    options: ["title", "alt", "src", "caption"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "alt describes images for accessibility and SEO."
  },

  {
    id: 4,
    qOrder: 4,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Tag used to define a table row:",
    options: ["<td>", "<row>", "<tr>", "<th>"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "<tr> defines rows inside a table."
  },

  {
    id: 5,
    qOrder: 5,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "HTML stands for:",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Markup Language",
      "Hyperlink Type Machine Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "HTML is the standard markup for web pages."
  },

  {
    id: 6,
    qOrder: 6,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Tag for embedding a video:",
    options: ["<media>", "<movie>", "<video>", "<player>"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "<video> embeds video content in HTML5."
  },

  {
    id: 7,
    qOrder: 7,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Which tag defines navigation links?",
    options: ["<nav>", "<menu>", "<navigate>", "<path>"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "<nav> groups navigation links."
  },

  {
    id: 8,
    qOrder: 8,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Which tag defines a form?",
    options: ["<form>", "<input>", "<submit>", "<box>"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "<form> wraps user input controls."
  },

  {
    id: 9,
    qOrder: 9,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "HTML checkbox is created using:",
    options: ["<checkbox>", "<input type='checkbox'>", "<box>", "<mark>"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Checkbox uses input type='checkbox'."
  },

  {
    id: 10,
    qOrder: 10,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "HTML comments syntax:",
    options: ["// comment", "<-- comment -->", "<!-- comment -->", "/* comment */"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "HTML comments begin with <!-- and end with -->."
  },

  {
    id: 11,
    qOrder: 11,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Tag used for bold text (semantic):",
    options: ["<b>", "<strong>", "<mark>", "<em>"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "<strong> indicates important text."
  },

  {
    id: 12,
    qOrder: 12,
    mockId: 5,
    section: "HTML",
    type: "MCQ_SINGLE",
    text: "Unique identifier attribute:",
    options: ["class", "name", "id", "style"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "id must be unique inside a document."
  },


  /* ---------------- CSS (13–23) ---------------- */

  {
    id: 13,
    qOrder: 13,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "CSS property for text color:",
    options: ["font-color", "color", "text-style", "background"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "color sets the font color."
  },

  {
    id: 14,
    qOrder: 14,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "CSS selector for class:",
    options: [".classname", "#classname", "*classname", "class.classname"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "Classes are selected with '.className'."
  },

  {
    id: 15,
    qOrder: 15,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "CSS property that adjusts text size:",
    options: ["font-size", "text-size", "size", "font-weight"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "font-size sets the size of text."
  },

  {
    id: 16,
    qOrder: 16,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "CSS property for background color:",
    options: ["bgcolor", "background-color", "fill", "color"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "background-color fills the element background."
  },

  {
    id: 17,
    qOrder: 17,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "Relative unit in CSS:",
    options: ["px", "cm", "mm", "em"],
    correctAnswer: "d",
    marks: 3,
    negativeMarks: -1,
    explanation: "em scales relative to parent font size."
  },

  {
    id: 18,
    qOrder: 18,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "Property that hides an element but keeps space:",
    options: ["display: none", "visibility: hidden", "opacity: 0", "hidden"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "visibility: hidden hides element but keeps layout space."
  },

  {
    id: 19,
    qOrder: 19,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "CSS property for width:",
    options: ["height", "width", "size", "padding"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "width sets horizontal size."
  },

  {
    id: 20,
    qOrder: 20,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "Flex direction is controlled using:",
    options: ["flex-type", "flex-direction", "direction", "layout-direction"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "flex-direction defines row or column layout."
  },

  {
    id: 21,
    qOrder: 21,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "Padding modifies:",
    options: ["Outer space", "Inner spacing", "Border size", "Text size"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Padding is internal spacing of an element."
  },

  {
    id: 22,
    qOrder: 22,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "CSS property to make text bold:",
    options: ["text-style", "font-weight", "bold()", "face-weight"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "font-weight controls text thickness."
  },

  {
    id: 23,
    qOrder: 23,
    mockId: 5,
    section: "CSS",
    type: "MCQ_SINGLE",
    text: "Correct syntax to import external CSS:",
    options: [
      "<css src='style.css'>",
      "@import url('style.css')",
      "<style link='style.css'>",
      "css:import('style.css')"
    ],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "@import loads external stylesheets."
  },


  /* ---------------- JavaScript (24–38) ---------------- */

  {
    id: 24,
    qOrder: 24,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Which keyword declares a variable?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "d",
    marks: 3,
    negativeMarks: -1,
    explanation: "All three declare variables in JS."
  },

  {
    id: 25,
    qOrder: 25,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "typeof null returns:",
    options: ["null", "undefined", "object", "string"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "typeof null is a known JS bug returning object."
  },

  {
    id: 26,
    qOrder: 26,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Operator comparing VALUE & TYPE:",
    options: ["==", "!=", "=", "==="],
    correctAnswer: "d",
    marks: 3,
    negativeMarks: -1,
    explanation: "=== checks strict equality."
  },

  {
    id: 27,
    qOrder: 27,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "JSON string → JS object:",
    options: ["JSON.parse()", "JSON.stringify()", "convert()", "objectify()"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "JSON.parse() converts JSON string to JS object."
  },

  {
    id: 28,
    qOrder: 28,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Arrow function syntax:",
    options: ["function => {}", "() => {}", "<=> {}", "func->{}"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "() => {} creates an arrow function."
  },

  {
    id: 29,
    qOrder: 29,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Array method removing last element:",
    options: ["shift()", "pop()", "push()", "delete()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "pop() removes last item."
  },

  {
    id: 30,
    qOrder: 30,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "JavaScript is:",
    options: ["Compiled", "Interpreted", "Both", "None"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "JS is interpreted (JIT optimized)."
  },

  {
    id: 31,
    qOrder: 31,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Keyword to break loop execution:",
    options: ["stop", "exit", "break", "return"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "break stops loop immediately."
  },

  {
    id: 32,
    qOrder: 32,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Method that adds element at beginning of array:",
    options: ["push()", "shift()", "unshift()", "addStart()"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "unshift() adds element to start."
  },

  {
    id: 33,
    qOrder: 33,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Root object in browser JavaScript:",
    options: ["globalThis", "window", "document", "Object"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "window is the global browser object."
  },

  {
    id: 34,
    qOrder: 34,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Console logging syntax:",
    options: ["console.print()", "console.log()", "log()", "print()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "console.log() prints output."
  },

  {
    id: 35,
    qOrder: 35,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "NaN stands for:",
    options: ["Not a Number", "New number", "No number", "Negative number"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "NaN represents invalid numeric value."
  },

  {
    id: 36,
    qOrder: 36,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Method used to filter array elements:",
    options: ["select()", "filter()", "match()", "search()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "filter() returns elements meeting condition."
  },

  {
    id: 37,
    qOrder: 37,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "Which object handles time events?",
    options: ["timer", "window", "event", "document"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "setTimeout is under window object."
  },

  {
    id: 38,
    qOrder: 38,
    mockId: 5,
    section: "JS",
    type: "MCQ_SINGLE",
    text: "typeof [] returns:",
    options: ["array", "object", "list", "collection"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "Arrays are objects in JS."
  },


  /* ---------------- NEXT.JS (39–50) ---------------- */

  {
    id: 39,
    qOrder: 39,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Next.js is built on top of:",
    options: ["Angular", "Vue", "React", "Svelte"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Next.js is a React framework."
  },

  {
    id: 40,
    qOrder: 40,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Next.js supports which rendering types?",
    options: ["CSR", "SSR", "SSG", "All of these"],
    correctAnswer: "d",
    marks: 3,
    negativeMarks: -1,
    explanation: "Next.js supports all major rendering strategies."
  },

  {
    id: 41,
    qOrder: 41,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "API routes folder in Next.js:",
    options: ["src/api", "api", "pages/api", "server"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "API routes live inside pages/api."
  },

  {
    id: 42,
    qOrder: 42,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Next.js config file:",
    options: ["next.json", "next.config.js", "config.js", "nextfile"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "All Next.js project settings go in next.config.js."
  },

  {
    id: 43,
    qOrder: 43,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Build-time data fetching uses:",
    options: ["getServerSideProps", "getStaticProps", "useEffect", "fetch()"],
    correctAnswer: "b",
    marks: 3,
    negativeMarks: -1,
    explanation: "getStaticProps runs at build time."
  },

  {
    id: 44,
    qOrder: 44,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Server-side rendering uses:",
    options: ["useEffect", "useMemo", "getServerSideProps", "router"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "SSR uses getServerSideProps."
  },

  {
    id: 45,
    qOrder: 45,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Next.js uses which routing system?",
    options: ["API routing", "Manual routing", "File-system routing", "Config routing"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "Routes are created automatically from file structure."
  },

  {
    id: 46,
    qOrder: 46,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Which folder stores UI pages?",
    options: ["components", "public", "pages", "views"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "pages folder defines all webpage routes."
  },

  {
    id: 47,
    qOrder: 47,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Does Next.js support TypeScript?",
    options: ["Yes", "No", "Only in v12+", "Only client side"],
    correctAnswer: "a",
    marks: 3,
    negativeMarks: -1,
    explanation: "Next.js fully supports TypeScript."
  },

  {
    id: 48,
    qOrder: 48,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Command to start Next.js dev server:",
    options: ["npm next", "npm start", "npm run dev", "next server"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "npm run dev starts local Next.js dev server."
  },

  {
    id: 49,
    qOrder: 49,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Static images are stored inside:",
    options: ["static", "img", "public", "assets"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "public folder serves static files."
  },

  {
    id: 50,
    qOrder: 50,
    mockId: 5,
    section: "NEXTJS",
    type: "MCQ_SINGLE",
    text: "Which feature enables partial rebuilds in Next.js?",
    options: ["Caching", "SSG", "ISR", "Streaming"],
    correctAnswer: "c",
    marks: 3,
    negativeMarks: -1,
    explanation: "ISR enables incremental static regeneration."
  }

];
