import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

function readCart() {
    try {
        const raw = localStorage.getItem("kaiyrmak_cart");
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed;
    } catch {
        return [];
    }
}

function writeCart(items) {
    try {
        localStorage.setItem("kaiyrmak_cart", JSON.stringify(items));
    } catch { }
}

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => readCart());

    useEffect(() => {
        writeCart(items);
    }, [items]);

    const api = useMemo(() => {
        const add = (product, qty = 1) => {
            setItems(prev => {
                const next = [...prev];
                const idx = next.findIndex(i => i.id === product.id);
                if (idx >= 0) {
                    next[idx] = { ...next[idx], qty: Math.min(99, next[idx].qty + qty) };
                    return next;
                }
                return [...next, { id: product.id, title: product.title, price: product.price, qty: Math.min(99, qty) }];
            });
        };

        const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));

        const setQty = (id, qty) => {
            const safe = Math.max(1, Math.min(99, Number(qty) || 1));
            setItems(prev => prev.map(i => i.id === id ? { ...i, qty: safe } : i));
        };

        const clear = () => setItems([]);

        const count = items.reduce((a, b) => a + b.qty, 0);
        const total = items.reduce((a, b) => a + b.qty * b.price, 0);

        return { items, add, remove, setQty, clear, count, total };
    }, [items]);

    return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("CartProvider missing");
    return ctx;
}
