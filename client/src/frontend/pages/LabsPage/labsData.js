import { ASSETS } from "../../../shared/assets.js";
import { APP_ROUTES } from "../../../routes/paths.js";

const beginnerModules = (titles) =>
  titles.map((title, index) => ({
    id: index + 1,
    title: title.name,
    description: title.description,
    lessons: title.lessons,
    difficulty: "Beginner",
    icon: title.icon,
  }));

const pythonModules = beginnerModules([
  {
    name: "Getting Started with Python",
    description: "Install Python, write your first script, and understand basic syntax.",
    lessons: 8,
    icon: "Code2",
  },
  {
    name: "Variables and Data Types",
    description: "Work with numbers, strings, booleans, and type conversions.",
    lessons: 10,
    icon: "Type",
  },
  {
    name: "Operators and Expressions",
    description: "Use arithmetic, comparison, and logical operators in real examples.",
    lessons: 7,
    icon: "Calculator",
  },
  {
    name: "Conditional Statements",
    description: "Control decisions using if, elif, else, and nested conditions.",
    lessons: 9,
    icon: "GitBranch",
  },
  {
    name: "Loops and Iteration",
    description: "Master for loops, while loops, range, break, and continue.",
    lessons: 8,
    icon: "RefreshCw",
  },
  {
    name: "Lists, Tuples, and Sets",
    description: "Store collections, access values, and perform useful operations.",
    lessons: 9,
    icon: "List",
  },
  {
    name: "Dictionaries",
    description: "Use key-value data structures to build smarter programs.",
    lessons: 7,
    icon: "BookMarked",
  },
  {
    name: "Functions and Arguments",
    description: "Create reusable functions, pass parameters, and return values.",
    lessons: 10,
    icon: "Boxes",
  },
  {
    name: "File Handling Basics",
    description: "Read and write files, handle paths, and manage simple data.",
    lessons: 6,
    icon: "FileText",
  },
  {
    name: "Mini Projects",
    description: "Apply everything you learned in short, practical coding projects.",
    lessons: 5,
    icon: "Rocket",
  },
]);

const javaModules = beginnerModules([
  {
    name: "Getting Started with Java",
    description: "Set up Java, write Hello World, and learn the project structure.",
    lessons: 8,
    icon: "Coffee",
  },
  {
    name: "Variables and Types",
    description: "Understand primitives, strings, and type casting.",
    lessons: 9,
    icon: "Type",
  },
  {
    name: "Control Flow",
    description: "Use if/else, switch, and loops to control program flow.",
    lessons: 8,
    icon: "GitBranch",
  },
  {
    name: "Methods and Classes",
    description: "Create methods, classes, and simple object-oriented programs.",
    lessons: 10,
    icon: "Boxes",
  },
  {
    name: "Arrays and Collections",
    description: "Store and process data with arrays and basic collections.",
    lessons: 8,
    icon: "List",
  },
  {
    name: "OOP Essentials",
    description: "Learn encapsulation, inheritance, and polymorphism.",
    lessons: 9,
    icon: "Layers",
  },
  {
    name: "Exception Handling",
    description: "Catch errors safely with try, catch, and finally.",
    lessons: 6,
    icon: "Shield",
  },
  {
    name: "Java Mini Projects",
    description: "Build small apps that combine core Java skills.",
    lessons: 5,
    icon: "Rocket",
  },
]);

const cModules = beginnerModules([
  {
    name: "Getting Started with C",
    description: "Compile your first program and understand the C toolchain.",
    lessons: 7,
    icon: "Terminal",
  },
  {
    name: "Variables and Memory",
    description: "Learn data types, sizeof, and how memory works in C.",
    lessons: 8,
    icon: "Cpu",
  },
  {
    name: "Operators and I/O",
    description: "Use printf, scanf, and operators in practical programs.",
    lessons: 7,
    icon: "Keyboard",
  },
  {
    name: "Conditionals and Loops",
    description: "Control execution with if, switch, for, and while.",
    lessons: 8,
    icon: "RefreshCw",
  },
  {
    name: "Functions",
    description: "Write reusable functions and understand call stacks.",
    lessons: 7,
    icon: "Boxes",
  },
  {
    name: "Arrays and Strings",
    description: "Work with arrays, character arrays, and string helpers.",
    lessons: 9,
    icon: "List",
  },
  {
    name: "Pointers Basics",
    description: "Understand addresses, dereferencing, and pointer arithmetic.",
    lessons: 10,
    icon: "MapPin",
  },
  {
    name: "C Mini Projects",
    description: "Build small tools that reinforce core C concepts.",
    lessons: 5,
    icon: "Rocket",
  },
]);

const dsaModules = beginnerModules([
  {
    name: "Complexity Basics",
    description: "Learn Big-O, time, and space trade-offs for algorithms.",
    lessons: 6,
    icon: "TrendingUp",
  },
  {
    name: "Arrays and Searching",
    description: "Master linear search, binary search, and array patterns.",
    lessons: 8,
    icon: "Search",
  },
  {
    name: "Sorting Essentials",
    description: "Implement and compare common sorting algorithms.",
    lessons: 8,
    icon: "ArrowUpDown",
  },
  {
    name: "Stacks and Queues",
    description: "Solve problems with LIFO and FIFO structures.",
    lessons: 7,
    icon: "Layers",
  },
  {
    name: "Linked Lists",
    description: "Traverse, insert, and reverse linked list structures.",
    lessons: 8,
    icon: "Link2",
  },
  {
    name: "Trees Intro",
    description: "Understand binary trees, traversal, and basic recursion.",
    lessons: 9,
    icon: "Network",
  },
  {
    name: "Hashing",
    description: "Use hash maps for fast lookups and counting problems.",
    lessons: 7,
    icon: "Hash",
  },
  {
    name: "Arena Challenges",
    description: "Compete through progressive DSA battle challenges.",
    lessons: 10,
    icon: "Swords",
  },
]);

const codecoreModules = beginnerModules([
  {
    name: "Git Fundamentals",
    description: "Clone, commit, branch, and push with confidence.",
    lessons: 8,
    icon: "GitBranch",
  },
  {
    name: "Terminal Fluency",
    description: "Navigate filesystems and run everyday developer commands.",
    lessons: 7,
    icon: "Terminal",
  },
  {
    name: "Debugging Mindset",
    description: "Read errors, isolate bugs, and fix issues faster.",
    lessons: 6,
    icon: "Bug",
  },
  {
    name: "Problem Solving Patterns",
    description: "Break problems down and write cleaner solutions.",
    lessons: 8,
    icon: "Puzzle",
  },
  {
    name: "APIs and JSON",
    description: "Fetch data, parse JSON, and handle simple HTTP flows.",
    lessons: 7,
    icon: "Globe",
  },
  {
    name: "Project Scaffolding",
    description: "Structure small projects like a real engineering team.",
    lessons: 6,
    icon: "FolderTree",
  },
]);

const defaultLevels = (moduleTitle) => [
  { id: 1, title: `${moduleTitle.split(" ")[0]} Warm-up`, xp: 50, status: "completed" },
  { id: 2, title: "Core Practice", xp: 60, status: "active" },
  { id: 3, title: "Challenge Round", xp: 70, status: "locked" },
  { id: 4, title: "Boss Level", xp: 90, status: "locked" },
];

const pythonModule1Levels = [
  { id: 1, title: "Print It Out", xp: 50, status: "completed" },
  { id: 2, title: "Comments in Python", xp: 60, status: "active" },
  { id: 3, title: "Simple Calculator", xp: 70, status: "locked" },
  { id: 4, title: "First Script Challenge", xp: 80, status: "locked" },
];

export const LABS = Object.freeze({
  python: {
    slug: "python",
    name: "Python Lab",
    badge: "PYTHON LAB",
    headline: "10 Beginner Python Modules",
    description: "Learn step by step through interactive cards and start coding with confidence.",
    image: ASSETS.campus.python,
    trackSlug: "python",
    modules: pythonModules,
    getLevels: (moduleId) => {
      const module = pythonModules.find((item) => item.id === Number(moduleId));
      if (!module) return defaultLevels("Python");
      if (module.id === 1) return pythonModule1Levels;
      return defaultLevels(module.title);
    },
  },
  java: {
    slug: "java",
    name: "Java Lab",
    badge: "JAVA LAB",
    headline: "8 Beginner Java Modules",
    description: "Build Java foundations with clear modules and hands-on practice.",
    image: ASSETS.campus.java,
    trackSlug: "java",
    modules: javaModules,
    getLevels: (moduleId) => {
      const module = javaModules.find((item) => item.id === Number(moduleId));
      return defaultLevels(module?.title || "Java");
    },
  },
  c: {
    slug: "c",
    name: "C Program Lab",
    badge: "C PROGRAM LAB",
    headline: "8 Beginner C Modules",
    description: "Learn C from the ground up with memory, pointers, and practical projects.",
    image: ASSETS.campus.c,
    trackSlug: "c",
    modules: cModules,
    getLevels: (moduleId) => {
      const module = cModules.find((item) => item.id === Number(moduleId));
      return defaultLevels(module?.title || "C");
    },
  },
  dsa: {
    slug: "dsa",
    name: "Battle Arena",
    badge: "DATA STRUCTURE",
    headline: "8 DSA Battle Modules",
    description: "Train data structures and algorithms through progressive arena challenges.",
    image: ASSETS.campus.battle,
    trackSlug: "dsa",
    modules: dsaModules,
    getLevels: (moduleId) => {
      const module = dsaModules.find((item) => item.id === Number(moduleId));
      return defaultLevels(module?.title || "DSA");
    },
  },
  codecore: {
    slug: "codecore",
    name: "Codecore Lab",
    badge: "CODECORE LAB",
    headline: "6 Core Developer Modules",
    description: "Level up Git, debugging, and problem-solving for everyday coding work.",
    image: ASSETS.campus.codecore,
    trackSlug: null,
    modules: codecoreModules,
    getLevels: (moduleId) => {
      const module = codecoreModules.find((item) => item.id === Number(moduleId));
      return defaultLevels(module?.title || "Codecore");
    },
  },
  scorecard: {
    slug: "scorecard",
    name: "Scorecard Tower",
    badge: "SCORECARD",
    headline: "Track Your Rank",
    description: "Check leaderboards and ranking rewards from the Scorecard Tower.",
    image: ASSETS.campus.scorecard,
    externalPath: APP_ROUTES.frontendLeaderboard({ scope: "global" }),
    modules: [],
    getLevels: () => [],
  },
});

export function getLab(slug) {
  return LABS[slug] || null;
}

export function getLabModule(labSlug, moduleId) {
  const lab = getLab(labSlug);
  if (!lab) return null;
  return lab.modules.find((module) => module.id === Number(moduleId)) || null;
}
