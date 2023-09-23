
interface Principle {
  id: number;
  name: string;
  definition: string;
  author: string;
  references: {
    books: string[];
    articles: string[];
  }
  keyConcepts: string[];
  benefits: string[];
  challenges: string[];
  criticism: string[];
}

interface QualityAttribute {
  id: number;
  name: string;
  definition: string;
  benefits: string[];
  problemsSolved: string[];
  codeImprovements: {
    principle: Principle,
    improvement: {
      description: string;
      impact: string;
    } 
  }[];
  specificStrategies: string[];

}