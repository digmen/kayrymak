import { NavLink, Link } from "react-router-dom";
import { useCart } from "../store/cart.jsx";
import "../styles/navbar.css";

export default function Navbar() {
    const { count } = useCart();

    return (
        <header className="k-nav-wrap">
            <div className="container-xl py-3">
                <div className="k-nav k-card px-3 px-md-4 py-3">
                    <Link to="/" className="k-brand">
                        <span className="k-brand-mark">
                            <i className="bi bi-water"></i>
                        </span>
                        <span className="k-brand-text">
                            <span className="k-brand-title">Кайырмак</span>
                            <span className="k-brand-sub">рыболовные аксессуары</span>
                        </span>
                    </Link>

                    <nav className="k-links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "k-link active" : "k-link"}>Главная</NavLink>
                        <NavLink to="/catalog" className={({ isActive }) => isActive ? "k-link active" : "k-link"}>Каталог</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "k-link active" : "k-link"}>О нас</NavLink>
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? "k-link active" : "k-link"}>Контакты</NavLink>
                    </nav>

                    <div className="k-actions">
                        <Link to="/cart" className="k-cart-btn">
                            <i className="bi bi-bag"></i>
                            <span>Корзина</span>
                            <span className="k-cart-count">{count}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
