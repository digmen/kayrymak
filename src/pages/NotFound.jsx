import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container-xl py-5">
            <div className="k-card p-4">
                <div className="k-badge"><i className="bi bi-exclamation-triangle"></i><span>404</span></div>
                <h1 className="mt-3 mb-2">Страница не найдена</h1>
                <div className="k-muted mb-3">Перейди на главную или в каталог.</div>
                <div className="d-flex gap-2 flex-wrap">
                    <Link to="/" className="k-btn k-btn-primary">
                        <i className="bi bi-house"></i>
                        <span>Главная</span>
                    </Link>
                    <Link to="/catalog" className="k-btn">
                        <i className="bi bi-grid"></i>
                        <span>Каталог</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
