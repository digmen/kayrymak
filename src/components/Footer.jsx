import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="k-footer">
            <div className="container-xl py-4">
                <div className="k-footer-card k-card p-3 p-md-4">
                    <div className="k-footer-top">
                        <div>
                            <div className="k-footer-title">Кайырмак</div>
                            <div className="k-muted">Аксессуары для рыбалки. Быстро, удобно, по делу.</div>
                        </div>

                        <div className="k-footer-links">
                            <Link to="/catalog">Каталог</Link>
                            <Link to="/about">О нас</Link>
                            <Link to="/contacts">Контакты</Link>
                            <a href="tel:+996000000000">+996 000 000 000</a>
                        </div>
                    </div>

                    <hr className="k-hr my-3" />

                    <div className="k-footer-bottom">
                        <div className="k-muted">© {new Date().getFullYear()} Кайырмак</div>
                        <div className="k-footer-social">
                            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
                            <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
