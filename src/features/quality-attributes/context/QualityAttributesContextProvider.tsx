import { createContext, ReactNode } from 'react';
import useQualityAttributes from '../hooks/useQualityAttributes';

type QualityAttributesContextType = {
  qualityAttributes: QualityAttribute[]; 
};

const QualityAttributesContext = createContext<QualityAttributesContextType>({
  qualityAttributes: [],
});

type QualityAttributesProviderProps = {
  children: ReactNode; 
};

function QualityAttributesProvider({ children }: QualityAttributesProviderProps) {
  const { data: qualityAttributes} = useQualityAttributes();

  const contextValue: QualityAttributesContextType = {
    qualityAttributes: qualityAttributes!,
  };

  return (
    <QualityAttributesContext.Provider value={contextValue}>
      {children}
    </QualityAttributesContext.Provider>
  );
}

export default QualityAttributesProvider;
export { QualityAttributesContext };