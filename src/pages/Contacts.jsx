import { useState } from "react";
import "../styles/static.css";

export default function Contacts() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");

    const submit = (e) => {
        e.preventDefault();
        alert("Сообщение отправлено (демо). Мы свяжемся с вами.");
        setName("");
        setPhone("");
        setMsg("");
    };

    return (
        <div className="container-xl py-4 py-md-5">
            <div className="k-card p-3 p-md-4 k-static">
                <div className="k-badge"><i className="bi bi-chat-dots"></i><span>Контакты</span></div>
                <h1 className="mt-3 mb-2">Связаться с нами</h1>
                <div className="k-muted">Оставь заявку — поможем подобрать товар и уточним доставку.</div>

                <div className="k-contact-grid mt-3">
                    <form onSubmit={submit} className="k-card p-3 p-md-4" style={{ boxShadow: "none" }}>
                        <div className="mb-3">
                            <div className="k-muted small mb-2">Имя</div>
                            <input className="k-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Например: Азамат" required />
                        </div>

                        <div className="mb-3">
                            <div className="k-muted small mb-2">Телефон</div>
                            <input className="k-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+996 ..." required />
                        </div>

                        <div className="mb-3">
                            <div className="k-muted small mb-2">Сообщение</div>
                            <textarea className="k-input" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Что нужно подобрать? (щука/судак, приманки, леска...)" rows={5} required />
                        </div>

                        <button className="k-btn k-btn-primary w-100" type="submit">
                            <i className="bi bi-send"></i>
                            <span>Отправить</span>
                        </button>
                    </form>

                    <div className="k-card p-3 p-md-4" style={{ boxShadow: "none" }}>
                        <div className="k-muted">Контакты</div>
                        <div className="mt-2 k-contact-item">
                            <i className="bi bi-telephone"></i>
                            <div>
                                <div className="k-contact-title">Телефон</div>
                                <div className="k-muted">+996 000 000 000</div>
                            </div>
                        </div>

                        <div className="mt-3 k-contact-item">
                            <i className="bi bi-geo-alt"></i>
                            <div>
                                <div className="k-contact-title">Адрес</div>
                                <div className="k-muted">Бишкек, демо-адрес</div>
                            </div>
                        </div>

                        <div className="mt-3 k-contact-item">
                            <i className="bi bi-telegram"></i>
                            <div>
                                <div className="k-contact-title">Telegram</div>
                                <div className="k-muted">@kaiyrmak_shop</div>
                            </div>
                        </div>

                        <hr className="k-hr my-3" />

                        <div className="k-muted">Время работы</div>
                        <div className="mt-2">Ежедневно: 09:00–21:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
