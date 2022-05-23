(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [7], { 1312: function(e, t, n) { "use strict";
            n.r(t); var c, r, a, i, s, o, l, b = n(0),
                u = n(73),
                j = n(83),
                d = n(226),
                p = n(349),
                O = n(171),
                x = n(28),
                f = n(102),
                m = n(356),
                h = n(13),
                v = n(7),
                g = n(2),
                k = n(21),
                C = n(3),
                y = n.n(C),
                w = n(12),
                S = n(11),
                N = n(6),
                A = n(40),
                E = n(130),
                I = Object(E.parseUnits)("1"),
                T = Object(E.parseUnits)("0.5"),
                D = ["sleepy", "dollop", "twinkle", "churro", "sunny"],
                P = n(1),
                R = I.add(T),
                Q = R.mul(5),
                F = { isInitialized: !1, currentStep: 0, teamId: null, selectedNft: { nftAddress: null, tokenId: null }, userName: "", minimumCakeRequired: R, allowance: Q },
                z = function(e, t) { switch (t.type) {
                        case "initialize":
                            return Object(N.a)(Object(N.a)({}, e), {}, { isInitialized: !0, currentStep: t.step });
                        case "next_step":
                            return Object(N.a)(Object(N.a)({}, e), {}, { currentStep: e.currentStep + 1 });
                        case "set_team":
                            return Object(N.a)(Object(N.a)({}, e), {}, { teamId: t.teamId });
                        case "set_selected_nft":
                            return Object(N.a)(Object(N.a)({}, e), {}, { selectedNft: { tokenId: t.tokenId, nftAddress: t.nftAddress } });
                        case "set_username":
                            return Object(N.a)(Object(N.a)({}, e), {}, { userName: t.userName });
                        default:
                            return e } },
                _ = Object(b.createContext)(null),
                L = function(e) { var t = e.children,
                        n = Object(b.useReducer)(z, F),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        a = c[1],
                        i = Object(j.c)().account;
                    Object(b.useEffect)((function() { var e = !0; return i && function() { var t = Object(w.a)(y.a.mark((function t() { var n, c; return y.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n = Object(A.b)(), t.next = 3, n.canMint(i);
                                            case 3:
                                                c = t.sent, a({ type: "initialize", step: c ? 0 : 1 }), e && a({ type: "initialize", step: c ? 0 : 1 });
                                            case 6:
                                            case "end":
                                                return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }()(),
                            function() { e = !1 } }), [i, a]); var s = Object(b.useMemo)((function() { return { nextStep: function() { return a({ type: "next_step" }) }, setTeamId: function(e) { return a({ type: "set_team", teamId: e }) }, setSelectedNft: function(e, t) { return a({ type: "set_selected_nft", tokenId: e, nftAddress: t }) }, setUserName: function(e) { return a({ type: "set_username", userName: e }) } } }), [a]); return Object(P.jsx)(_.Provider, { value: Object(N.a)(Object(N.a)({}, r), {}, { actions: s }), children: t }) },
                M = v.e.div(c || (c = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.blackSubtle })),
                W = ["Get Starter Collectible", "Set Profile Picture", "Join Team", "Set Name"],
                U = function() { var e = Object(k.b)().t,
                        t = Object(b.useContext)(_).currentStep; return Object(P.jsxs)(M, { children: [Object(P.jsx)(g.Q, { as: "h1", scale: "xxl", color: "dark", mb: "8px", id: "profile-setup-title", children: e("Profile Setup") }), Object(P.jsx)(g.Q, { as: "h2", scale: "lg", mb: "8px", children: e("Show off your stats and collectibles with your unique profile") }), Object(P.jsx)(g.Nb, { color: "black", mb: "24px", children: e("Total cost: 1.5 CAKE") }), Object(P.jsx)(g.n, { children: W.map((function(n, c) { return Object(P.jsx)(g.Nb, { color: c <= t ? "text" : "textDisabled", children: e(n) }, n) })) })] }) },
                V = n(173),
                q = function() { var e = Object(k.b)().t; return Object(P.jsxs)("div", { children: [Object(P.jsx)(g.Q, { scale: "xl", mb: "8px", children: e("Oops!") }), Object(P.jsx)(g.Nb, { as: "p", mb: "16px", children: e("Please connect your wallet to continue") }), Object(P.jsx)(V.a, {})] }) },
                H = n(768),
                Y = n(67),
                B = n(114),
                G = n(357),
                K = n(225),
                X = n(769),
                J = n(59),
                Z = ["name", "value", "isChecked", "image", "onChange", "disabled", "children"],
                $ = v.e.label(r || (r = Object(h.a)(["\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n"])), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" }), (function(e) { return e.isDisabled ? "0.6" : "1" })),
                ee = v.e.div(a || (a = Object(h.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),
                te = v.e.div(i || (i = Object(h.a)(["\n  margin-left: 16px;\n"]))),
                ne = v.e.div(s || (s = Object(h.a)(["\n  align-self: stretch;\n  background-image: url('", "');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])), (function(e) { return e.src })),
                ce = function(e) { var t = e.name,
                        n = e.value,
                        c = e.isChecked,
                        r = void 0 !== c && c,
                        a = e.image,
                        i = e.onChange,
                        s = e.disabled,
                        o = e.children,
                        l = Object(J.a)(e, Z); return Object(P.jsx)(g.s, Object(N.a)(Object(N.a)({ isSuccess: r, isDisabled: s, mb: "16px" }, l), {}, { children: Object(P.jsxs)($, { isDisabled: s, children: [Object(P.jsxs)(ee, { children: [Object(P.jsx)(g.yb, { name: t, checked: r, value: n, onChange: function(e) { return i(e.target.value) }, disabled: s, style: { flex: "none" } }), Object(P.jsx)(te, { children: o })] }), Object(P.jsx)(ne, { src: a })] }) })) },
                re = function(e) { return Object(P.jsx)(g.p, Object(N.a)({ endIcon: Object(P.jsx)(g.f, { color: "currentColor" }) }, e)) },
                ae = function() { return Object(b.useContext)(_) },
                ie = G.a.pancake.filter((function(e) { return D.includes(e.identifier) })),
                se = function() { var e = Object(b.useState)(null),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = ae(),
                        a = r.actions,
                        i = r.minimumCakeRequired,
                        s = r.allowance,
                        o = Object(j.c)().account,
                        l = Object(Y.c)(),
                        u = Object(Y.a)(),
                        d = Object(k.b)().t,
                        p = Object(B.e)(),
                        O = p.balance,
                        x = p.fetchStatus === B.a.SUCCESS && O.gte(I),
                        f = Object(K.a)().callWithGasPrice,
                        m = Object(H.a)({ onRequiresApproval: function() { var e = Object(w.a)(y.a.mark((function e() { var t; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, l.allowance(o, u.address);
                                            case 3:
                                                return t = e.sent, e.abrupt("return", t.gte(i));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return f(l, "approve", [u.address, s.toString()]) }, onConfirm: function() { return f(u, "mintNFT", [n]) }, onSuccess: function() { return a.nextStep() } }),
                        h = m.isApproving,
                        v = m.isApproved,
                        C = m.isConfirmed,
                        N = m.isConfirming,
                        A = m.handleApprove,
                        T = m.handleConfirm; return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { fontSize: "20px", color: "black", bold: !0, children: d("Step %num%", { num: 1 }) }), Object(P.jsx)(g.Q, { as: "h3", scale: "xl", mb: "24px", children: d("Get Starter Collectible") }), Object(P.jsx)(g.Nb, { as: "p", children: d("Every profile starts by making a \u201cstarter\u201d collectible (NFT).") }), Object(P.jsx)(g.Nb, { as: "p", children: d("This starter will also become your first profile picture.") }), Object(P.jsx)(g.Nb, { as: "p", mb: "24px", children: d("You can change your profile pic later if you get another approved Pancake Collectible.") }), Object(P.jsx)(g.s, { mb: "24px", children: Object(P.jsxs)(g.t, { children: [Object(P.jsx)(g.Q, { as: "h4", scale: "lg", mb: "8px", children: d("Choose your Starter!") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", children: d("Choose wisely: you can only ever make one starter collectible!") }), Object(P.jsx)(g.Nb, { as: "p", mb: "24px", color: "black", children: d("Cost: %num% CAKE", { num: Object(E.formatUnits)(I) }) }), ie.map((function(e) { return Object(P.jsx)(ce, { name: "mintStarter", value: e.id, image: "/images/nfts/".concat(e.images.md), isChecked: n === e.id, onChange: function(e) { return c(Number(e)) }, disabled: h || N || C || !x, children: Object(P.jsx)(g.Nb, { bold: !0, children: e.name }) }, e.identifier) })), !x && Object(P.jsx)(g.Nb, { color: "failure", mb: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(E.formatUnits)(I) }) }), Object(P.jsx)(X.b, { isApproveDisabled: null === n || C || N || v, isApproving: h, isConfirmDisabled: !v || C || !x, isConfirming: N, onApprove: A, onConfirm: T })] }) }), Object(P.jsx)(re, { onClick: a.nextStep, disabled: !C, children: d("Next Step") })] }) },
                oe = n(88),
                le = n(204),
                be = n(35),
                ue = n(390),
                je = function() { var e = Object(j.c)().account,
                        t = Object(f.b)(),
                        n = Object(x.c)((function(e) { return e.collectibles })),
                        c = n.isInitialized,
                        r = n.isLoading,
                        a = n.data,
                        i = Object.keys(a); return Object(b.useEffect)((function() {!c && e && t(Object(ue.b)(e)) }), [c, e, t]), { isInitialized: c, isLoading: r, tokenIds: a, nftsInWallet: G.a.pancake.filter((function(e) { return i.includes(e.identifier) })) } },
                de = n(170),
                pe = Object(v.e)(oe.a)(o || (o = Object(h.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.darkgreen })),
                Oe = v.e.div(l || (l = Object(h.a)(["\n  margin-bottom: 24px;\n"]))),
                xe = function() { var e = Object(j.c)().library,
                        t = Object(b.useState)(!1),
                        n = Object(S.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        a = Object(b.useState)(!1),
                        i = Object(S.a)(a, 2),
                        s = i[0],
                        o = i[1],
                        l = Object(b.useContext)(_),
                        u = l.selectedNft,
                        d = l.actions,
                        p = Object(k.b)().t,
                        O = je(),
                        x = O.isLoading,
                        f = O.nftsInWallet,
                        m = O.tokenIds,
                        h = Object(de.a)().toastError,
                        v = Object(K.a)().callWithGasPrice,
                        C = function() { var t = Object(w.a)(y.a.mark((function t() { var n, c; return y.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(A.l)(u.nftAddress, e.getSigner()), t.next = 3, v(n, "approve", [Object(be.o)(), u.tokenId]);
                                        case 3:
                                            return c = t.sent, o(!0), t.next = 7, c.wait();
                                        case 7:
                                            t.sent.status ? (o(!1), r(!0)) : (h(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), o(!1));
                                        case 9:
                                        case "end":
                                            return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return x || 0 !== f.length ? Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { fontSize: "20px", color: "black", bold: !0, children: p("Step %num%", { num: 2 }) }), Object(P.jsx)(g.Q, { as: "h3", scale: "xl", mb: "24px", children: p("Set Profile Picture") }), Object(P.jsx)(g.s, { mb: "24px", children: Object(P.jsxs)(g.t, { children: [Object(P.jsx)(g.Q, { as: "h4", scale: "lg", mb: "8px", children: p("Choose collectible") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", children: p("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.") }), Object(P.jsxs)(g.Nb, { as: "p", color: "black", mb: "24px", children: [p("Only approved Pancake Collectibles can be used."), Object(P.jsx)(pe, { to: "/collectibles", style: { marginLeft: "4px" }, children: p("See the list >") })] }), Object(P.jsx)(Oe, { children: x ? Object(P.jsx)(g.Bb, { height: "80px", mb: "16px" }) : f.map((function(e) { var t = Object(S.a)(m[e.identifier], 1)[0],
                                            n = Object(le.a)(); return Object(P.jsx)(ce, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === u.tokenId, onChange: function(e) { return d.setSelectedNft(parseInt(e, 10), n) }, children: Object(P.jsx)(g.Nb, { bold: !0, children: e.name }) }, e.identifier) })) }), Object(P.jsx)(g.Q, { as: "h4", scale: "lg", mb: "8px", children: p("Allow collectible to be locked") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "16px", children: p("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.") }), Object(P.jsx)(g.p, { isLoading: s, disabled: c || s || null === u.tokenId, onClick: C, endIcon: s ? Object(P.jsx)(g.i, { spin: !0, color: "currentColor" }) : void 0, id: "approveStarterCollectible", children: p("Enable") })] }) }), Object(P.jsx)(re, { onClick: d.nextStep, disabled: null === u.tokenId || !c || s, children: p("Next Step") })] }) : Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Q, { scale: "xl", mb: "24px", children: p("Oops!") }), Object(P.jsx)(g.Nb, { bold: !0, fontSize: "20px", mb: "24px", children: p("We couldn\u2019t find any Pancake Collectibles in your wallet.") }), Object(P.jsx)(g.Nb, { as: "p", children: p("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.") })] }) },
                fe = n(973),
                me = n.n(fe),
                he = n(389),
                ve = function() { var e = ae(),
                        t = e.teamId,
                        n = e.actions,
                        c = Object(k.b)().t,
                        r = function() { var e = Object(x.c)((function(e) { return e.teams })),
                                t = e.isInitialized,
                                n = e.isLoading,
                                c = e.data,
                                r = Object(f.b)(); return Object(b.useEffect)((function() { r(Object(he.c)()) }), [r]), { teams: c, isInitialized: t, isLoading: n } }().teams,
                        a = function(e) { return n.setTeamId(parseInt(e, 10)) },
                        i = Object(b.useMemo)((function() { return me()(Object.values(r)) }), [r]); return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { fontSize: "20px", color: "black", bold: !0, children: c("Step %num%", { num: 3 }) }), Object(P.jsx)(g.Q, { as: "h3", scale: "xl", mb: "24px", children: c("Join a Team") }), Object(P.jsx)(g.Nb, { as: "p", mb: "24px", children: c("It won\u2019t be possible to undo the choice you make for the foreseeable future!") }), Object(P.jsx)(g.s, { mb: "24px", children: Object(P.jsxs)(g.t, { children: [Object(P.jsx)(g.Q, { as: "h4", scale: "lg", mb: "8px", children: c("Join a Team") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "24px", children: c("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!") }), i && i.map((function(e) { return Object(P.jsxs)(ce, { name: "teams-selection", value: e.id, isChecked: t === e.id, image: "/images/teams/".concat(e.images.md), onChange: a, disabled: !e.isJoinable, children: [Object(P.jsx)(g.Nb, { bold: !0, children: e.name }), Object(P.jsxs)(g.O, { children: [Object(P.jsx)(g.H, { mr: "8px" }), Object(P.jsx)(g.Nb, { children: e.users.toLocaleString() })] })] }, e.name) }))] }) }), Object(P.jsx)(re, { onClick: n.nextStep, disabled: null === t, children: c("Next Step") })] }) },
                ge = n(19),
                ke = n(14);

            function Ce(e, t) { Object(ke.a)(2, arguments); var n = Object(ge.default)(e),
                    c = Object(ge.default)(t),
                    r = n.getTime() - c.getTime(); return r < 0 ? -1 : r > 0 ? 1 : r } var ye = n(464),
                we = n(465),
                Se = n(466);

            function Ne(e) { Object(ke.a)(1, arguments); var t = Object(ge.default)(e); return Object(we.default)(t).getTime() === Object(Se.default)(t).getTime() }

            function Ae(e, t) { Object(ke.a)(2, arguments); var n, c = Object(ge.default)(e),
                    r = Object(ge.default)(t),
                    a = Ce(c, r),
                    i = Math.abs(Object(ye.default)(c, r)); if (i < 1) n = 0;
                else { 1 === c.getMonth() && c.getDate() > 27 && c.setDate(30), c.setMonth(c.getMonth() - a * i); var s = Ce(c, r) === -a;
                    Ne(Object(ge.default)(e)) && 1 === i && 1 === Ce(e, r) && (s = !1), n = a * (i - Number(s)) } return 0 === n ? 0 : n } var Ee = n(863),
                Ie = n(246),
                Te = n(406);

            function De(e) { return Object(Te.a)({}, e) } var Pe = n(124),
                Re = 1440,
                Qe = 43200;

            function Fe(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(ke.a)(2, arguments); var c = n.locale || Ie.a; if (!c.formatDistance) throw new RangeError("locale must contain formatDistance property"); var r = Ce(e, t); if (isNaN(r)) throw new RangeError("Invalid time value"); var a, i, s = De(n);
                s.addSuffix = Boolean(n.addSuffix), s.comparison = r, r > 0 ? (a = Object(ge.default)(t), i = Object(ge.default)(e)) : (a = Object(ge.default)(e), i = Object(ge.default)(t)); var o, l = Object(Ee.a)(i, a),
                    b = (Object(Pe.a)(i) - Object(Pe.a)(a)) / 1e3,
                    u = Math.round((l - b) / 60); if (u < 2) return n.includeSeconds ? l < 5 ? c.formatDistance("lessThanXSeconds", 5, s) : l < 10 ? c.formatDistance("lessThanXSeconds", 10, s) : l < 20 ? c.formatDistance("lessThanXSeconds", 20, s) : l < 40 ? c.formatDistance("halfAMinute", null, s) : l < 60 ? c.formatDistance("lessThanXMinutes", 1, s) : c.formatDistance("xMinutes", 1, s) : 0 === u ? c.formatDistance("lessThanXMinutes", 1, s) : c.formatDistance("xMinutes", u, s); if (u < 45) return c.formatDistance("xMinutes", u, s); if (u < 90) return c.formatDistance("aboutXHours", 1, s); if (u < Re) { var j = Math.round(u / 60); return c.formatDistance("aboutXHours", j, s) } if (u < 2520) return c.formatDistance("xDays", 1, s); if (u < Qe) { var d = Math.round(u / Re); return c.formatDistance("xDays", d, s) } if (u < 86400) return o = Math.round(u / Qe), c.formatDistance("aboutXMonths", o, s); if ((o = Ae(i, a)) < 12) { var p = Math.round(u / Qe); return c.formatDistance("xMonths", p, s) } var O = o % 12,
                    x = Math.floor(o / 12); return O < 3 ? c.formatDistance("aboutXYears", x, s) : O < 9 ? c.formatDistance("overXYears", x, s) : c.formatDistance("almostXYears", x + 1, s) } var ze, _e, Le, Me, We = n(709),
                Ue = n(87),
                Ve = n(177),
                qe = n(20),
                He = n(316),
                Ye = n.n(He),
                Be = n(144),
                Ge = n(157),
                Ke = function(e) { var t = e.account,
                        n = e.teamId,
                        c = e.selectedNft,
                        r = e.minimumCakeRequired,
                        a = e.allowance,
                        i = e.onDismiss,
                        s = Object(k.b)().t,
                        o = Object(Y.l)(),
                        l = Object(f.b)(),
                        b = Object(de.a)().toastSuccess,
                        u = Object(Y.c)(),
                        j = Object(K.a)().callWithGasPrice,
                        d = Object(H.a)({ onRequiresApproval: function() { var e = Object(w.a)(y.a.mark((function e() { var n; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, u.allowance(t, o.address);
                                            case 3:
                                                return n = e.sent, e.abrupt("return", n.gte(r));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return j(u, "approve", [o.address, a.toJSON()]) }, onConfirm: function() { return j(o, "createProfile", [n, c.nftAddress, c.tokenId]) }, onSuccess: function() { var e = Object(w.a)(y.a.mark((function e(n) { var c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return c = n.receipt, e.next = 3, l(Object(Be.c)(t));
                                            case 3:
                                                i(), b(s("Profile created!"), Object(P.jsx)(Ge.b, { txHash: c.transactionHash }));
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        p = d.isApproving,
                        O = d.isApproved,
                        x = d.isConfirmed,
                        m = d.isConfirming,
                        h = d.handleApprove,
                        v = d.handleConfirm; return Object(P.jsxs)(g.fb, { title: s("Complete Profile"), onDismiss: i, children: [Object(P.jsx)(g.Nb, { color: "black", mb: "8px", children: s("Submitting NFT to contract and confirming User Name and Team.") }), Object(P.jsxs)(g.O, { justifyContent: "space-between", mb: "16px", children: [Object(P.jsx)(g.Nb, { children: s("Cost") }), Object(P.jsx)(g.Nb, { children: s("%num% CAKE", { num: Object(E.formatUnits)(T) }) })] }), Object(P.jsx)(X.b, { isApproveDisabled: x || m || O, isApproving: p, isConfirmDisabled: !O || x, isConfirming: m, onApprove: h, onConfirm: v })] }) };! function(e) { e.IDLE = "idle", e.CREATED = "created", e.NEW = "new" }(Me || (Me = {})); var Xe, Je, Ze = v.e.div(ze || (ze = Object(h.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),
                $e = Object(v.e)(g.V)(_e || (_e = Object(h.a)(["\n  padding-right: 40px;\n"]))),
                et = Object(v.e)(g.O)(Le || (Le = Object(h.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),
                tt = function() { var e = Object(b.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = ae(),
                        a = r.teamId,
                        i = r.selectedNft,
                        s = r.userName,
                        o = r.actions,
                        l = r.minimumCakeRequired,
                        u = r.allowance,
                        d = Object(k.b)().t,
                        p = Object(j.c)().account,
                        O = Object(de.a)().toastError,
                        x = Object(qe.a)().library,
                        f = Object(b.useState)(Me.IDLE),
                        m = Object(S.a)(f, 2),
                        h = m[0],
                        v = m[1],
                        C = Object(b.useState)(!1),
                        N = Object(S.a)(C, 2),
                        A = N[0],
                        I = N[1],
                        D = Object(b.useState)(!1),
                        R = Object(S.a)(D, 2),
                        Q = R[0],
                        F = R[1],
                        z = Object(b.useState)(""),
                        _ = Object(S.a)(z, 2),
                        L = _[0],
                        M = _[1],
                        W = Object(B.e)(),
                        U = W.balance,
                        V = W.fetchStatus === B.a.SUCCESS && U.gte(T),
                        q = Object(g.fc)(Object(P.jsx)(Ke, { userName: s, selectedNft: i, account: p, teamId: a, minimumCakeRequired: l, allowance: u }), !1),
                        H = Object(S.a)(q, 1)[0],
                        Y = h === Me.CREATED,
                        G = Ye()(function() { var e = Object(w.a)(y.a.mark((function e(t) { var n, c, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, fetch("".concat(Ue.a, "/api/users/valid/").concat(t));
                                        case 4:
                                            if (!(n = e.sent).ok) { e.next = 10; break }
                                            I(!0), M(""), e.next = 15; break;
                                        case 10:
                                            return e.next = 12, n.json();
                                        case 12:
                                            r = e.sent, I(!1), M(null === r || void 0 === r || null === (c = r.error) || void 0 === c ? void 0 : c.message);
                                        case 15:
                                            return e.prev = 15, F(!1), e.finish(15);
                                        case 18:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, , 15, 18]
                                ]) }))); return function(t) { return e.apply(this, arguments) } }(), 200),
                        K = function() { var e = Object(w.a)(y.a.mark((function e() { var t, n, c, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, Object(Ve.c)(x, p, s);
                                        case 4:
                                            return t = e.sent, e.next = 7, fetch("".concat(Ue.a, "/api/users/register"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: p, username: s, signature: t }) });
                                        case 7:
                                            if (!(n = e.sent).ok) { e.next = 12; break }
                                            v(Me.CREATED), e.next = 16; break;
                                        case 12:
                                            return e.next = 14, n.json();
                                        case 14:
                                            r = e.sent, O(d("Error"), null === r || void 0 === r || null === (c = r.error) || void 0 === c ? void 0 : c.message);
                                        case 16:
                                            e.next = 21; break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(0), O((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) ? e.t0.message : JSON.stringify(e.t0));
                                        case 21:
                                            return e.prev = 21, F(!1), e.finish(21);
                                        case 24:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 18, 21, 24]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(b.useEffect)((function() { p && function() { var e = Object(w.a)(y.a.mark((function e() { var t, n, c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(Ue.a, "/api/users/").concat(p));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            n = e.sent, t.ok ? (c = Fe(Object(We.default)(n.created_at), new Date), M(d("Created %dateCreated% ago", { dateCreated: c })), o.setUserName(n.username), v(Me.CREATED), I(!0)) : v(Me.NEW), e.next = 13; break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), O(d("Error"), d("Unable to verify username"));
                                        case 13:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 10]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [p, v, I, M, o, O, d]), Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { fontSize: "20px", color: "black", bold: !0, children: d("Step %num%", { num: 4 }) }), Object(P.jsx)(g.Q, { as: "h3", scale: "xl", mb: "24px", children: d("Set Your Name") }), Object(P.jsx)(g.Nb, { as: "p", mb: "24px", children: d("This name will be shown in team leaderboards and search results as long as your profile is active.") }), Object(P.jsx)(g.s, { mb: "24px", children: Object(P.jsxs)(g.t, { children: [Object(P.jsx)(g.Q, { as: "h4", scale: "lg", mb: "8px", children: d("Set Your Name") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "24px", children: d("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.") }), h === Me.IDLE ? Object(P.jsx)(g.Bb, { height: "40px", width: "240px" }) : Object(P.jsxs)(Ze, { children: [Object(P.jsx)($e, { onChange: function(e) { var t = e.target.value;
                                            o.setUserName(t), G(t) }, isWarning: s && !A, isSuccess: s && A, minLength: 3, maxLength: 15, disabled: Y, placeholder: d("Enter your name..."), value: s }), Object(P.jsxs)(et, { children: [Q && Object(P.jsx)(g.i, { spin: !0 }), !Q && A && s && Object(P.jsx)(g.A, { color: "success" }), !Q && !A && s && Object(P.jsx)(g.Yb, { color: "failure" })] })] }), Object(P.jsx)(g.Nb, { color: "black", fontSize: "14px", py: "4px", mb: "16px", style: { minHeight: "30px" }, children: L }), Object(P.jsx)(g.Nb, { as: "p", color: "failure", mb: "8px", children: d("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.") }), Object(P.jsx)("label", { htmlFor: "checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(P.jsxs)(g.O, { alignItems: "center", children: [Object(P.jsx)("div", { style: { flex: "none" }, children: Object(P.jsx)(g.y, { id: "checkbox", scale: "sm", checked: n, onChange: function() { return c(!n) } }) }), Object(P.jsx)(g.Nb, { ml: "8px", children: d("I understand that people can view my wallet if they know my username") })] }) }), Object(P.jsx)(g.p, { onClick: K, disabled: !A || Y || Q || !n, children: d("Confirm") })] }) }), Object(P.jsx)(g.p, { onClick: H, disabled: !A || !Y, id: "completeProfileCreation", children: d("Complete Profile") }), !V && Object(P.jsx)(g.Nb, { color: "failure", mt: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(E.formatUnits)(T) }) })] }) },
                nt = function() { var e = Object(k.b)().t,
                        t = Object(b.useContext)(_),
                        n = t.isInitialized,
                        c = t.currentStep; return Object(j.c)().account ? n ? 0 === c ? Object(P.jsx)(se, {}) : 1 === c ? Object(P.jsx)(xe, {}) : 2 === c ? Object(P.jsx)(ve, {}) : 3 === c ? Object(P.jsx)(tt, {}) : null : Object(P.jsx)("div", { children: e("Loading...") }) : Object(P.jsx)(q, {}) },
                ct = function() { return Object(P.jsx)(L, { children: Object(P.jsxs)(d.b, { children: [Object(P.jsx)(U, {}), Object(P.jsx)(nt, {})] }) }) },
                rt = function() { var e = Object(b.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(b.useState)(1),
                        a = Object(S.a)(r, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(j.c)().account,
                        l = Object(b.useCallback)((function() { s((function(e) { return e + 1 })) }), [s]); return Object(b.useEffect)((function() { o && function() { var e = Object(w.a)(y.a.mark((function e() { var t, n; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(A.j)(), e.prev = 1, e.next = 4, t.canClaim(o);
                                        case 4:
                                            n = e.sent, c(n), e.next = 11; break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 8]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [o, i, c]), { canClaim: n, checkClaimStatus: l } },
                at = function(e) { var t = e.onSuccess,
                        n = e.onDismiss,
                        c = Object(b.useState)(!1),
                        r = Object(S.a)(c, 2),
                        a = r[0],
                        i = r[1],
                        s = Object(k.b)().t,
                        o = rt().canClaim,
                        l = Object(Y.d)(),
                        u = Object(de.a)(),
                        j = u.toastSuccess,
                        d = u.toastError,
                        p = Object(K.a)().callWithGasPrice,
                        O = function() { var e = Object(w.a)(y.a.mark((function e() { var c, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, p(l, "getCakeBack");
                                        case 2:
                                            return c = e.sent, i(!0), e.next = 6, c.wait();
                                        case 6:
                                            (r = e.sent).status ? (j(s("Success!"), Object(P.jsx)(Ge.b, { txHash: r.transactionHash })), t(), n()) : (i(!1), d(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(P.jsx)(g.fb, { title: s("Claim your Gift!"), onDismiss: n, children: Object(P.jsxs)("div", { style: { maxWidth: "640px" }, children: [Object(P.jsx)(g.Nb, { as: "p", children: s("Thank you for being a day-one user of Pancake Profiles!") }), Object(P.jsx)(g.Nb, { as: "p", mb: "8px", children: s("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!") }), Object(P.jsx)(g.Nb, { as: "p", children: s("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.") }), Object(P.jsx)(g.Nb, { as: "p", mb: "8px", children: s("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.") }), Object(P.jsx)(g.Nb, { as: "p", mb: "24px", children: s("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.") }), Object(P.jsx)(g.p, { endIcon: a ? Object(P.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, isLoading: a, onClick: O, disabled: !o, children: s("Claim Your CAKE") })] }) }) },
                it = v.e.div(Xe || (Xe = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.blackSubtle })),
                st = n(17);! function(e) { e.START = "start", e.CHANGE = "change", e.REMOVE = "remove", e.APPROVE = "approve" }(Je || (Je = {})); var ot, lt, bt, ut, jt, dt, pt, Ot, xt, ft, mt, ht, vt, gt, kt, Ct, yt = function(e, t) { switch (t.type) {
                        case "set_view":
                            return Object(N.a)(Object(N.a)({}, e), {}, { currentView: t.view, previousView: e.currentView });
                        case "go_previous":
                            return Object(N.a)(Object(N.a)({}, e), {}, { currentView: e.previousView, previousView: e.currentView });
                        default:
                            return e } },
                wt = function() { var e = Object(b.useReducer)(yt, { currentView: Je.START, previousView: null }),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1]; return Object(N.a)(Object(N.a)({}, n), {}, { goToStart: function() { return c({ type: "set_view", view: Je.START }) }, goToChange: function() { return c({ type: "set_view", view: Je.CHANGE }) }, goToRemove: function() { return c({ type: "set_view", view: Je.REMOVE }) }, goToApprove: function() { return c({ type: "set_view", view: Je.APPROVE }) }, goPrevious: function() { return c({ type: "go_previous" }) } }) },
                St = n(86),
                Nt = n(64),
                At = n(53),
                Et = n(244),
                It = function() { var e = Object(k.b)().t,
                        t = Object(b.useState)({ numberCakeToReactivate: Nt.a.BigNumber.from(0), numberCakeToRegister: Nt.a.BigNumber.from(0), numberCakeToUpdate: Nt.a.BigNumber.from(0) }),
                        n = Object(S.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        a = Object(de.a)().toastError; return Object(b.useEffect)((function() {
                        (function() { var t = Object(w.a)(y.a.mark((function t() { var n, c, i, s, o, l, b, u, j; return y.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, n = ["numberCakeToReactivate", "numberCakeToRegister", "numberCakeToUpdate"].map((function(e) { return { address: Object(be.o)(), name: e } })), t.next = 4, Object(At.b)(Et, n);
                                        case 4:
                                            c = t.sent, i = Object(S.a)(c, 3), s = Object(S.a)(i[0], 1), o = s[0], l = Object(S.a)(i[1], 1), b = l[0], u = Object(S.a)(i[2], 1), j = u[0], r({ numberCakeToReactivate: o, numberCakeToRegister: b, numberCakeToUpdate: j }), t.next = 18; break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), a(e("Error"), e("Could not retrieve CAKE costs for profile"));
                                        case 18:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 15]
                                ]) }))); return function() { return t.apply(this, arguments) } })()() }), [r, a, e]), c },
                Tt = n(794),
                Dt = Object(v.e)(g.p).attrs({ variant: "secondary" })(ot || (ot = Object(h.a)(["\n  border-color: ", ";\n  color: ", ";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ", ";\n    opacity: 0.8;\n  }\n"])), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure })),
                Pt = v.e.div(lt || (lt = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Rt = function(e) { var t = e.goToApprove,
                        n = e.goToChange,
                        c = e.goToRemove,
                        r = e.onDismiss,
                        a = Object(b.useState)(null),
                        i = Object(S.a)(a, 2),
                        s = i[0],
                        o = i[1],
                        l = Object(O.c)().profile,
                        u = It(),
                        d = u.numberCakeToUpdate,
                        p = u.numberCakeToReactivate,
                        x = l.isActive ? d : p,
                        f = Object(B.e)(),
                        m = f.balance,
                        h = f.fetchStatus === B.a.SUCCESS && m.gte(x),
                        v = Object(k.b)().t,
                        C = Object(j.c)().account,
                        N = Object(Y.c)(),
                        A = l.isActive ? d : p; return Object(b.useEffect)((function() { C && function() { var e = Object(w.a)(y.a.mark((function e() { var t; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, N.allowance(C, Object(be.o)());
                                        case 2:
                                            t = e.sent, o(t.lt(A));
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [C, A, o, N]), l ? Object(P.jsxs)(g.O, { alignItems: "center", justifyContent: "center", flexDirection: "column", children: [Object(P.jsx)(Pt, { children: Object(P.jsx)(Tt.a, { profile: l }) }), Object(P.jsx)(g.O, { alignItems: "center", style: { height: "48px" }, justifyContent: "center", children: Object(P.jsx)(g.Nb, { as: "p", color: "failure", children: !h && v("%minimum% CAKE required to change profile pic", { minimum: Object(St.a)(x) }) }) }), l.isActive ? Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.p, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Change Profile Pic") }), Object(P.jsx)(Dt, { width: "100%", onClick: c, children: v("Remove Profile Pic") })] }) : Object(P.jsx)(g.p, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Reactivate Profile") }), Object(P.jsx)(g.p, { variant: "text", width: "100%", onClick: r, children: v("Close Window") })] }) : null },
                Qt = function(e) { var t = e.onDismiss,
                        n = Object(b.useState)(!1),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        a = c[1],
                        i = Object(b.useState)(!1),
                        s = Object(S.a)(i, 2),
                        o = s[0],
                        l = s[1],
                        u = Object(O.c)().profile,
                        d = It().numberCakeToReactivate,
                        p = Object(k.b)().t,
                        x = Object(Y.l)(),
                        m = Object(K.a)().callWithGasPrice,
                        h = Object(j.c)().account,
                        v = Object(de.a)(),
                        C = v.toastSuccess,
                        N = v.toastError,
                        A = Object(f.b)(),
                        E = function() { var e = Object(w.a)(y.a.mark((function e() { var n, c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, m(x, "pauseProfile");
                                        case 2:
                                            return n = e.sent, l(!0), e.next = 6, n.wait();
                                        case 6:
                                            if (!(c = e.sent).status) { e.next = 14; break } return e.next = 10, A(Object(Be.c)(h));
                                        case 10:
                                            C(p("Profile Paused!"), Object(P.jsx)(Ge.b, { txHash: c.transactionHash })), t(), e.next = 16; break;
                                        case 14:
                                            N(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), l(!1);
                                        case 16:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return u ? Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { as: "p", color: "failure", mb: "24px", children: p("This will suspend your profile and send your Collectible back to your wallet") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "24px", children: p("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "24px", children: p("Cost to reactivate in the future: %cost% CAKE", { cost: Object(St.a)(d) }) }), Object(P.jsx)("label", { htmlFor: "acknowledgement", style: { cursor: "pointer", display: "block", marginBottom: "24px" }, children: Object(P.jsxs)(g.O, { alignItems: "center", children: [Object(P.jsx)(g.y, { id: "acknowledgement", checked: r, onChange: function() { return a(!r) }, scale: "sm" }), Object(P.jsx)(g.Nb, { ml: "8px", children: p("I understand") })] }) }), Object(P.jsx)(g.p, { width: "100%", isLoading: o, endIcon: o ? Object(P.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: !r || o, onClick: E, mb: "8px", children: p("Confirm") }), Object(P.jsx)(g.p, { variant: "text", width: "100%", onClick: t, children: p("Close Window") })] }) : null },
                Ft = function(e) { var t = e.onDismiss,
                        n = Object(b.useState)({ tokenId: null, nftAddress: null }),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        a = c[1],
                        i = Object(k.b)().t,
                        s = je(),
                        o = s.isLoading,
                        l = s.tokenIds,
                        u = s.nftsInWallet,
                        d = Object(f.b)(),
                        p = Object(O.c)().profile,
                        x = Object(Y.l)(),
                        m = Object(j.c)(),
                        h = m.account,
                        v = m.library,
                        C = Object(de.a)().toastSuccess,
                        N = Object(K.a)().callWithGasPrice,
                        E = Object(H.a)({ onApprove: function() { var e = Object(A.l)(r.nftAddress, v.getSigner()); return N(e, "approve", [Object(be.o)(), r.tokenId]) }, onConfirm: function() { return p.isActive ? N(x, "updateProfile", [r.nftAddress, r.tokenId]) : N(x, "reactivateProfile", [r.nftAddress, r.tokenId]) }, onSuccess: function() { var e = Object(w.a)(y.a.mark((function e(n) { var c; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return c = n.receipt, e.next = 3, d(Object(Be.c)(h));
                                            case 3:
                                                C(i("Profile Updated!"), Object(P.jsx)(Ge.b, { txHash: c.transactionHash })), t();
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        I = E.isApproving,
                        T = E.isApproved,
                        D = E.isConfirmed,
                        R = E.isConfirming,
                        Q = E.handleApprove,
                        F = E.handleConfirm; return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "24px", children: i("Choose a new Collectible to use as your profile pic.") }), o ? Object(P.jsx)(g.Bb, { height: "80px", mb: "16px" }) : u.map((function(e) { var t = Object(S.a)(l[e.identifier], 1)[0]; return Object(P.jsx)(ce, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === r.tokenId, onChange: function(e) { a({ tokenId: Number(e), nftAddress: Object(le.a)() }) }, disabled: I || R || D, children: Object(P.jsx)(g.Nb, { bold: !0, children: e.name }) }, e.identifier) })), !o && 0 === u.length && Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "16px", children: i("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!") }), Object(P.jsx)(g.Nb, { as: "p", color: "black", mb: "24px", children: i("Make sure you have a Pancake Collectible in your wallet and try again!") })] }), Object(P.jsx)(X.b, { isApproveDisabled: D || R || T || null === r.tokenId, isApproving: I, isConfirmDisabled: !T || D || null === r.tokenId, isConfirming: R, onApprove: Q, onConfirm: F }), Object(P.jsx)(g.p, { variant: "text", width: "100%", onClick: t, disabled: I || R, children: i("Close Window") })] }) },
                zt = function(e) { var t = e.goToChange,
                        n = e.onDismiss,
                        c = Object(b.useState)(!1),
                        r = Object(S.a)(c, 2),
                        a = r[0],
                        i = r[1],
                        s = Object(O.c)().profile,
                        o = Object(k.b)().t,
                        l = It(),
                        u = l.numberCakeToUpdate,
                        j = l.numberCakeToReactivate,
                        d = Object(Y.c)(),
                        p = Object(de.a)().toastError,
                        x = s.isActive ? u : j,
                        f = function() { var e = Object(w.a)(y.a.mark((function e() { var n; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.approve(Object(be.o)(), x.mul(2).toString());
                                        case 2:
                                            return n = e.sent, i(!0), e.next = 6, n.wait();
                                        case 6:
                                            e.sent.status ? t() : (p(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), i(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return s ? Object(P.jsxs)(g.O, { flexDirection: "column", children: [Object(P.jsxs)(g.O, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(P.jsx)(g.Nb, { children: s.isActive ? o("Cost to update:") : o("Cost to reactivate:") }), Object(P.jsxs)(g.Nb, { children: [Object(St.a)(x), " CAKE"] })] }), Object(P.jsx)(g.p, { disabled: a, isLoading: a, endIcon: a ? Object(P.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, width: "100%", mb: "8px", onClick: f, children: o("Enable") }), Object(P.jsx)(g.p, { variant: "text", width: "100%", onClick: n, disabled: a, children: o("Close Window") })] }) : null },
                _t = (bt = {}, Object(st.a)(bt, Je.START, "Edit Profile"), Object(st.a)(bt, Je.CHANGE, "Change Profile Pic"), Object(st.a)(bt, Je.REMOVE, "Remove Profile Pic"), Object(st.a)(bt, Je.APPROVE, "Enable CAKE"), bt),
                Lt = function(e) { var t = e.onDismiss,
                        n = wt(),
                        c = n.currentView,
                        r = n.goToChange,
                        a = n.goToRemove,
                        i = n.goToApprove,
                        s = n.goPrevious,
                        o = Object(k.b)().t,
                        l = _t[c],
                        b = c === Je.START,
                        u = b ? null : function() { return s() }; return Object(P.jsx)(g.fb, { title: o(l), onBack: u, onDismiss: t, hideCloseButton: !b, children: Object(P.jsxs)("div", { style: { maxWidth: "400px" }, children: [c === Je.START && Object(P.jsx)(Rt, { goToApprove: i, goToChange: r, goToRemove: a, onDismiss: t }), c === Je.REMOVE && Object(P.jsx)(Qt, { onDismiss: t }), c === Je.CHANGE && Object(P.jsx)(Ft, { onDismiss: t }), c === Je.APPROVE && Object(P.jsx)(zt, { goToChange: r, onDismiss: t })] }) }) },
                Mt = function() { var e = Object(k.b)().t,
                        t = rt(),
                        n = t.canClaim,
                        c = t.checkClaimStatus,
                        r = Object(g.fc)(Object(P.jsx)(at, { onSuccess: c })),
                        a = Object(S.a)(r, 1)[0],
                        i = Object(g.fc)(Object(P.jsx)(Lt, {}), !1),
                        s = Object(S.a)(i, 1)[0],
                        o = Object(O.c)().hasProfile; return Object(P.jsx)(it, { children: Object(P.jsxs)(g.O, { flexDirection: ["column", null, "row"], alignItems: ["start", null, "center"], justifyContent: "space-between", children: [Object(P.jsxs)("div", { children: [Object(P.jsx)(g.Q, { as: "h1", scale: "xxl", mb: "8px", color: "dark", children: e("Your Profile") }), Object(P.jsx)(g.Q, { as: "h2", scale: "lg", mb: "16px", children: e("Check your stats and collect achievements") }), o && Object(P.jsx)(g.p, { onClick: s, children: e("Edit Profile") })] }), n && Object(P.jsx)(g.p, { variant: "tertiary", onClick: a, startIcon: Object(P.jsx)(g.tb, {}), children: e("You\u2019ve got a gift to claim!") })] }) }) },
                Wt = ["badge"],
                Ut = Object(v.e)(g.o)(ut || (ut = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Vt = v.e.img(jt || (jt = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                qt = function(e) { var t = e.badge,
                        n = Object(J.a)(e, Wt); return t ? Object(P.jsx)(Vt, Object(N.a)({ src: "/images/achievements/".concat(t), alt: "achievement badge" }, n)) : Object(P.jsx)(Ut, {}) },
                Ht = ["title"],
                Yt = function(e) { var t = e.title,
                        n = Object(J.a)(e, Ht),
                        c = Object(k.b)().t; if ("string" === typeof t) return Object(P.jsx)(g.Nb, Object(N.a)(Object(N.a)({ bold: !0 }, n), {}, { children: t })); var r = t.key,
                        a = t.data,
                        i = void 0 === a ? {} : a; return Object(P.jsx)(g.Nb, Object(N.a)(Object(N.a)({ bold: !0 }, n), {}, { children: c(r, i) })) },
                Bt = ["description"],
                Gt = Object(v.e)(g.Nb).attrs({ as: "p", fontSize: "14px" })(dt || (dt = Object(h.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Kt = function(e) { var t = e.description,
                        n = Object(J.a)(e, Bt),
                        c = Object(k.b)().t; if (!t) return null; if ("string" === typeof t) return Object(P.jsx)(g.Nb, Object(N.a)(Object(N.a)({ as: "p", color: "black", fontSize: "14px" }, n), {}, { children: t })); var r = t.key,
                        a = t.data,
                        i = void 0 === a ? {} : a; return Object(P.jsx)(Gt, Object(N.a)(Object(N.a)({ color: "black" }, n), {}, { children: c(r, i) })) },
                Xt = Object(v.e)(g.O)(pt || (pt = Object(h.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),
                Jt = function(e) { var t = e.achievement; return Object(P.jsxs)(g.O, { children: [Object(P.jsx)(qt, { badge: t.badge }), Object(P.jsxs)(Xt, { children: [Object(P.jsx)(Yt, { title: t.title }), Object(P.jsx)(Kt, { description: t.description })] }), Object(P.jsxs)(g.O, { alignItems: "center", children: [Object(P.jsx)(g.ub, { width: "18px", color: "black", mr: "4px" }), Object(P.jsx)(g.Nb, { color: "black", children: t.points.toLocaleString() })] })] }) },
                Zt = v.e.div(Ot || (Ot = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                $t = function() { var e = Object(k.b)().t,
                        t = Object(x.c)((function(e) { return e.achievements.data })); return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(Zt, { children: t.map((function(e) { return Object(P.jsx)(Jt, { achievement: e }, e.id) })) }), 0 === t.length && Object(P.jsx)(g.O, { alignItems: "center", justifyContent: "center", style: { height: "64px" }, children: Object(P.jsx)(g.Q, { as: "h5", scale: "md", color: "textDisabled", children: e("No achievements yet!") }) })] }) },
                en = n(121),
                tn = n(322),
                nn = v.e.div(xt || (xt = Object(h.a)(["\n  flex: none;\n  width: 100%;\n\n  ", " {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                cn = ["points"],
                rn = function(e) { var t = e.points,
                        n = Object(J.a)(e, cn),
                        c = Object(k.b)().t,
                        r = t.toLocaleString(); return Object(P.jsxs)(g.O, Object(N.a)(Object(N.a)({ alignItems: "center" }, n), {}, { children: [Object(P.jsx)(g.ub, { mr: "4px", color: "black" }), Object(P.jsx)(g.Nb, { color: "black", children: c("%num% points", { num: r }) })] })) },
                an = Object(v.e)(g.O)(ft || (ft = Object(h.a)(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                sn = v.e.div(mt || (mt = Object(h.a)(["\n  flex: 1;\n"]))),
                on = Object(v.e)(g.O)(ht || (ht = Object(h.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                ln = function(e) { var t = e.achievement,
                        n = e.onCollectSuccess,
                        c = Object(b.useState)(!1),
                        r = Object(S.a)(c, 2),
                        a = r[0],
                        i = r[1],
                        s = Object(k.b)().t,
                        o = Object(Y.k)(),
                        l = Object(de.a)(),
                        u = l.toastError,
                        j = l.toastSuccess,
                        d = Object(K.a)().callWithGasPrice,
                        p = function() { var e = Object(w.a)(y.a.mark((function e() { var c, r; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d(o, "getPoints", [t.address]);
                                        case 2:
                                            return c = e.sent, i(!0), e.next = 6, c.wait();
                                        case 6:
                                            (r = e.sent).status ? (i(!1), n(t), j(s("Points Collected!"), Object(P.jsx)(Ge.b, { txHash: r.transactionHash }))) : (u(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")), i(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(P.jsxs)(an, { children: [Object(P.jsx)(qt, { badge: t.badge }), Object(P.jsxs)(on, { children: [Object(P.jsxs)(sn, { children: [Object(P.jsx)(Yt, { title: t.title }), Object(P.jsx)(Kt, { description: t.description })] }), Object(P.jsx)(rn, { points: t.points, px: [0, null, null, "32px"], mb: ["16px", null, null, 0] }), Object(P.jsx)(nn, { children: Object(P.jsx)(g.p, { onClick: p, isLoading: a, endIcon: a ? Object(P.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: a, variant: "secondary", children: s("Collect") }) })] })] }) },
                bn = function() { var e = Object(b.useState)([]),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(k.b)().t,
                        a = Object(f.b)(),
                        i = Object(O.c)().profile,
                        s = Object(j.c)().account;
                    Object(b.useEffect)((function() { s && function() { var e = Object(w.a)(y.a.mark((function e() { var t; return y.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(tn.c)(s);
                                        case 2:
                                            t = e.sent, c(t);
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [s, a, c]); var o = function(e) { a(Object(m.a)(e)), a(Object(Be.a)(e.points)), c((function(t) { return t.filter((function(t) { return t.id !== e.id })) })) }; if (!(null === i || void 0 === i ? void 0 : i.isActive)) return null; if (0 === n.length) return null; var l = Object(en.sumBy)(n, "points"); return Object(P.jsxs)(g.s, { isActive: !0, mb: "32px", children: [Object(P.jsx)(g.v, { children: Object(P.jsx)(g.O, { flexDirection: ["column", null, "row"], justifyContent: ["start", null, "space-between"], children: Object(P.jsxs)(g.O, { alignItems: "center", mb: ["16px", null, 0], children: [Object(P.jsx)(g.ub, { width: "32px", mr: "8px" }), Object(P.jsx)(g.Q, { scale: "lg", children: r("%num% Points to Collect", { num: l }) })] }) }) }), Object(P.jsx)(g.t, { children: n.map((function(e) { return Object(P.jsx)(ln, { achievement: e, onCollectSuccess: o }, e.address) })) })] }) },
                un = function(e) { var t = e.children,
                        n = Object(k.b)().t; return Object(P.jsxs)(g.O, { flexDirection: "column", alignItems: "center", justifyContent: "center", p: "24px", children: [Object(P.jsx)(g.o, { width: "72px", height: "72px" }), Object(P.jsx)(g.Q, { as: "h5", scale: "md", color: "textDisabled", children: t || n("Coming Soon!") })] }) },
                jn = function(e) { var t = e.activeIndex,
                        n = void 0 === t ? 0 : t,
                        c = Object(k.b)().t; return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.O, { mb: "24px", children: Object(P.jsx)(oe.a, { to: "/teams", children: Object(P.jsxs)(g.O, { alignItems: "center", children: [Object(P.jsx)(g.C, { color: "darkgreen" }), Object(P.jsx)(g.Nb, { color: "darkgreen", children: c("Teams Overview") })] }) }) }), Object(P.jsx)(g.O, { mb: "24px", justifyContent: "center", children: Object(P.jsxs)(g.q, { activeIndex: n, variant: "subtle", scale: "sm", children: [Object(P.jsx)(g.r, { as: oe.a, to: "/profile/tasks", children: c("Task Center") }), Object(P.jsx)(g.r, { as: oe.a, to: "/profile", children: c("Public Profile") })] }) })] }) },
                dn = function() { var e = Object(k.b)().t; return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(jn, {}), Object(P.jsx)(bn, {}), Object(P.jsxs)(g.s, { mb: "32px", children: [Object(P.jsx)(g.v, { children: Object(P.jsx)(g.O, { alignItems: "center", justifyContent: "space-between", children: Object(P.jsxs)("div", { children: [Object(P.jsx)(g.Q, { scale: "lg", mb: "8px", children: e("Achievements") }), Object(P.jsx)(g.Nb, { as: "p", children: e("Earn more points for completing larger quests!") })] }) }) }), Object(P.jsx)(g.t, { children: Object(P.jsx)($t, {}) })] }), Object(P.jsxs)(g.s, { mb: "32px", children: [Object(P.jsx)(g.v, { children: Object(P.jsx)(g.O, { alignItems: "center", justifyContent: "space-between", children: Object(P.jsxs)("div", { children: [Object(P.jsx)(g.Q, { scale: "lg", mb: "8px", children: e("Task Center") }), Object(P.jsx)(g.Nb, { as: "p", children: e("Earn points by completing regular tasks!") }), Object(P.jsx)(g.Nb, { as: "p", children: e("Collecting points for these tasks makes them available again.") })] }) }) }), Object(P.jsx)(g.t, { children: Object(P.jsx)(un, {}) })] })] }) },
                pn = n(47),
                On = n(37),
                xn = Object(v.e)(g.v)(vt || (vt = Object(h.a)(["\n  background: ", ";\n  position: relative;\n"])), (function(e) { return function(e) { return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #05052b 0%, #EFF4F5 46.87%, #F3EFFF 100%)" }(e.theme) })),
                fn = v.e.img(gt || (gt = Object(h.a)(["\n  border-radius: 4px;\n  margin-bottom: 8px;\n"]))),
                mn = function(e) { var t = e.nft; return Object(P.jsxs)("div", { children: [Object(P.jsx)(fn, { src: "/images/nfts/".concat(t.images.lg) }), Object(P.jsx)(g.Nb, { bold: !0, mb: "8px", children: t.name }), Object(P.jsx)(g.Nb, { as: "p", fontSize: "12px", color: "black", children: t.description })] }) },
                hn = v.e.div(kt || (kt = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 16px 0;\n\n  ", " {\n    grid-gap: 24px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 24px 0;\n  }\n\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg })),
                vn = function() { var e = Object(k.b)().t,
                        t = je().nftsInWallet; return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(g.Q, { as: "h4", scale: "md", mb: "8px", children: e("Pancake Collectibles") }), Object(P.jsx)(g.Nb, { as: "p", children: e("Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.") }), Object(P.jsx)(g.Nb, { as: "p", children: e("NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.") }), t.length > 0 && Object(P.jsx)(hn, { children: t.map((function(e) { return Object(P.jsx)(mn, { nft: e }, e.identifier) })) }), 0 === t.length && Object(P.jsx)(g.O, { justifyContent: "center", p: "32px", children: Object(P.jsx)(g.Nb, { fontSize: "20px", bold: !0, color: "textDisabled", children: e("No NFTs Found") }) }), Object(P.jsxs)(g.O, { alignItems: "center", justifyContent: "flex-end", children: [Object(P.jsx)(oe.a, { to: "/collectibles", children: e("See all approved Pancake Collectibles") }), Object(P.jsx)(g.D, {})] })] }) },
                gn = Object(v.e)(g.Nb)(Ct || (Ct = Object(h.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.tertiary }));
            gn.defaultProps = { p: "24px" }; var kn, Cn, yn, wn, Sn, Nn, An, En, In, Tn = gn,
                Dn = ["icon", "title", "subtitle", "isDisabled"],
                Pn = function(e) { var t = e.icon,
                        n = e.title,
                        c = e.subtitle,
                        r = e.isDisabled,
                        a = void 0 !== r && r,
                        i = Object(J.a)(e, Dn); return Object(P.jsx)(Tn, Object(N.a)(Object(N.a)({}, i), {}, { children: Object(P.jsxs)(g.O, { alignItems: "start", children: [Object(P.jsx)(t, { width: "44px", mr: "24px", color: a ? "textDisabled" : "currentColor" }), Object(P.jsxs)("div", { children: [Object(P.jsx)(g.Q, { as: "h3", scale: "xl", color: a ? "textDisabled" : "text", children: n }), Object(P.jsx)(g.Nb, { textTransform: "uppercase", color: a ? "textDisabled" : "textSubtle", fontSize: "12px", bold: !0, children: c })] })] }) })) },
                Rn = v.e.div(kn || (kn = Object(h.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  background-size: 24px;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 3;\n\n  ", " {\n    background-size: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Qn = v.e.div(Cn || (Cn = Object(h.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), Rn),
                Fn = v.e.div(yn || (yn = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                zn = function(e) { var t = e.profile,
                        n = Object(g.fc)(Object(P.jsx)(Lt, {}), !1),
                        c = Object(S.a)(n, 1)[0]; return Object(P.jsxs)(Qn, { onClick: c, children: [Object(P.jsx)(Fn, { children: Object(P.jsx)(Tt.a, { profile: t }) }), Object(P.jsx)(Rn, {})] }) },
                _n = v.e.div(wn || (wn = Object(h.a)(["\n  flex: 1;\n  padding: 16px 0;\n\n  ", " {\n    padding: 0 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ln = Object(v.e)(g.Q)(Sn || (Sn = Object(h.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n\n  ", " {\n    font-size: 40px;\n    line-height: 44px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Mn = v.e.div(Nn || (Nn = Object(h.a)(["\n  position: absolute;\n  right: 24px;\n  top: 24px;\n"]))),
                Wn = Object(v.e)(g.Nb)(An || (An = Object(h.a)(["\n  font-size: 12px;\n\n  ", " {\n    font-size: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Un = Object(v.e)(g.Y)(En || (En = Object(h.a)(["\n  display: inline-block;\n  font-weight: 400;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n  white-space: nowrap;\n\n  ", " {\n    font-size: 16px;\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Vn = v.e.div(In || (In = Object(h.a)(["\n  margin-bottom: 40px;\n"]))),
                qn = function() { var e = Object(j.c)().account,
                        t = Object(O.c)().profile,
                        n = Object(pn.p)(),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        a = c[1],
                        i = Object(k.b)().t; if (!e) return Object(P.jsx)(q, {}); var s = t.username,
                        o = t.team,
                        l = t.isActive,
                        b = t.points,
                        u = r ? g.Vb : g.Wb; return Object(P.jsxs)(P.Fragment, { children: [Object(P.jsx)(jn, { activeIndex: 1 }), Object(P.jsx)("div", { children: Object(P.jsxs)(g.s, { children: [Object(P.jsxs)(xn, { children: [Object(P.jsxs)(g.O, { alignItems: ["start", null, "center"], flexDirection: ["column", null, "row"], children: [Object(P.jsx)(zn, { profile: t }), Object(P.jsxs)(_n, { children: [Object(P.jsxs)(g.O, { alignItems: "center", children: [Object(P.jsxs)(Ln, { children: ["@", r ? s : s.replace(/./g, "*")] }), Object(P.jsx)(u, { ml: "4px", onClick: function() { a(!r) }, cursor: "pointer" })] }), Object(P.jsx)(g.O, { alignItems: "center", children: Object(P.jsxs)(Un, { href: Object(On.e)(e, "address"), color: "black", external: !0, children: [e, Object(P.jsx)(g.pb, { ml: "4px" })] }) }), Object(P.jsx)(Wn, { bold: !0, children: o.name })] })] }), Object(P.jsx)(Mn, { children: l ? Object(P.jsx)(g.Lb, { startIcon: Object(P.jsx)(g.z, { width: "18px" }), outline: !0, children: i("Active") }) : Object(P.jsx)(g.Lb, { variant: "failure", startIcon: Object(P.jsx)(g.l, { width: "18px" }), outline: !0, children: i("Paused") }) })] }), Object(P.jsxs)(g.t, { children: [Object(P.jsx)(Pn, { icon: g.ub, title: b, subtitle: i("Points"), mb: "24px" }), Object(P.jsxs)(Vn, { children: [Object(P.jsx)(g.Q, { as: "h4", scale: "md", mb: "16px", children: i("Achievements") }), Object(P.jsx)($t, {})] }), Object(P.jsx)(vn, {})] })] }) })] }) };
            t.default = function() { var e = Object(O.c)(),
                    t = e.isInitialized,
                    n = e.isLoading,
                    c = e.hasProfile,
                    r = Object(j.c)().account; return function() { var e = Object(j.c)().account,
                        t = Object(f.b)();
                    Object(b.useEffect)((function() { e && t(Object(m.c)(e)) }), [e, t]) }(), !t || n ? Object(P.jsx)(p.a, {}) : r && !c ? Object(P.jsx)(d.b, { children: Object(P.jsx)(ct, {}) }) : Object(P.jsxs)(d.b, { children: [Object(P.jsx)(Mt, {}), Object(P.jsx)(u.b, { exact: !0, path: "/profile", children: Object(P.jsx)(qn, {}) }), Object(P.jsx)(u.b, { path: "/profile/tasks", children: Object(P.jsx)(dn, {}) })] }) } }, 768: function(e, t, n) { "use strict"; var c = n(3),
                r = n.n(c),
                a = n(12),
                i = n(11),
                s = n(6),
                o = n(0),
                l = n(121),
                b = n(83),
                u = n(170),
                j = n(21),
                d = { approvalState: "idle", confirmState: "idle" },
                p = function(e, t) { switch (t.type) {
                        case "requires_approval":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e } };
            t.a = function(e) { var t = e.onApprove,
                    n = e.onConfirm,
                    c = e.onRequiresApproval,
                    s = e.onSuccess,
                    O = void 0 === s ? l.noop : s,
                    x = e.onApproveSuccess,
                    f = void 0 === x ? l.noop : x,
                    m = Object(j.b)().t,
                    h = Object(b.c)().account,
                    v = Object(o.useReducer)(p, d),
                    g = Object(i.a)(v, 2),
                    k = g[0],
                    C = g[1],
                    y = Object(o.useRef)(c),
                    w = Object(u.a)().toastError; return Object(o.useEffect)((function() { h && y.current && y.current().then((function(e) { e && C({ type: "requires_approval" }) })) }), [h, y, C]), { isApproving: "loading" === k.approvalState, isApproved: "success" === k.approvalState, isConfirming: "loading" === k.confirmState, isConfirmed: "success" === k.confirmState, handleApprove: function() { var e = Object(a.a)(r.a.mark((function e() { var n, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, C({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (c = e.sent).status && (C({ type: "approve_receipt" }), f({ state: k, receipt: c })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), C({ type: "approve_error" }), w(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }(), handleConfirm: function() { var e = Object(a.a)(r.a.mark((function e() { var t, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return C({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (c = e.sent).status && (C({ type: "confirm_receipt" }), O({ state: k, receipt: c })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), C({ type: "confirm_error" }), w(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }() } } }, 769: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return s })); var c, r, a, i, s, o = n(13),
                l = (n(0), n(7)),
                b = n(2),
                u = n(21),
                j = n(1);! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(s || (s = {})); var d = l.e.div(c || (c = Object(o.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = Object(l.e)(b.p)(r || (r = Object(o.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = { width: "24px", color: "textDisabled" },
                x = Object(l.e)(b.D).attrs(O)(a || (a = Object(o.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = Object(l.e)(b.B).attrs(O)(i || (i = Object(o.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = Object(j.jsx)(b.i, { spin: !0, color: "currentColor" });
            t.b = function(e) { var t = e.isApproveDisabled,
                    n = e.isApproving,
                    c = e.isConfirming,
                    r = e.isConfirmDisabled,
                    a = e.onApprove,
                    i = e.onConfirm,
                    o = e.buttonArrangement,
                    l = void 0 === o ? s.ROW : o,
                    O = e.confirmLabel,
                    h = e.confirmId,
                    v = Object(u.b)().t,
                    g = null !== O && void 0 !== O ? O : v("Confirm"); return l === s.ROW ? Object(j.jsxs)(d, { children: [Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { disabled: t, onClick: a, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }), Object(j.jsxs)(b.O, { justifyContent: "center", children: [Object(j.jsx)(x, {}), Object(j.jsx)(f, {})] }), Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { id: h, onClick: i, disabled: r, isLoading: c, endIcon: c ? m : void 0, children: c ? v("Confirming") : g }) })] }) : Object(j.jsx)(j.Fragment, { children: t ? Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { id: h, onClick: i, disabled: r, isLoading: c, endIcon: c ? m : void 0, children: c ? v("Confirming") : g }) }) : Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { onClick: a, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }) }) } }, 794: function(e, t, n) { "use strict"; var c, r, a, i = n(13),
                s = (n(0), n(2)),
                o = n(7),
                l = n(1),
                b = o.e.img(c || (c = Object(i.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                u = o.e.div(r || (r = Object(i.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                j = Object(o.e)(s.nb)(a || (a = Object(i.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, c = e.profile; return Object(l.jsxs)(u, { bg: "/images/nfts/".concat(null === (t = c.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!c.isActive && Object(l.jsx)(j, {}), Object(l.jsx)(b, { src: "/images/teams/".concat(c.team.images.alt), alt: c.team.name })] }) } }, 795: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return a })); var c = n(19),
                r = n(14);

            function a(e, t) { Object(r.a)(2, arguments); var n = Object(c.default)(e),
                    a = Object(c.default)(t); return n.getTime() - a.getTime() } }, 863: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return a })); var c = n(795),
                r = n(14);

            function a(e, t) { Object(r.a)(2, arguments); var n = Object(c.a)(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) } }, 864: function(e, t, n) { var c = n(458);
            e.exports = function(e, t) { var n = -1,
                    r = e.length,
                    a = r - 1; for (t = void 0 === t ? r : t; ++n < t;) { var i = c(n, a),
                        s = e[i];
                    e[i] = e[n], e[n] = s } return e.length = t, e } }, 973: function(e, t, n) { var c = n(974),
                r = n(975),
                a = n(107);
            e.exports = function(e) { return (a(e) ? c : r)(e) } }, 974: function(e, t, n) { var c = n(462),
                r = n(864);
            e.exports = function(e) { return r(c(e)) } }, 975: function(e, t, n) { var c = n(864),
                r = n(459);
            e.exports = function(e) { return c(r(e)) } } }
]);
//# sourceMappingURL=7.9e466f70.chunk.js.map