
import { VocabularyItem, CycleStage, SentencePair, QuizQuestion } from '../types';

export const VOCABULARY: VocabularyItem[] = [
  {
    id: 'v1',
    term: 'Evaporation',
    partOfSpeech: 'noun',
    definition: 'The process where liquid turns into gas (water vapour) due to heat.',
    example: 'The sun’s heat causes evaporation of seawater.'
  },
  {
    id: 'v2',
    term: 'Condensation',
    partOfSpeech: 'noun',
    definition: 'The process where gas cools down and turns back into liquid droplets.',
    example: 'Condensation forms clouds in the sky.'
  },
  {
    id: 'v3',
    term: 'Precipitation',
    partOfSpeech: 'noun',
    definition: 'Water falling from clouds as rain, hail, or snow.',
    example: 'Heavy precipitation filled the rivers.'
  },
  {
    id: 'v4',
    term: 'Run-off',
    partOfSpeech: 'noun',
    definition: 'Water flowing over the surface of the land into rivers and seas.',
    example: 'Surface run-off flows down the mountain.'
  },
  {
    id: 'v5',
    term: 'Water Vapour',
    partOfSpeech: 'noun',
    definition: 'Water in the form of a gas.',
    example: 'Invisible water vapour rises into the atmosphere.'
  },
  {
    id: 'v6',
    term: 'Soakage',
    partOfSpeech: 'noun',
    definition: 'Water entering the soil.',
    example: 'Roots benefit from the soakage of rainwater.'
  }
];

export const CYCLE_STAGES: CycleStage[] = [
  {
    id: 1,
    label: "Evaporation",
    description: "The sun's heat evaporates seawater and turns it into a gas called water vapour.",
    x: 20,
    y: 60
  },
  {
    id: 2,
    label: "Rising",
    description: "The light water vapour rises into the atmosphere.",
    x: 30,
    y: 40
  },
  {
    id: 3,
    label: "Condensation",
    description: "The water vapour cools and condenses into tiny droplets, making up clouds.",
    x: 50,
    y: 20
  },
  {
    id: 4,
    label: "Precipitation",
    description: "Further cooling results in rain, hail, or snow falling to the ground.",
    x: 75,
    y: 35
  },
  {
    id: 5,
    label: "Run-off",
    description: "Water flows as surface run-off in rivers or soaks into the ground.",
    x: 60,
    y: 75
  },
  {
    id: 6,
    label: "Return",
    description: "Most water returns to the sea, and the cycle begins again.",
    x: 40,
    y: 85
  }
];

// Based on Exercise 3 in PDF
export const SENTENCE_PAIRS: SentencePair[] = [
  { id: '1', start: "The sun's heat evaporates seawater and", end: "turns it into a gas called water vapour." },
  { id: '2', start: "The light water vapour", end: "rises into the atmosphere." },
  { id: '3', start: "Here in the atmosphere the water vapour", end: "cools and condenses into tiny droplets." },
  { id: '4', start: "The tiny droplets of water", end: "make up cloud." },
  { id: '5', start: "Further cooling and condensation", end: "result in precipitation (rain, hail, snow, etc)." },
  { id: '6', start: "Surface run-off", end: "forms rivers." },
  { id: '7', start: "Most of the water", end: "returns to the sea." },
  { id: '8', start: "Finally, some water", end: "is evaporated immediately back into the atmosphere." }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What turns seawater into water vapour?",
    options: ["The wind", "The sun's heat", "The clouds", "The rain"],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What happens when water vapour rises and cools?",
    options: ["It evaporates", "It disappears", "It condenses into droplets", "It becomes ice"],
    correctIndex: 2
  },
  {
    id: 3,
    question: "Which of these is NOT a form of precipitation?",
    options: ["Rain", "Hail", "Evaporation", "Snow"],
    correctIndex: 2
  },
  {
    id: 4,
    question: "What is surface run-off?",
    options: ["Water flowing in rivers", "Water evaporating", "Water forming clouds", "Water freezing"],
    correctIndex: 0
  }
];
