export type Resource = {
  id: string;
  title: string;
  type: 'eBook' | 'Video' | 'Quiz';
  category: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics' | 'History';
  description: string;
  imageUrl: string;
  aiHint: string;
};

export const resources: Resource[] = [
  { id: 'phy01', title: 'Concepts of Physics', type: 'eBook', category: 'Physics', description: 'Comprehensive guide to fundamental physics concepts.', imageUrl: 'https://placehold.co/600x400', aiHint: 'physics book' },
  { id: 'chem01', title: 'Organic Chemistry Explained', type: 'Video', category: 'Chemistry', description: 'A video series breaking down complex organic chemistry.', imageUrl: 'https://placehold.co/600x400', aiHint: 'chemistry lab' },
  { id: 'math01', title: 'Calculus Challenge', type: 'Quiz', category: 'Mathematics', description: 'Test your calculus skills with this interactive quiz.', imageUrl: 'https://placehold.co/600x400', aiHint: 'math problems' },
  { id: 'bio01', title: 'Introduction to Genetics', type: 'eBook', category: 'Biology', description: 'An introductory eBook on the principles of genetics.', imageUrl: 'https://placehold.co/600x400', aiHint: 'dna strand' },
  { id: 'hist01', title: 'Ancient Civilizations', type: 'Video', category: 'History', description: 'Explore the wonders of ancient civilizations in this documentary.', imageUrl: 'https://placehold.co/600x400', aiHint: 'ancient ruins' },
  { id: 'phy02', title: 'Quantum Mechanics Basics', type: 'Video', category: 'Physics', description: 'A beginner-friendly video on quantum mechanics.', imageUrl: 'https://placehold.co/600x400', aiHint: 'atom model' },
  { id: 'math02', title: 'Linear Algebra Fundamentals', type: 'eBook', category: 'Mathematics', description: 'Learn the basics of vectors, matrices, and linear transformations.', imageUrl: 'https://placehold.co/600x400', aiHint: 'algebra equations' },
  { id: 'chem02', title: 'The Periodic Table', type: 'Video', category: 'Chemistry', description: 'A deep dive into the elements of the periodic table.', imageUrl: 'https://placehold.co/600x400', aiHint: 'periodic table' },
  { id: 'bio02', title: 'Cell Biology Quiz', type: 'Quiz', category: 'Biology', description: 'Test your knowledge of cell structures and functions.', imageUrl: 'https://placehold.co/600x400', aiHint: 'microscope cell' },
];

export type Quiz = {
  id: string;
  title: string;
  subject: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  questionCount: number;
  imageUrl: string;
  aiHint: string;
  questions: {
    questionText: string;
    options: string[];
    correctAnswerIndex: number;
  }[];
};

export const quizzes: Quiz[] = [
  {
    id: 'math01',
    title: 'Calculus Challenge',
    subject: 'Mathematics',
    level: 'Intermediate',
    questionCount: 3,
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'mathematics chalkboard',
    questions: [
      { questionText: 'What is the derivative of x^2?', options: ['2x', 'x', 'x^3', '2'], correctAnswerIndex: 0 },
      { questionText: 'What is the integral of 1?', options: ['1', 'x', '0', 'x^2'], correctAnswerIndex: 1 },
      { questionText: 'What is the limit of (sin x)/x as x approaches 0?', options: ['0', '1', 'Infinity', 'Undefined'], correctAnswerIndex: 1 },
    ],
  },
  {
    id: 'phy01',
    title: 'Newtonian Physics',
    subject: 'Physics',
    level: 'Beginner',
    questionCount: 2,
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'apple gravity',
    questions: [
      { questionText: 'What is Newton\'s First Law about?', options: ['Action-Reaction', 'Force = mass * acceleration', 'Inertia', 'Gravity'], correctAnswerIndex: 2 },
      { questionText: 'Which unit measures force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correctAnswerIndex: 2 },
    ],
  },
  {
    id: 'chem01',
    title: 'Organic Chemistry Basics',
    subject: 'Chemistry',
    level: 'Beginner',
    questionCount: 3,
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'chemistry beakers',
    questions: [
      { questionText: 'What is the main element in organic compounds?', options: ['Oxygen', 'Hydrogen', 'Carbon', 'Nitrogen'], correctAnswerIndex: 2 },
      { questionText: 'Which of these is a functional group?', options: ['Alkane', 'Hydroxyl', 'Benzene', 'Molecule'], correctAnswerIndex: 1 },
      { questionText: 'What is the formula for methane?', options: ['C2H6', 'CH4', 'H2O', 'CO2'], correctAnswerIndex: 1 },
    ],
  },
  {
    id: 'bio01',
    title: 'Photosynthesis Facts',
    subject: 'Biology',
    level: 'Intermediate',
    questionCount: 2,
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'green leaf',
    questions: [
      { questionText: 'What are the products of photosynthesis?', options: ['Water and CO2', 'Glucose and Oxygen', 'Light and Water', 'Oxygen and CO2'], correctAnswerIndex: 1 },
      { questionText: 'Where does photosynthesis occur in a plant cell?', options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'], correctAnswerIndex: 2 },
    ],
  },
];

export type Mentor = {
  id: string;
  name: string;
  expertise: string;
  bio: string;
  avatarUrl: string;
  aiHint: string;
};

export const mentors: Mentor[] = [
  { id: 'm01', name: 'Dr. Anjali Sharma', expertise: 'Astrophysics', bio: 'PhD in Astrophysics from IIT Bombay, passionate about making science accessible.', avatarUrl: 'https://placehold.co/100x100', aiHint: 'female scientist' },
  { id: 'm02', name: 'Rohan Verma', expertise: 'Software Engineering', bio: 'Senior Software Engineer at a top tech company, loves to code and mentor.', avatarUrl: 'https://placehold.co/100x100', aiHint: 'male engineer' },
  { id: 'm03', name: 'Priya Singh', expertise: 'Biotechnology', bio: 'Researcher focused on genetic engineering. Believes in hands-on learning.', avatarUrl: 'https://placehold.co/100x100', aiHint: 'woman researcher' },
  { id: 'm04', name: 'Vikram Choudhary', expertise: 'Civil Services', bio: 'IAS officer with 10 years of experience in public administration.', avatarUrl: 'https://placehold.co/100x100', aiHint: 'man portrait' },
  { id: 'm05', name: 'Aisha Khan', expertise: 'Mathematics', bio: 'Gold medalist in Mathematics Olympiad, now teaching at a leading university.', avatarUrl: 'https://placehold.co/100x100', aiHint: 'woman teacher' },
  { id: 'm06', name: 'Sameer Desai', expertise: 'Entrepreneurship', bio: 'Founder of two successful startups. Helps students with their business ideas.', avatarUrl: 'https://placehold.co/100x100', aiHint: 'male entrepreneur' },
];

export type User = {
    id: string;
    name: string;
    email: string;
    role: 'Student' | 'Teacher' | 'Mentor' | 'Admin';
    joined: string;
};

export const users: User[] = [
    { id: 'u01', name: 'Aarav Patel', email: 'aarav@example.com', role: 'Student', joined: '2023-01-15' },
    { id: 'u02', name: 'Saanvi Gupta', email: 'saanvi@example.com', role: 'Student', joined: '2023-02-20' },
    { id: 'u03', name: 'Dr. Anjali Sharma', email: 'anjali.s@example.com', role: 'Mentor', joined: '2023-03-10' },
    { id: 'u04', name: 'Mr. Rajesh Kumar', email: 'rajesh.k@example.com', role: 'Teacher', joined: '2023-01-05' },
    { id: 'u05', name: 'Priya Singh', email: 'priya.s@example.com', role: 'Mentor', joined: '2023-04-01' },
    { id: 'u06', name: 'Vikram Choudhary', email: 'vikram.c@example.com', role: 'Mentor', joined: '2023-05-22' },
    { id: 'u07', name: 'Admin User', email: 'admin@educonnect.com', role: 'Admin', joined: '2023-01-01' },
];

export const findQuizById = (id: string) => quizzes.find(q => q.id === id);
