export enum ViewState {
  HOME = 'HOME',
  EXPLORE = 'EXPLORE',
  VOCABULARY = 'VOCABULARY',
  PRACTICE = 'PRACTICE',
  QUIZ = 'QUIZ',
  TEACHER = 'TEACHER'
}

export interface VocabularyItem {
  id: string;
  term: string;
  definition: string;
  partOfSpeech: string;
  example: string;
}

export interface CycleStage {
  id: number;
  label: string;
  description: string;
  x: number; // Percentage coordinate for hotspot
  y: number;
}

export interface SentencePair {
  id: string;
  start: string;
  end: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}
