import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './app.css';
import Profile from './pages/profile';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
