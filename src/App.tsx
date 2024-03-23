import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/index';
import { Home } from './pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
