import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../store/userSlice.js'

function ProtectedRoute({
    redirectPath = '/login',
    children,
}) {

    const isAuth = useSelector(selectIsAuth());
    if (!isAuth) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
}
export default ProtectedRoute;