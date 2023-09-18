import '@src/App.sass'
import { Route, Routes } from 'react-router-dom';

import HomePage from '@src/pages/home/HomePage';
import QualityAttributesPage from '@src/pages/quality-attributes/QualityAttributesPage';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/quality-attributes" element={<QualityAttributesPage />} />
    </Routes>
  );
}

export default App
