import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import Lecture from './pages/Lecture';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lectures" element={<Lectures />} />
        <Route path="lectures/:slug" element={<Lecture />} />
        <Route path="*" element={<Lecture />} />
      </Route>
    </Routes>
  );
}

export default App;
