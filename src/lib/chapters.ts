const chapters = [
  {
    subject: "Physics",
    chapter: "Mathematics in Physics",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 0,
      "2020": 2,
      "2021": 5,
      "2022": 5,
      "2023": 3,
      "2024": 7,
      "2025": 6
    },
    questionSolved: 0,
    status: "Not Started",
    isWeakChapter: false
  },
  {
    subject: "Physics",
    chapter: "Units and Dimensions",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 2,
      "2020": 6,
      "2021": 8,
      "2022": 4,
      "2023": 6,
      "2024": 3,
      "2025": 10
    },
    questionSolved: 39,
    status: "Completed",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Motion In One Dimension",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 2,
      "2020": 10,
      "2021": 6,
      "2022": 7,
      "2023": 0,
      "2024": 2,
      "2025": 6
    },
    questionSolved: 33,
    status: "Completed",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Motion In Two Dimensions",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 3,
      "2020": 10,
      "2021": 2,
      "2022": 7,
      "2023": 8,
      "2024": 0,
      "2025": 8
    },
    questionSolved: 38,
    status: "Completed",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Laws of Motion",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 3,
      "2020": 0,
      "2021": 6,
      "2022": 5,
      "2023": 8,
      "2024": 6,
      "2025": 8
    },
    questionSolved: 36,
    status: "Completed",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Work Power Energy",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 10,
      "2020": 4,
      "2021": 9,
      "2022": 10,
      "2023": 2,
      "2024": 7,
      "2025": 5
    },
    questionSolved: 0,
    status: "Not Started",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Center of Mass Momentum and Collision",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 7,
      "2020": 5,
      "2021": 2,
      "2022": 7,
      "2023": 6,
      "2024": 10,
      "2025": 0
    },
    questionSolved: 0,
    status: "Not Started",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Rotational Motion",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 9,
      "2020": 9,
      "2021": 9,
      "2022": 9,
      "2023": 9,
      "2024": 2,
      "2025": 5
    },
    questionSolved: 52,
    status: "Completed",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Gravitation",
    class: "Class 11",
    unit: "Mechanics 1",
    yearWiseQuestionCount: {
      "2019": 3,
      "2020": 4,
      "2021": 5,
      "2022": 9,
      "2023": 0,
      "2024": 6,
      "2025": 8
    },
    questionSolved: 35,
    status: "Completed",
    isWeakChapter: false
  },
  {
    subject: "Physics",
    chapter: "Mechanical Properties of Solids",
    class: "Class 11",
    unit: "Mechanics 2",
    yearWiseQuestionCount: {
      "2019": 4,
      "2020": 6,
      "2021": 0,
      "2022": 2,
      "2023": 10,
      "2024": 10,
      "2025": 7
    },
    questionSolved: 0,
    status: "Not Started",
    isWeakChapter: false
  },
  {
    subject: "Physics",
    chapter: "Mechanical Properties of Fluids",
    class: "Class 11",
    unit: "Mechanics 2",
    yearWiseQuestionCount: {
      "2019": 2,
      "2020": 0,
      "2021": 1,
      "2022": 0,
      "2023": 0,
      "2024": 7,
      "2025": 8
    },
    questionSolved: 0,
    status: "Not Started",
    isWeakChapter: false
  },
  {
    subject: "Physics",
    chapter: "Thermal Properties of Matter",
    class: "Class 11",
    unit: "Thermodynamics",
    yearWiseQuestionCount: {
      "2019": 6,
      "2020": 9,
      "2021": 10,
      "2022": 0,
      "2023": 0,
      "2024": 9,
      "2025": 1
    },
    questionSolved: 35,
    status: "Completed",
    isWeakChapter: true
  },
  {
    subject: "Physics",
    chapter: "Thermodynamics",
    class: "Class 11",
    unit: "Thermodynamics",
    yearWiseQuestionCount: {
      "2019": 8,
      "2020": 10,
      "2021": 9,
      "2022": 5,
      "2023": 6,
      "2024": 8,
      "2025": 4
    },
    questionSolved: 0,
    status: "Not Started",
    isWeakChapter: true
  },
  {
    subject: "Chemistry",
    chapter: "Basic Concepts of Chemistry",
    class: "Class 11",
    unit: "Physical Chemistry",
    yearWiseQuestionCount: {"2019": 2, "2020": 3, "2021": 4, "2022": 2, "2023": 5, "2024": 6, "2025": 7},
    questionSolved: 12,
    status: "Completed",
    isWeakChapter: false
  },
  {
    subject: "Chemistry",
    chapter: "Atomic Structure",
    class: "Class 11",
    unit: "Physical Chemistry",
    yearWiseQuestionCount: {"2019": 1, "2020": 2, "2021": 2, "2022": 3, "2023": 2, "2024": 4, "2025": 5},
    questionSolved: 8,
    status: "Not Started",
    isWeakChapter: true
  },
  {
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    class: "Class 11",
    unit: "Physical Chemistry",
    yearWiseQuestionCount: {"2019": 3, "2020": 2, "2021": 1, "2022": 2, "2023": 3, "2024": 2, "2025": 4},
    questionSolved: 10,
    status: "Completed",
    isWeakChapter: false
  },
  {
    subject: "Mathematics",
    chapter: "Sets, Relations and Functions",
    class: "Class 11",
    unit: "Algebra",
    yearWiseQuestionCount: {"2019": 2, "2020": 2, "2021": 3, "2022": 2, "2023": 2, "2024": 3, "2025": 4},
    questionSolved: 9,
    status: "Completed",
    isWeakChapter: false
  },
  {
    subject: "Mathematics",
    chapter: "Complex Numbers",
    class: "Class 11",
    unit: "Algebra",
    yearWiseQuestionCount: {"2019": 1, "2020": 1, "2021": 2, "2022": 2, "2023": 1, "2024": 2, "2025": 3},
    questionSolved: 5,
    status: "Not Started",
    isWeakChapter: true
  },
  {
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    class: "Class 11",
    unit: "Algebra",
    yearWiseQuestionCount: {"2019": 2, "2020": 2, "2021": 2, "2022": 3, "2023": 2, "2024": 2, "2025": 2},
    questionSolved: 8,
    status: "Completed",
    isWeakChapter: false
  }
];

export default chapters; 