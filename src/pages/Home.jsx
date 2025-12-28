import { Link } from "react-router-dom";
import { categories, products, getCategoryTitle } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import "../styles/home.css";

export default function Home() {
    const featured = products.slice(0, 6);

    return (
        <div className="container-xl py-4 py-md-5">
            <section className="k-hero k-card p-3 p-md-4 p-lg-5">
                <div className="k-hero-grid">
                    <div className="k-hero-left">
                        <div className="k-badge">
                            <i className="bi bi-compass"></i>
                            <span>Рыбалка начинается с правильных мелочей</span>
                        </div>

                        <h1 className="k-hero-title mt-3">
                            Онлайн магазин <span className="k-hero-accent">Кайырмак</span>
                            <br />
                            аксессуары для рыболовства
                        </h1>

                        <p className="k-hero-sub mt-3">
                            Приманки, крючки, леска, катушки и всё, что нужно для уверенного выезда на воду.
                            Быстро выбери, добавь в корзину и оформи заказ.
                        </p>

                        <div className="k-hero-cta mt-4">
                            <Link to="/catalog" className="k-btn k-btn-primary">
                                <i className="bi bi-basket2"></i>
                                <span>Открыть каталог</span>
                            </Link>
                            <Link to="/contacts" className="k-btn">
                                <i className="bi bi-chat-dots"></i>
                                <span>Связаться</span>
                            </Link>
                        </div>

                        <div className="k-hero-stats mt-4">
                            <div className="k-stat">
                                <div className="k-stat-num">5+</div>
                                <div className="k-stat-txt">категорий</div>
                            </div>
                            <div className="k-stat">
                                <div className="k-stat-num">12+</div>
                                <div className="k-stat-txt">товаров</div>
                            </div>
                            <div className="k-stat">
                                <div className="k-stat-num">24/7</div>
                                <div className="k-stat-txt">онлайн</div>
                            </div>
                        </div>
                    </div>

                    <div className="k-hero-right">
                        <div className="k-hero-panel k-card">
                            <div className="k-hero-panel-top">
                                <div className="k-pill">
                                    <i className="bi bi-lightning-charge"></i>
                                    <span>Подбор по категориям</span>
                                </div>
                                <div className="k-pill">
                                    <i className="bi bi-shield-check"></i>
                                    <span>Качественные снасти</span>
                                </div>
                            </div>

                            <div className="k-hero-cats mt-3">
                                {categories.map(c => (
                                    <Link key={c.key} to={`/catalog?cat=${c.key}`} className="k-cat-tile">
                                        <span className="k-cat-ico"><i className="bi bi-water"></i></span>
                                        <span className="k-cat-title">{c.title}</span>
                                        <span className="k-cat-go"><i className="bi bi-arrow-right"></i></span>
                                    </Link>
                                ))}
                            </div>

                            <div className="k-hero-strip mt-3">
                                <div className="k-strip-item">
                                    <i className="bi bi-truck"></i>
                                    <span>Доставка по городу</span>
                                </div>
                                <div className="k-strip-item">
                                    <i className="bi bi-credit-card"></i>
                                    <span>Удобная оплата</span>
                                </div>
                                <div className="k-strip-item">
                                    <i className="bi bi-headset"></i>
                                    <span>Поддержка</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4 mt-md-5">
                <div className="d-flex align-items-end justify-content-between gap-3 flex-wrap">
                    <div>
                        <div className="k-badge"><i className="bi bi-stars"></i><span>Популярное</span></div>
                        <h2 className="mt-3 mb-0">Товары, которые берут чаще</h2>
                        <div className="k-muted mt-2">Быстрый выбор: добавляй и оформляй заказ.</div>
                    </div>
                    <Link to="/catalog" className="k-btn">
                        <i className="bi bi-grid"></i>
                        <span>Весь каталог</span>
                    </Link>
                </div>

                <div className="k-cards mt-3">
                    {featured.map(p => (
                        <ProductCard key={p.id} p={p} categoryTitle={getCategoryTitle(p.category)} />
                    ))}
                </div>
            </section>

            <section className="mt-4 mt-md-5">
                <div className="k-features k-card p-3 p-md-4">
                    <div className="k-features-head">
                        <h2 className="mb-1">Почему Кайырмак</h2>
                        <div className="k-muted">Простой магазин без лишнего — только нужное для рыбалки.</div>
                    </div>

                    <div className="k-features-grid mt-3">
                        <div className="k-feature">
                            <div className="k-feature-ico"><i className="bi bi-check2-circle"></i></div>
                            <div className="k-feature-title">Быстрый выбор</div>
                            <div className="k-muted">Фильтры, поиск, категории — всё на месте.</div>
                        </div>
                        <div className="k-feature">
                            <div className="k-feature-ico"><i className="bi bi-award"></i></div>
                            <div className="k-feature-title">Качество</div>
                            <div className="k-muted">Подбираем товары под реальные условия ловли.</div>
                        </div>
                        <div className="k-feature">
                            <div className="k-feature-ico"><i className="bi bi-geo-alt"></i></div>
                            <div className="k-feature-title">Локально</div>
                            <div className="k-muted">Ориентируемся на водоёмы и рыбалку региона.</div>
                        </div>
                        <div className="k-feature">
                            <div className="k-feature-ico"><i className="bi bi-life-preserver"></i></div>
                            <div className="k-feature-title">Поддержка</div>
                            <div className="k-muted">Поможем выбрать снасть под твою задачу.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
