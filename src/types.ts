export interface Chapter {
  subject: string;
  chapter: string;
  class: string;
  unit: string;
  yearWiseQuestionCount: Record<string, number>;
  questionSolved: number;
  status: string;
  isWeakChapter: boolean;
}

export interface Subject {
  name: string;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
} 