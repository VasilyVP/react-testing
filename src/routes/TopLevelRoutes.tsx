import { Routes, Route } from 'react-router-dom';
import MainPage from 'routes/MainPage';
import PageOne from 'routes/PageOne'
import PageTwo from 'routes/PageTwo';

export default function TopLevelRoutes() {
    return (
        <Routes>
            <Route path='/page_one' element={<PageOne />} />
            <Route path='/page_two' element={<PageTwo />} />
            <Route path='/' element={<MainPage />} />
        </Routes>
    )
}
