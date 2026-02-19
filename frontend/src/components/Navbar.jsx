import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Navbar() {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate("/");
        setMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };
    
}