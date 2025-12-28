import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { products, getCategoryTitle } from "../data/products.js";
import { useCart } from "../store/cart.jsx";
import "../styles/product.css";

export default function Product() {
    const { id } = useParams();
    const { add } = useCart();

    const p = useMemo(() => products.find(x => x.id === id), [id]);

    if (!p) {
        return (
            <div className="container-xl py-5">
                <div className="k-card p-4">
                    <h1 className="mb-2">Товар не найден</h1>
                    <div className="k-muted mb-3">Похоже, ссылка неверная.</div>
                    <Link to="/catalog" className="k-btn">
                        <i className="bi bi-arrow-left"></i>
                        <span>В каталог</span>
                    </Link>
                </div>
            </div>
        );
    }

    const catTitle = getCategoryTitle(p.category);

    return (
        <div className="container-xl py-4 py-md-5">
            <div className="k-prod-page">
                <div className="k-prod-left k-card p-3 p-md-4">
                    <div className="k-prod-hero">
                        <img className="k-prod-hero-img" src={p.image} alt={p.title} />
                    </div>

                    <div className="k-prod-tags mt-3">
                        <span className="k-pill"><i className="bi bi-grid-3x3-gap"></i><span>{catTitle}</span></span>
                        <span className="k-pill"><i className="bi bi-star-fill"></i><span>{p.rating}</span></span>
                        <span className="k-pill"><i className="bi bi-box-seam"></i><span>{p.stock} шт.</span></span>
                    </div>

                    <hr className="k-hr my-3" />

                    <div className="k-muted">Описание</div>
                    <div className="mt-2">{p.desc}</div>

                    <div className="k-muted mt-3">Теги</div>
                    <div className="k-prod-tags2 mt-2">
                        {p.tags.map(t => (
                            <span key={t} className="k-pill"><i className="bi bi-tag"></i><span>{t}</span></span>
                        ))}
                    </div>
                </div>

                <div className="k-prod-right">
                    <div className="k-card p-3 p-md-4">
                        <div className="k-badge"><i className="bi bi-bag-check"></i><span>Покупка</span></div>
                        <h1 className="mt-3 mb-1">{p.title}</h1>
                        <div className="k-muted">Добавь в корзину и оформи заказ.</div>

                        <div className="k-prod-price mt-3">
                            <div className="k-muted">Цена</div>
                            <div className="k-price k-prod-price-num">{p.price} сом</div>
                        </div>

                        <div className="k-prod-actions mt-3">
                            <button className="k-btn k-btn-primary w-100" onClick={() => add(p, 1)}>
                                <i className="bi bi-bag-plus"></i>
                                <span>Добавить в корзину</span>
                            </button>

                            <div className="d-flex gap-2 flex-wrap mt-2">
                                <Link to="/cart" className="k-btn flex-fill">
                                    <i className="bi bi-bag"></i>
                                    <span>Перейти в корзину</span>
                                </Link>
                                <Link to="/catalog" className="k-btn flex-fill">
                                    <i className="bi bi-arrow-left"></i>
                                    <span>Назад</span>
                                </Link>
                            </div>
                        </div>

                        <hr className="k-hr my-3" />

                        <div className="k-prod-mini">
                            <div className="k-mini">
                                <i className="bi bi-truck"></i>
                                <div>
                                    <div className="k-mini-title">Доставка</div>
                                    <div className="k-muted">По городу и самовывоз</div>
                                </div>
                            </div>
                            <div className="k-mini">
                                <i className="bi bi-shield-check"></i>
                                <div>
                                    <div className="k-mini-title">Проверка</div>
                                    <div className="k-muted">Поможем подобрать</div>
                                </div>
                            </div>
                            <div className="k-mini">
                                <i className="bi bi-chat-dots"></i>
                                <div>
                                    <div className="k-mini-title">Связь</div>
                                    <div className="k-muted">Ответим быстро</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="k-card p-3 p-md-4 mt-3">
                        <div className="k-muted">Рекомендуем</div>
                        <div className="mt-2">
                            Смотри также товары из категории:{" "}
                            <Link to={`/catalog?cat=${p.category}`} className="k-inline-link">{catTitle}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
