import { BrowserRouter } from 'react-router-dom';
import TopLevelRoutes from 'routes/TopLevelRoutes';

function App() {
    return (
        <BrowserRouter>
            <TopLevelRoutes />
        </BrowserRouter>
    );
}

export default App;
