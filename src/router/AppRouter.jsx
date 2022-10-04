import { Route, Routes } from 'react-router-dom'
import { CalendarPage } from '../calendar/pages';
import { AuthPage } from '../auth/pages';

export const AppRouter = () => {
  
    const authStatus = 'not-authenticated';
  
    return (
    <Routes>
        {
            (authStatus === 'not-authenticated')  
            ? <Route path="/auth/*" element={ <AuthPage /> } />
            : <Route path="/*" element={ <CalendarPage /> } />
            
        }
        <Route path="/*" element={ <CalendarPage /> } />
    </Routes>
  )
}
