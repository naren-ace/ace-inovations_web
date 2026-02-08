module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(app)/stacks/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/stacks/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/collections/Users.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
const Users = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
        defaultColumns: [
            'email',
            'roles',
            'createdAt'
        ],
        group: 'Admin'
    },
    access: {
        read: ()=>true,
        create: ()=>true,
        update: ()=>true,
        delete: ()=>true
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
            label: 'First Name'
        },
        {
            name: 'lastName',
            type: 'text',
            label: 'Last Name'
        },
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            defaultValue: [
                'user'
            ],
            required: true,
            options: [
                {
                    label: 'Super Admin',
                    value: 'superadmin'
                },
                {
                    label: 'Marketing',
                    value: 'marketing'
                },
                {
                    label: 'Sales',
                    value: 'sales'
                },
                {
                    label: 'User',
                    value: 'user'
                }
            ],
            admin: {
                description: 'Assign one or more roles to this user.'
            }
        }
    ],
    timestamps: true
};
}),
"[project]/src/collections/Media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
const Media = {
    slug: 'media',
    admin: {
        useAsTitle: 'alt',
        defaultColumns: [
            'filename',
            'alt',
            'createdAt'
        ],
        group: 'Content'
    },
    access: {
        read: ()=>true,
        create: ()=>true,
        update: ()=>true,
        delete: ()=>true
    },
    upload: {
        staticDir: 'media',
        mimeTypes: [
            'image/*'
        ],
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre'
            },
            {
                name: 'card',
                width: 768,
                height: 432,
                position: 'centre'
            },
            {
                name: 'hero',
                width: 1920,
                height: 1080,
                position: 'centre'
            }
        ]
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            label: 'Alt Text',
            admin: {
                description: 'Describe the image for accessibility and SEO.'
            }
        }
    ],
    timestamps: true
};
}),
"[project]/src/collections/Stacks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stacks",
    ()=>Stacks
]);
const Stacks = {
    slug: 'stacks',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'category',
            'status',
            'createdAt'
        ],
        group: 'Content',
        description: 'Blog posts — the ACE Stacks feed.'
    },
    access: {
        read: ()=>true,
        create: ()=>true,
        update: ()=>true,
        delete: ()=>true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Title'
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Slug',
            admin: {
                position: 'sidebar',
                description: 'URL-friendly identifier. Auto-generated from title if left blank.'
            },
            hooks: {
                beforeValidate: [
                    ({ value, data })=>{
                        if (!value && data?.title) {
                            return data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        }
                        return value;
                    }
                ]
            }
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            label: 'Category',
            options: [
                {
                    label: 'AI Strategy',
                    value: 'ai-strategy'
                },
                {
                    label: 'Engineering',
                    value: 'engineering'
                },
                {
                    label: 'Case Studies',
                    value: 'case-studies'
                },
                {
                    label: 'Field Notes',
                    value: 'field-notes'
                }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Featured Image'
        },
        {
            name: 'excerpt',
            type: 'textarea',
            label: 'Excerpt',
            maxLength: 280,
            admin: {
                description: 'Short summary shown on blog cards (max 280 chars).'
            }
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Content'
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'draft',
            required: true,
            options: [
                {
                    label: 'Draft',
                    value: 'draft'
                },
                {
                    label: 'Published',
                    value: 'published'
                }
            ],
            admin: {
                position: 'sidebar'
            }
        }
    ],
    timestamps: true
};
}),
"[project]/src/collections/Affiliates.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Affiliates",
    ()=>Affiliates
]);
const Affiliates = {
    slug: 'affiliates',
    admin: {
        useAsTitle: 'partnerName',
        defaultColumns: [
            'partnerName',
            'slug',
            'categoryTag',
            'active',
            'clickCount'
        ],
        group: 'Growth',
        description: 'Affiliate partner links with click tracking.'
    },
    access: {
        read: ()=>true,
        create: ()=>true,
        update: ()=>true,
        delete: ()=>true
    },
    fields: [
        {
            name: 'partnerName',
            type: 'text',
            required: true,
            label: 'Partner Name'
        },
        {
            name: 'targetUrl',
            type: 'text',
            required: true,
            label: 'Target URL',
            admin: {
                description: 'The destination URL the user will be redirected to.'
            }
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Slug',
            admin: {
                position: 'sidebar',
                description: 'Used in /go/[slug] redirect URL.'
            },
            hooks: {
                beforeValidate: [
                    ({ value, data })=>{
                        if (!value && data?.partnerName) {
                            return data.partnerName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        }
                        return value;
                    }
                ]
            }
        },
        {
            name: 'active',
            type: 'checkbox',
            defaultValue: true,
            required: true,
            label: 'Active',
            admin: {
                position: 'sidebar',
                description: 'Toggle off to disable this affiliate link site-wide.'
            }
        },
        {
            name: 'categoryTag',
            type: 'select',
            label: 'Category',
            options: [
                {
                    label: 'Cloud',
                    value: 'cloud'
                },
                {
                    label: 'AI Tools',
                    value: 'ai-tools'
                },
                {
                    label: 'Software',
                    value: 'software'
                },
                {
                    label: 'Infrastructure',
                    value: 'infrastructure'
                },
                {
                    label: 'Analytics',
                    value: 'analytics'
                }
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Internal Description',
            admin: {
                description: 'Internal notes — why we partner with them. Not shown publicly.'
            }
        },
        {
            name: 'clickCount',
            type: 'number',
            defaultValue: 0,
            label: 'Click Count',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Auto-incremented on each redirect.'
            }
        }
    ],
    timestamps: true
};
}),
"[project]/payload.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-postgres [external] (@payloadcms/db-postgres, esm_import, [project]/node_modules/@payloadcms/db-postgres)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__ = __turbopack_context__.i("[externals]/sharp [external] (sharp, cjs, [project]/node_modules/sharp)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Users.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Stacks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Stacks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Affiliates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Affiliates.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("payload.config.ts")}`;
    }
};
;
;
;
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["buildConfig"])({
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"].slug,
        importMap: {
            baseDir: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname)
        },
        meta: {
            titleSuffix: ' | ACE inovations',
            description: 'ACE inovations Admin Panel'
        }
    },
    collections: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Media"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Stacks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stacks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Affiliates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Affiliates"]
    ],
    secret: process.env.PAYLOAD_SECRET || 'ace-innovations-default-secret-change-me',
    typescript: {
        outputFile: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, 'src/payload-types.ts')
    },
    db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$postgres__$5b$external$5d$__$2840$payloadcms$2f$db$2d$postgres$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$29$__["postgresAdapter"])({
        pool: {
            connectionString: process.env.DATABASE_URI || ''
        },
        push: true
    }),
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])(),
    sharp: __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__["default"]
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/brand/LogicNodeIcon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogicNodeIcon",
    ()=>LogicNodeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
const LogicNodeIcon = ({ size = 80, className })=>{
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 160 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        "data-testid": "logic-node-icon",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-gl`,
                        x1: "30%",
                        y1: "100%",
                        x2: "50%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#2E5BFF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#7B2D8E"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-gr`,
                        x1: "70%",
                        y1: "100%",
                        x2: "50%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#2E5BFF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#7B2D8E"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-hl`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(255,255,255,0.4)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "40%",
                                stopColor: "rgba(255,255,255,0.08)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(255,255,255,0.25)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${id}-ng`,
                        x: "-80%",
                        y: "-80%",
                        width: "260%",
                        height: "260%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 12 150 L 70 14 L 82 14 L 44 150 Z",
                fill: `url(#${id}-gl)`
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 12 150 L 70 14 L 76 14 L 28 150 Z",
                fill: `url(#${id}-hl)`,
                opacity: "0.65"
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 148 150 L 90 14 L 78 14 L 116 150 Z",
                fill: `url(#${id}-gr)`
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 148 150 L 90 14 L 84 14 L 132 150 Z",
                fill: `url(#${id}-hl)`,
                opacity: "0.65"
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "10",
                r: "10",
                fill: "#7B2D8E",
                filter: `url(#${id}-ng)`,
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "10",
                r: "4.5",
                fill: "#FFFFFF"
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "10",
                r: "2",
                fill: "#F0F4FF",
                opacity: "0.8"
            }, void 0, false, {
                fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/brand/LogicNodeIcon.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/(app)/stacks/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>StacksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$LogicNodeIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/LogicNodeIcon.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const categoryLabels = {
    'ai-strategy': 'AI Strategy',
    'engineering': 'Engineering',
    'case-studies': 'Case Studies',
    'field-notes': 'Field Notes'
};
const categoryColors = {
    'ai-strategy': 'bg-ace-blue/20 text-ace-blue',
    'engineering': 'bg-emerald-500/20 text-emerald-400',
    'case-studies': 'bg-amber-500/20 text-amber-400',
    'field-notes': 'bg-ace-violet/20 text-purple-400'
};
async function StacksPage() {
    const payload = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getPayload"])({
        config: __TURBOPACK__imported__module__$5b$project$5d2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    });
    const { docs: posts } = await payload.find({
        collection: 'stacks',
        where: {
            status: {
                equals: 'published'
            }
        },
        sort: '-createdAt',
        limit: 20
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 backdrop-blur-xl bg-[#0C0E14]/80 border-b border-white/5",
                "data-testid": "stacks-navbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            "data-testid": "stacks-home-link",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$LogicNodeIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogicNodeIcon"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-heading font-bold text-white text-lg",
                                    children: [
                                        "ACE",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extralight",
                                            children: "Stacks"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-gray-400 hover:text-white transition-colors duration-200",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-5xl mx-auto px-6 py-16",
                "data-testid": "stacks-feed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-ace-blue tracking-widest uppercase mb-3",
                                children: "Knowledge Base"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-5xl font-heading font-bold text-white mb-4",
                                children: "ACE Stacks"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-400 max-w-2xl",
                                children: "Deep dives into AI strategy, engineering patterns, and field notes from the team."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        "data-testid": "stacks-empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg",
                                children: "No published stacks yet."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mt-2",
                                children: [
                                    "Create your first post in the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        className: "text-ace-blue hover:underline",
                                        children: "Admin Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 85
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/stacks/${post.slug}`,
                                className: "group block rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-ace-blue/20 transition-all duration-300 overflow-hidden",
                                "data-testid": `stack-card-${post.slug}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-500/20 text-gray-400'}`,
                                                    children: categoryLabels[post.category] ?? post.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: new Date(post.createdAt).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-heading font-semibold text-white mb-2 group-hover:text-ace-blue transition-colors duration-200",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 leading-relaxed line-clamp-3",
                                            children: post.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center text-ace-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                                            children: [
                                                "Read more",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 ml-1",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, post.id, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(app)/stacks/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/stacks/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__deff6b4e._.js.map