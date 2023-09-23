import { act, renderHook } from '@testing-library/react';
import useQualityAttributes from '@features/quality-attributes/hooks/useQualityAttributes';


jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'), 
  useQuery: () => {
    const principle: Principle = {
      id: 1,
      name: "KISS (Keep It Simple, Stupid)",
      definition: "This principle advocates simplicity in design and implementation. It suggests that systems should be as simple as possible, avoiding unnecessary complexity.",
      author: "Associated with Kelly Johnson of Lockheed Skunk Works.",
      references: {
          "books": [],
          "articles": []
      },
      keyConcepts: [],
      benefits: [
          "Enhanced readability",
          "Easier maintenance",
          "Reduced likelihood of defects",
          "Faster development",
          "Improved collaboration"
      ],
      challenges: [],
      criticism: [
          "Simplicity can sometimes lead to oversimplification",
          "Context-specific, not a one-size-fits-all principle"
      ]
    };
    const data: QualityAttribute =  {
      id: 1,
      name: "Readability",
      definition: "Readability refers to how easily human readers can understand, interpret, and follow the code's logic and structure. It encompasses factors such as naming conventions, code organization, comments, and code formatting. Readable code is crucial for collaboration and future maintenance.",
      benefits: [
        "Enhanced understanding of code by developers.",
        "Reduced time and effort for code reviews.",
        "Easier onboarding for new team members.",
        "Improved collaboration among developers.",
        "Reduced likelihood of introducing bugs due to code misinterpretation."
      ],
      problemsSolved: [
        "Complex, hard-to-understand code.",
        "Time-consuming and error-prone code reviews.",
        "Difficulty for new developers to grasp the codebase.",
        "Challenges in collaboration among team members.",
        "Increased risk of introducing defects due to code misunderstandings."
      ],
      codeImprovements: [
        {
          principle: principle,
          improvement: {
            description: "KISS (Keep It Simple, Stupid) significantly improves readability by promoting simplicity in code. Simple code is easier to understand and read, leading to enhanced readability. This principle encourages developers to avoid unnecessary complexity that can obscure code's meaning.",
            impact: "High"
          }
        },
      ],
      specificStrategies: [
        "Follow consistent code formatting and style guidelines across the project.",
        "Use meaningful and descriptive variable and function names.",
        "Include concise and clear comments to explain complex or non-obvious code segments.",
        "Regularly refactor code to eliminate code smells and improve readability.",
        "Conduct code reviews to identify and address readability issues with input from team members.",
        "Adopt coding standards and conventions that prioritize code readability.",
        "Document design decisions and architectural choices to aid developers in understanding the code's structure."
      ]
    };

    return {
      data,
      isLoading: false,
      isError: false,
    };
  },
}));


describe('testing useQualityAttributes hook', () => {
  it('should fetch and return quality attributes', async () => {
    const { result } = renderHook(() => useQualityAttributes());

    act(async () => {
      await result.current.fetchQualityAttributes();
    })

    expect(result.current.qualityAttributes).toEqual([
     
     
    ]);

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });
});