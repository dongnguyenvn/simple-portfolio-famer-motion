import { useLocation, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import WritingPage from './pages/WritingPage';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter initial={true}>
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='project' element={<ProjectsPage />}>
                        <Route path=':projectName' element={<ProjectPage />} />
                    </Route>
                    <Route path='writing' element={<WritingPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default App;
