import '@src/App.sass'
import { Route, Routes } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import QualityAttributesPage from '@pages/QualityAttributesPage';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/quality-attributes" element={<QualityAttributesPage />} />
    </Routes>
  );
}

export default App
