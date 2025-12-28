import { Link } from "react-router-dom";
import { useCart } from "../store/cart.jsx";
import { products } from "../data/products.js";
import "../styles/cart.css";

export default function Cart() {
    const { items, setQty, remove, clear, total } = useCart();

    const resolved = items.map(i => {
        const p = products.find(x => x.id === i.id);
        return { ...i, image: p?.image, stock: p?.stock ?? 0 };
    });

    return (
        <div className="container-xl py-4 py-md-5">
            <div className="k-card p-3 p-md-4 k-cart-head">
                <div>
                    <div className="k-badge"><i className="bi bi-bag"></i><span>Корзина</span></div>
                    <h1 className="mt-3 mb-1">Твои товары</h1>
                    <div className="k-muted">Изменяй количество и оформляй заказ.</div>
                </div>

                <div className="k-cart-actions">
                    <Link to="/catalog" className="k-btn">
                        <i className="bi bi-grid"></i>
                        <span>В каталог</span>
                    </Link>
                    <button className="k-btn" onClick={clear} disabled={items.length === 0}>
                        <i className="bi bi-trash3"></i>
                        <span>Очистить</span>
                    </button>
                </div>
            </div>

            <div className="k-cart-grid mt-3">
                <div className="k-card p-3 p-md-4">
                    {resolved.length === 0 ? (
                        <div className="k-muted">Корзина пустая. Добавь товары из каталога.</div>
                    ) : (
                        <div className="k-cart-list">
                            {resolved.map(i => (
                                <div key={i.id} className="k-cart-row">
                                    <div className="k-cart-thumb">
                                        {i.image ? (
                                            <img className="k-cart-img" src={i.image} alt={i.title} loading="lazy" />
                                        ) : (
                                            <i className="bi bi-fish"></i>
                                        )}
                                    </div>

                                    <div className="k-cart-info">
                                        <div className="k-cart-title">{i.title}</div>
                                        <div className="k-muted">{i.price} сом за шт.</div>
                                    </div>

                                    <div className="k-cart-qty">
                                        <button className="k-qty-btn" onClick={() => setQty(i.id, Math.max(1, i.qty - 1))}>
                                            <i className="bi bi-dash"></i>
                                        </button>
                                        <input
                                            className="k-qty-input"
                                            value={i.qty}
                                            onChange={(e) => setQty(i.id, e.target.value)}
                                            inputMode="numeric"
                                        />
                                        <button className="k-qty-btn" onClick={() => setQty(i.id, Math.min(99, i.qty + 1))}>
                                            <i className="bi bi-plus"></i>
                                        </button>
                                    </div>

                                    <div className="k-cart-sum">
                                        <div className="k-price">{i.qty * i.price} сом</div>
                                        <button className="k-remove" onClick={() => remove(i.id)}>
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="k-card p-3 p-md-4">
                    <div className="k-badge"><i className="bi bi-receipt"></i><span>Итого</span></div>

                    <div className="k-check mt-3">
                        <div className="k-check-row">
                            <div className="k-muted">Товары</div>
                            <div className="k-price">{total} сом</div>
                        </div>
                        <div className="k-check-row">
                            <div className="k-muted">Доставка</div>
                            <div className="k-muted">уточняется</div>
                        </div>
                        <hr className="k-hr my-3" />
                        <div className="k-check-row">
                            <div className="k-muted">К оплате</div>
                            <div className="k-price" style={{ fontSize: "1.35rem" }}>{total} сом</div>
                        </div>
                    </div>

                    <button
                        className="k-btn k-btn-primary w-100 mt-3"
                        disabled={items.length === 0}
                        onClick={() => alert("Заявка отправлена (демо). Свяжемся с вами для подтверждения заказа.")}
                    >
                        <i className="bi bi-check2-circle"></i>
                        <span>Оформить заказ</span>
                    </button>

                    <div className="k-muted mt-3">Демо-версия: без оплаты и без бекенда.</div>

                    <Link to="/contacts" className="k-btn w-100 mt-2">
                        <i className="bi bi-chat-dots"></i>
                        <span>Написать нам</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
