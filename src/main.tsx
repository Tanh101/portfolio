import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <Routes>
            <Route path="/" element={<Layout />} />
        </Routes>
    </Router>
)
