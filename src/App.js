import Home from './component/homePage/homePage';
import Login from './component/login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="login" exact Component={Login} />
            </Routes>
        </Router>
    )
}

export default App;
