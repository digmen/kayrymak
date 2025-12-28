import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products, getCategoryTitle } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import "../styles/catalog.css";

export default function Catalog() {
    const [params, setParams] = useSearchParams();
    const initialCat = params.get("cat") || "all";
    const [query, setQuery] = useState("");
    const [cat, setCat] = useState(initialCat);

    const list = useMemo(() => {
        const q = query.trim().toLowerCase();
        return products
            .filter(p => (cat === "all" ? true : p.category === cat))
            .filter(p => {
                if (!q) return true;
                const hay = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
                return hay.includes(q);
            });
    }, [query, cat]);

    const catTitle = cat === "all" ? "Все товары" : getCategoryTitle(cat);

    const onCatChange = (v) => {
        setCat(v);
        if (v === "all") {
            params.delete("cat");
            setParams(params, { replace: true });
        } else {
            setParams({ cat: v }, { replace: true });
        }
    };

    return (
        <div className="container-xl py-4 py-md-5">
            <div className="k-cat-head k-card p-3 p-md-4">
                <div className="k-cat-head-top">
                    <div>
                        <div className="k-badge"><i className="bi bi-grid-3x3-gap"></i><span>Каталог</span></div>
                        <h1 className="mt-3 mb-1">{catTitle}</h1>
                        <div className="k-muted">Поиск, фильтр по категориям, добавление в корзину.</div>
                    </div>

                    <div className="k-cat-controls">
                        <div className="k-field">
                            <div className="k-muted small mb-2">Поиск</div>
                            <input
                                className="k-input"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Например: шнур, воблер, офсет..."
                            />
                        </div>

                        <div className="k-field">
                            <div className="k-muted small mb-2">Категория</div>
                            <select className="k-select" value={cat} onChange={(e) => onCatChange(e.target.value)}>
                                <option value="all">Все</option>
                                {categories.map(c => (
                                    <option key={c.key} value={c.key}>{c.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="k-cat-chips mt-3">
                    <button className={cat === "all" ? "k-chip active" : "k-chip"} onClick={() => onCatChange("all")}>Все</button>
                    {categories.map(c => (
                        <button
                            key={c.key}
                            className={cat === c.key ? "k-chip active" : "k-chip"}
                            onClick={() => onCatChange(c.key)}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="k-cat-grid mt-3">
                {list.map(p => (
                    <ProductCard key={p.id} p={p} categoryTitle={getCategoryTitle(p.category)} />
                ))}
            </div>

            {list.length === 0 && (
                <div className="k-card p-4 mt-3">
                    <div className="k-muted">Ничего не найдено. Попробуй изменить запрос или категорию.</div>
                </div>
            )}
        </div>
    );
}
