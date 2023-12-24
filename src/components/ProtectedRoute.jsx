import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { User, Loading } = useAuth();
    if (Loading) {
        return <div>Loading...</div>;
    }
    if (!User) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
}
