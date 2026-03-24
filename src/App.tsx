import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';
import { Partnership } from './pages/Partnership';
import { Impact } from './pages/Impact';
import { CaseStudies } from './pages/CaseStudies';
import { Demo } from './pages/Demo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Layout>
  );
}

export default App;
