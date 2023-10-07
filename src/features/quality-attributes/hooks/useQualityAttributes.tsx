// useQualityAttributes.ts
import { useQuery, UseQueryResult } from 'react-query';



const fetchQualityAttributes = async (): Promise<QualityAttribute[]> => {
  try {
    const response = await fetch('src/features/quality-attributes/assets/data/quality-attributes.json'); 
    
    if (!response.ok) {
      throw new Error('Failed to fetch quality attributes');
    }

    const data: QualityAttribute[] = await response.json();
    
    return data;

  } catch (error: any) {
    throw new Error(`Error fetching quality attributes: ${error.message}`);
  }
};

const useQualityAttributes = (): UseQueryResult<QualityAttribute[], Error> => {
  return useQuery('qualityAttributes', fetchQualityAttributes);
};

export default useQualityAttributes;