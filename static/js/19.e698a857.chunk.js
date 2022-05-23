(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [19], {
        1309: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() { return v }));
            var i, o = n(11),
                c = n(13),
                r = n(0),
                l = n(7),
                u = n(2),
                d = n(88),
                a = n(21),
                s = n(20),
                b = n(350),
                j = n(91),
                O = n(94),
                f = n(47),
                h = n(203),
                p = n(178),
                x = n(230),
                k = n(1),
                m = Object(l.e)(u.t)(i || (i = Object(c.a)(["\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.dropdownDeep }));

            function v() {
                var e = Object(s.a)().account,
                    t = Object(a.b)().t,
                    n = Object(f.k)(),
                    i = Object(r.useMemo)((function() { return n.map((function(e) { return { liquidityToken: Object(f.a)(e), tokens: e } })) }), [n]),
                    c = Object(r.useMemo)((function() { return i.map((function(e) { return e.liquidityToken })) }), [i]),
                    l = Object(j.f)(null !== e && void 0 !== e ? e : void 0, c),
                    v = Object(o.a)(l, 2),
                    y = v[0],
                    g = v[1],
                    q = Object(r.useMemo)((function() { return i.filter((function(e) { var t, n = e.liquidityToken; return null === (t = y[n.address]) || void 0 === t ? void 0 : t.greaterThan("0") })) }), [i, y]),
                    w = Object(O.c)(q.map((function(e) { return e.tokens }))),
                    A = g || (null === w || void 0 === w ? void 0 : w.length) < q.length || (null === w || void 0 === w ? void 0 : w.some((function(e) { return !e }))),
                    N = w.map((function(e) { return Object(o.a)(e, 2)[1] })).filter((function(e) { return Boolean(e) }));
                return Object(k.jsx)(x.a, { children: Object(k.jsxs)(p.a, { children: [Object(k.jsx)(p.b, { title: t("Your Liquidity"), subtitle: t("Remove liquidity to receive tokens back") }), Object(k.jsxs)(m, { children: [e ? A ? Object(k.jsx)(u.Nb, { color: "black", textAlign: "center", children: Object(k.jsx)(h.a, { children: t("Loading") }) }) : (null === N || void 0 === N ? void 0 : N.length) > 0 ? N.map((function(e, t) { return Object(k.jsx)(b.b, { pair: e, mb: t < N.length - 1 ? "16px" : 0 }, e.liquidityToken.address) })) : Object(k.jsx)(u.Nb, { color: "black", textAlign: "center", children: t("No liquidity found.") }) : Object(k.jsx)(u.Nb, { color: "black", textAlign: "center", children: t("Connect to a wallet to view your liquidity.") }), e && !A && Object(k.jsxs)(u.O, { flexDirection: "column", alignItems: "center", mt: "24px", children: [Object(k.jsx)(u.Nb, { color: "black", mb: "8px", children: t("Don't see a pool you joined?") }), Object(k.jsx)(u.p, { id: "import-pool-link", variant: "secondary", scale: "sm", as: d.a, to: "/find", children: t("Find other LP tokens") })] })] }), Object(k.jsx)(u.u, { style: { textAlign: "center" }, children: Object(k.jsx)(u.p, { style: { backgroundColor: "#E8C431" }, id: "join-pool-button", as: d.a, to: "/add", width: "100%", startIcon: Object(k.jsx)(u.a, { color: "white" }), children: t("Add Liquidity") }) })] }) })
            }
        }
    }
]);
//# sourceMappingURL=19.e698a857.chunk.js.map