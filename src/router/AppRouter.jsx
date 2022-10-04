import { Route, Routes } from 'react-router-dom'
import { CalendarPage } from '../calendar/pages';
import { AuthPage } from '../auth/pages';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthPage /> } />
        <Route path="/*" element={ <CalendarPage /> } />
    </Routes>
  )
}
