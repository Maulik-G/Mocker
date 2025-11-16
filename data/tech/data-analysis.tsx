import { Mock, Question } from '../type';

export const mock: Mock = {
  id: 13,
  title: "Data Analysis",
  category: "TECH",
  durationMin: 55,
  totalMarks: 150,
  questionCount: 50,
  description: "50 MCQs covering Data Analysis, Pandas, NumPy, Visualization, and MySQL.",
  instructions: "Choose the correct option. Short explanations included.",

  sections: [
    { name: "Data Analysis", questionCount: 50, marks: 150 }
  ],
};

export const questions: Question[] = [

    /* ----------- DATA ANALYSIS (1–30) ----------- */

    {
      id: 1,
      qOrder: 1,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which library is mainly used for data manipulation in Python?",
      options: ["NumPy", "Pandas", "Matplotlib", "SciPy"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Pandas provides DataFrame and Series for manipulation."
    },

    {
      id: 2,
      qOrder: 2,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which function reads a CSV in Pandas?",
      options: ["pd.load()", "pd.csv()", "pd.read_csv()", "pd.read()"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "read_csv() loads CSV files into DataFrames."
    },

    {
      id: 3,
      qOrder: 3,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "What is the output type of df['col']?",
      options: ["DataFrame", "Series", "List", "Array"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Selecting a single column returns a Series."
    },

    {
      id: 4,
      qOrder: 4,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which Pandas method gives summary statistics?",
      options: ["info()", "stats()", "summary()", "describe()"],
      correctAnswer: "d",
      marks: 3,
      negativeMarks: -1,
      explanation: "describe() shows mean, median, quartiles."
    },

    {
      id: 5,
      qOrder: 5,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which NumPy function creates an array?",
      options: ["np.array()", "np.arr()", "np.create()", "np.make()"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "array() converts lists to NumPy arrays."
    },

    {
      id: 6,
      qOrder: 6,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "df.head(3) returns:",
      options: ["Last 3 rows", "First 3 rows", "Random rows", "Middle rows"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "head() shows top rows."
    },

    {
      id: 7,
      qOrder: 7,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "To drop missing values, use:",
      options: ["remove()", "dropna()", "clean()", "fill()"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "dropna() removes rows or columns with NaNs."
    },

    {
      id: 8,
      qOrder: 8,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which visualization library does Pandas integrate with?",
      options: ["OpenCV", "seaborn", "matplotlib", "plotly"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Pandas uses matplotlib as backend."
    },

    {
      id: 9,
      qOrder: 9,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "df.iloc[0] selects:",
      options: ["First column", "First row", "Last row", "Entire DataFrame"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "iloc selects rows/columns by integer index."
    },

    {
      id: 10,
      qOrder: 10,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "What does df.shape return?",
      options: ["Column names", "Missing rows", "Dimensions", "Indexes"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "shape returns (rows, columns)."
    },

    {
      id: 11,
      qOrder: 11,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which is a numerical Python library?",
      options: ["TensorFlow", "NumPy", "Flask", "Django"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "NumPy supports fast numerical operations."
    },

    {
      id: 12,
      qOrder: 12,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which ML library is used for models?",
      options: ["scikit-learn", "Pandas", "NumPy", "Requests"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "sklearn provides machine learning algorithms."
    },

    {
      id: 13,
      qOrder: 13,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Heatmaps are commonly created using:",
      options: ["seaborn", "numpy", "pandas", "flask"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "Seaborn's heatmap() is widely used."
    },

    {
      id: 14,
      qOrder: 14,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "df.isnull().sum() helps in:",
      options: ["Removing duplicates", "Checking NaNs", "Filtering rows", "Sorting"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "It counts missing values per column."
    },

    {
      id: 15,
      qOrder: 15,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which function merges two DataFrames?",
      options: ["df.join()", "df.concat()", "pd.merge()", "All of these"],
      correctAnswer: "d",
      marks: 3,
      negativeMarks: -1,
      explanation: "All three merge/join DataFrames in different ways."
    },

    {
      id: 16,
      qOrder: 16,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which chart is best for category vs count?",
      options: ["Line chart", "Pie chart", "Bar chart", "Scatter"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Bar chart works best for frequency."
    },

    {
      id: 17,
      qOrder: 17,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Standard scaling means:",
      options: ["Normalize to 0–1", "Mean=0, SD=1", "Divide numbers", "Remove outliers"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "StandardScaler makes mean 0, std 1."
    },

    {
      id: 18,
      qOrder: 18,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which is a supervised algorithm?",
      options: ["K-means", "Linear Regression", "DBSCAN", "PCA"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Linear Regression uses labeled data."
    },

    {
      id: 19,
      qOrder: 19,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which function computes correlation?",
      options: ["df.var()", "df.mean()", "df.corr()", "df.relate()"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "corr() checks correlation between columns."
    },

    {
      id: 20,
      qOrder: 20,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which plot is best for outlier detection?",
      options: ["Line chart", "Box plot", "Pie chart", "Histogram"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Boxplots show whiskers + outliers."
    },

    {
      id: 21,
      qOrder: 21,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "One-hot encoding is used for:",
      options: ["Scaling numbers", "Encoding categories", "Removing NaN", "Plotting"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Converts categories to binary vectors."
    },

    {
      id: 22,
      qOrder: 22,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "train_test_split is part of:",
      options: ["NumPy", "Pandas", "sklearn.model_selection", "TensorFlow"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "train_test_split comes from sklearn."
    },

    {
      id: 23,
      qOrder: 23,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which chart shows distribution?",
      options: ["Scatter", "Histogram", "Bar", "Line"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Histogram visualizes distribution of values."
    },

    {
      id: 24,
      qOrder: 24,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "df.fillna(0) does what?",
      options: ["Deletes NaN", "Replaces NaN with 0", "Sorts rows", "Copies DataFrame"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "fillna() replaces missing values."
    },

    {
      id: 25,
      qOrder: 25,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which technique reduces dimensionality?",
      options: ["PCA", "SVM", "KNN", "Bagging"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "PCA reduces features via variance capture."
    },

    {
      id: 26,
      qOrder: 26,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Which algorithm is used for clustering?",
      options: ["Linear Regression", "Random Forest", "K-means", "Logistic Regression"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "K-means is an unsupervised clustering algorithm."
    },

    {
      id: 27,
      qOrder: 27,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Confusion matrix is used in:",
      options: ["Regression", "Image processing", "Classification", "Clustering"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "It evaluates classification performance."
    },

    {
      id: 28,
      qOrder: 28,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Numpy array dimension is called:",
      options: ["axis", "rank", "shape", "levels"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "NumPy uses axis to describe dimensions."
    },

    {
      id: 29,
      qOrder: 29,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "df.sort_values() is used to:",
      options: ["Sort rows", "Sort columns", "Remove duplicates", "Filter rows"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "sort_values() sorts rows based on a column."
    },

    {
      id: 30,
      qOrder: 30,
      mockId: 13,
      section: "Data Analysis",
      type: "MCQ_SINGLE",
      text: "Logistic regression predicts:",
      options: ["Numbers", "Categories", "Clusters", "Distances"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "Logistic regression outputs probability-based classes."
    },


    /* ----------- MYSQL (31–50) ----------- */

    {
      id: 31,
      qOrder: 31,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which command shows all databases?",
      options: ["SHOW DB;", "LIST DATABASES;", "SHOW DATABASES;", "DATABASE SHOW"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "SHOW DATABASES lists all databases."
    },

    {
      id: 32,
      qOrder: 32,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which SQL clause filters records?",
      options: ["FILTER", "WHERE", "SELECT", "GROUP"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "WHERE filters rows based on conditions."
    },

    {
      id: 33,
      qOrder: 33,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which keyword sorts results?",
      options: ["ORDER BY", "SORT", "ARRANGE", "ALIGN"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "ORDER BY sorts ascending/descending."
    },

    {
      id: 34,
      qOrder: 34,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which function counts rows?",
      options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "COUNT() counts number of rows."
    },

    {
      id: 35,
      qOrder: 35,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which joins return matching rows from both tables?",
      options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "INNER JOIN returns rows that match in both tables."
    },

    {
      id: 36,
      qOrder: 36,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Primary key must be:",
      options: ["Unique", "Not null", "Both", "Either"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "Primary key must be unique and NOT NULL."
    },

    {
      id: 37,
      qOrder: 37,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "DELETE removes:",
      options: ["Table", "Row data", "Database", "Column"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "DELETE removes rows, not structure."
    },

    {
      id: 38,
      qOrder: 38,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which creates a new table?",
      options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "INIT TABLE"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "CREATE TABLE defines a table schema."
    },

    {
      id: 39,
      qOrder: 39,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Default sorting order in MySQL:",
      options: ["ASC", "DESC", "RANDOM", "AUTO"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "ORDER BY sorts ascending unless specified."
    },

    {
      id: 40,
      qOrder: 40,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Wildcard in LIKE pattern:",
      options: ["#", "@", "%", "&"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "% matches multiple characters."
    },

    {
      id: 41,
      qOrder: 41,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which command updates records?",
      options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "UPDATE modifies row data."
    },

    {
      id: 42,
      qOrder: 42,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which aggregates numeric values?",
      options: ["SUM()", "JOIN()", "GROUP()", "COMBINE()"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "SUM() returns total numeric values."
    },

    {
      id: 43,
      qOrder: 43,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which group SQL results?",
      options: ["COLLECT", "GROUP BY", "SORT BY", "BIND"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "GROUP BY groups rows based on a column."
    },

    {
      id: 44,
      qOrder: 44,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "To remove a table:",
      options: ["DROP TABLE", "DELETE TABLE", "ERASE TABLE", "KILL TABLE"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "DROP removes the entire table structure."
    },

    {
      id: 45,
      qOrder: 45,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "FOREIGN KEY is used to:",
      options: ["Link tables", "Format columns", "Sort data", "Encrypt data"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "Foreign key connects related tables."
    },

    {
      id: 46,
      qOrder: 46,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "LIMIT is used to:",
      options: ["Restrict rows", "Restrict columns", "Restrict tables", "Restrict DB"],
      correctAnswer: "a",
      marks: 3,
      negativeMarks: -1,
      explanation: "LIMIT defines how many rows to return."
    },

    {
      id: 47,
      qOrder: 47,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which SQL keyword removes duplicate values?",
      options: ["CLEAR", "DISTINCT", "ONLY", "UNIQUE"],
      correctAnswer: "b",
      marks: 3,
      negativeMarks: -1,
      explanation: "DISTINCT filters duplicate rows."
    },

    {
      id: 48,
      qOrder: 48,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "SELECT * FROM users WHERE age BETWEEN 20 AND 30 means:",
      options: [
        "Age > 30",
        "Age < 20",
        "Age is 20 to 30 inclusive",
        "Age equals 25 only"
      ],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "BETWEEN includes both boundaries."
    },

    {
      id: 49,
      qOrder: 49,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "MySQL function for average:",
      options: ["MEAN()", "MID()", "AVG()", "AVERAGE()"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "AVG() computes average of numeric column."
    },

    {
      id: 50,
      qOrder: 50,
      mockId: 13,
      section: "MYSQL",
      type: "MCQ_SINGLE",
      text: "Which join returns all rows of both tables?",
      options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "RIGHT JOIN"],
      correctAnswer: "c",
      marks: 3,
      negativeMarks: -1,
      explanation: "FULL OUTER JOIN includes all rows from both tables."
    }

  ];