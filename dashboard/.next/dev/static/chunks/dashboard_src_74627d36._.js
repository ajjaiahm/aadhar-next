(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dashboard/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE
]);
const API_BASE = "http://127.0.0.1:8080";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dashboard/src/app/explain/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExplainPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/dashboard/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function ExplainPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "52cf8259de32e4690f146775ca91694d2bcfba4184abaa18d4bba705825e940a") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52cf8259de32e4690f146775ca91694d2bcfba4184abaa18d4bba705825e940a";
    }
    const [vid, setVid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("VID123");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== vid) {
        t0 = async function loadExplain() {
            setErr(null);
            setData(null);
            ;
            try {
                const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/explain?id=${encodeURIComponent(vid)}`);
                const json = await res.json();
                setData(json);
            } catch (t1) {
                const e = t1;
                setErr(e?.message || "Failed to fetch explainability");
            }
        };
        $[1] = vid;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const loadExplain = t0;
    let t1;
    if ($[3] !== data?.reasons) {
        t1 = data?.reasons ?? [];
        $[3] = data?.reasons;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const reasons = t1;
    let t2;
    if ($[5] !== reasons) {
        t2 = reasons.map(_ExplainPageReasonsMap);
        $[5] = reasons;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== reasons) {
        t3 = reasons.map(_ExplainPageReasonsMap2);
        $[7] = reasons;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t3) {
        t4 = [
            {
                label: "Weight",
                data: t3
            }
        ];
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t2 || $[12] !== t4) {
        t5 = {
            labels: t2,
            datasets: t4
        };
        $[11] = t2;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const chartData = t5;
    let t6;
    let t7;
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            padding: 24,
            maxWidth: 900,
            margin: "0 auto"
        };
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: {
                fontSize: 28,
                fontWeight: 800
            },
            children: "Explainability"
        }, void 0, false, {
            fileName: "[project]/dashboard/src/app/explain/page.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        t8 = {
            marginTop: 16,
            display: "grid",
            gap: 12
        };
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "ExplainPage[<input>.onChange]": (e_0)=>setVid(e_0.target.value)
        })["ExplainPage[<input>.onChange]"];
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== vid) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: [
                "VID",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: vid,
                    onChange: t9,
                    style: inp
                }, void 0, false, {
                    fileName: "[project]/dashboard/src/app/explain/page.tsx",
                    lineNumber: 127,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dashboard/src/app/explain/page.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[18] = vid;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== loadExplain) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            style: btn,
            onClick: loadExplain,
            children: "Explain"
        }, void 0, false, {
            fileName: "[project]/dashboard/src/app/explain/page.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[20] = loadExplain;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t8,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/dashboard/src/app/explain/page.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== err) {
        t13 = err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "tomato",
                marginTop: 16
            },
            children: err
        }, void 0, false, {
            fileName: "[project]/dashboard/src/app/explain/page.tsx",
            lineNumber: 152,
            columnNumber: 18
        }, this);
        $[25] = err;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== chartData || $[28] !== data || $[29] !== reasons.length) {
        t14 = data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontWeight: 800
                            },
                            children: "Decision Snapshot"
                        }, void 0, false, {
                            fileName: "[project]/dashboard/src/app/explain/page.tsx",
                            lineNumber: 163,
                            columnNumber: 39
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            style: {
                                whiteSpace: "pre-wrap"
                            },
                            children: JSON.stringify(data, null, 2)
                        }, void 0, false, {
                            fileName: "[project]/dashboard/src/app/explain/page.tsx",
                            lineNumber: 165,
                            columnNumber: 34
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dashboard/src/app/explain/page.tsx",
                    lineNumber: 163,
                    columnNumber: 21
                }, this),
                reasons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontWeight: 800
                            },
                            children: "Reason Weights"
                        }, void 0, false, {
                            fileName: "[project]/dashboard/src/app/explain/page.tsx",
                            lineNumber: 167,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            data: chartData
                        }, void 0, false, {
                            fileName: "[project]/dashboard/src/app/explain/page.tsx",
                            lineNumber: 169,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dashboard/src/app/explain/page.tsx",
                    lineNumber: 167,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true);
        $[27] = chartData;
        $[28] = data;
        $[29] = reasons.length;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t12 || $[32] !== t13 || $[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            style: t6,
            children: [
                t7,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/dashboard/src/app/explain/page.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    return t15;
}
_s(ExplainPage, "bSY6tQrvsktzOfoXgADMss8wMO0=");
_c = ExplainPage;
function _ExplainPageReasonsMap2(r_0) {
    return r_0.weight;
}
function _ExplainPageReasonsMap(r) {
    return r.rule;
}
const inp = {
    width: "100%",
    marginTop: 6,
    padding: 10,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "transparent",
    color: "inherit"
};
const btn = {
    padding: 12,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    cursor: "pointer"
};
const card = {
    marginTop: 18,
    padding: 16,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)"
};
var _c;
__turbopack_context__.k.register(_c, "ExplainPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dashboard_src_74627d36._.js.map