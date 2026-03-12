import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { EssaysPage } from './pages/EssaysPage';
import { EssayStubPage } from './pages/EssayStubPage';
import { SidequestsPage } from './pages/SidequestsPage';
import { NowPage } from './pages/NowPage';
import { WritingPage } from './pages/WritingPage';
import { BooksPage } from './pages/BooksPage';
import { ExperimentsPage } from './pages/ExperimentsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ROUTES } from './constants/routes';

import './index.css';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
        <Route path={ROUTES.ESSAYS} element={<EssaysPage />} />
        <Route path={ROUTES.ESSAYS_SLUG} element={<EssayStubPage />} />
        <Route path={ROUTES.SIDEQUESTS} element={<SidequestsPage />} />
        <Route path={ROUTES.NOW} element={<NowPage />} />
        <Route path={ROUTES.WRITING} element={<WritingPage />} />
        <Route path={ROUTES.BOOKS} element={<BooksPage />} />
        <Route path={ROUTES.EXPERIMENTS} element={<ExperimentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
