import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { EssaysPage } from './pages/EssaysPage';
import { EssayStubPage } from './pages/EssayStubPage';
import { SidequestsPage } from './pages/SidequestsPage';
import { NowPage } from './pages/NowPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './index.css';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/essays/:slug" element={<EssayStubPage />} />
        <Route path="/sidequests" element={<SidequestsPage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
