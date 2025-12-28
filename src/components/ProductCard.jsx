import { Link } from "react-router-dom";
import { useCart } from "../store/cart.jsx";
import "../styles/product-card.css";

export default function ProductCard({ p, categoryTitle }) {
    const { add } = useCart();

    return (
        <div className="k-prod k-card p-3">
            <div className="k-prod-top">
                <div className="k-prod-thumb">
                    <div className="k-prod-thumb-inner">
                        <i className="bi bi-fish"></i>
                    </div>
                </div>

                <div className="k-prod-meta">
                    <div className="k-pill">
                        <i className="bi bi-grid-3x3-gap"></i>
                        <span>{categoryTitle}</span>
                    </div>

                    <div className="k-pill">
                        <i className="bi bi-star-fill"></i>
                        <span>{p.rating}</span>
                    </div>

                    <div className="k-pill">
                        <i className="bi bi-box-seam"></i>
                        <span>{p.stock} шт.</span>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <div className="k-prod-title">{p.title}</div>
                <div className="k-muted mt-2 k-prod-desc">{p.desc}</div>
            </div>

            <div className="k-prod-bottom mt-3">
                <div className="k-price">{p.price} сом</div>

                <div className="k-prod-actions">
                    <Link to={`/product/${p.id}`} className="k-btn">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span>Подробнее</span>
                    </Link>
                    <button className="k-btn k-btn-primary" onClick={() => add(p, 1)}>
                        <i className="bi bi-bag-plus"></i>
                        <span>В корзину</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
