import "../styles/static.css";

export default function About() {
    return (
        <div className="container-xl py-4 py-md-5">
            <div className="k-card p-3 p-md-4 k-static">
                <div className="k-badge"><i className="bi bi-info-circle"></i><span>О нас</span></div>
                <h1 className="mt-3 mb-2">Кайырмак</h1>
                <div className="k-muted">
                    Мы собираем рыболовные аксессуары без лишнего: только то, что реально нужно на воде.
                    Этот проект — фронтенд-демо магазина (без бекенда).
                </div>

                <div className="k-static-grid mt-3">
                    <div className="k-static-item">
                        <div className="k-static-ico"><i className="bi bi-compass"></i></div>
                        <div className="k-static-title">Подбор по задаче</div>
                        <div className="k-muted">Щука, судак, окунь — подскажем, что взять.</div>
                    </div>
                    <div className="k-static-item">
                        <div className="k-static-ico"><i className="bi bi-gear"></i></div>
                        <div className="k-static-title">Снасти и расходники</div>
                        <div className="k-muted">Катушки, леска, крючки, фурнитура, приманки.</div>
                    </div>
                    <div className="k-static-item">
                        <div className="k-static-ico"><i className="bi bi-heart"></i></div>
                        <div className="k-static-title">Просто и быстро</div>
                        <div className="k-muted">Поиск, фильтр, корзина — без перегруза.</div>
                    </div>
                </div>

                <hr className="k-hr my-3" />

                <div className="k-muted">Контакты и заказ</div>
                <div className="mt-2">
                    Напиши нам в разделе «Контакты» — поможем выбрать снасть и оформим заказ.
                </div>
            </div>
        </div>
    );
}
