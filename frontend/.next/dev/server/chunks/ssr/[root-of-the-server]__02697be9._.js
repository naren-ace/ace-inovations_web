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
"[project]/src/components/layout/Navbar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Navbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Navbar() from the server but Navbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Navbar.tsx <module evaluation>", "Navbar");
}),
"[project]/src/components/layout/Navbar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Navbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Navbar() from the server but Navbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Navbar.tsx", "Navbar");
}),
"[project]/src/components/layout/Navbar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/layout/Footer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTAFooter",
    ()=>CTAFooter
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTAFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTAFooter() from the server but CTAFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Footer.tsx <module evaluation>", "CTAFooter");
}),
"[project]/src/components/layout/Footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTAFooter",
    ()=>CTAFooter
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CTAFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTAFooter() from the server but CTAFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/Footer.tsx", "CTAFooter");
}),
"[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-rsc] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-rsc] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-rsc] (ecmascript) <export default as Layers>");
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
;
;
const categoryLabels = {
    'ai-strategy': 'AI Strategy',
    'engineering': 'Engineering',
    'case-studies': 'Case Studies',
    'field-notes': 'Field Notes'
};
const categoryColors = {
    'ai-strategy': 'primary',
    'engineering': 'accent',
    'case-studies': 'primary',
    'field-notes': 'accent'
};
const verifiedTools = [
    {
        name: 'Vercel',
        category: 'Deployment',
        description: 'Edge-first deployment platform. Zero-config, instant rollbacks.'
    },
    {
        name: 'Supabase',
        category: 'Backend',
        description: 'Open-source Firebase alternative with real-time Postgres.'
    },
    {
        name: 'Tailwind CSS',
        category: 'Styling',
        description: 'Utility-first CSS for building any design at velocity.'
    },
    {
        name: 'LangChain',
        category: 'AI Framework',
        description: 'The standard for building LLM-powered applications.'
    },
    {
        name: 'Temporal',
        category: 'Orchestration',
        description: 'Durable workflow engine for mission-critical processes.'
    },
    {
        name: 'Grafana',
        category: 'Observability',
        description: 'Unified monitoring, logging, and tracing platform.'
    },
    {
        name: 'Linear',
        category: 'Project Management',
        description: 'The issue tracker built for high-velocity engineering teams.'
    }
];
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen animate-bg-breathe",
        "data-testid": "stacks-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none",
                                style: {
                                    background: 'radial-gradient(ellipse 60% 40% at 40% 30%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, hsl(259 72% 58% / 0.03), transparent 50%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-container relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-3xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-8",
                                            style: {
                                                background: 'hsl(216 100% 50% / 0.06)',
                                                color: 'hsl(var(--primary))',
                                                border: '1px solid hsl(216 100% 50% / 0.12)'
                                            },
                                            "data-testid": "stacks-hero-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this),
                                                "Engineering Blog"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground",
                                            "data-testid": "stacks-hero-heading",
                                            children: [
                                                "ACE Stacks:",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gradient-text",
                                                    children: "Field Notes from the Frontline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 33
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-base md:text-lg leading-relaxed max-w-2xl",
                                            style: {
                                                color: 'hsl(var(--body))'
                                            },
                                            children: "Deep technical breakdowns of the architectures, toolchains, and agentic workflows that power the products we ship at ACE inovations."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative pb-24 lg:pb-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-container relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-3 gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-2",
                                        children: posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-20",
                                            "data-testid": "stacks-empty",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg",
                                                    style: {
                                                        color: 'hsl(var(--caption))'
                                                    },
                                                    children: "No published stacks yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-2",
                                                    style: {
                                                        color: 'hsl(var(--caption))'
                                                    },
                                                    children: [
                                                        "Create your first post in the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/admin",
                                                            className: "text-primary hover:underline",
                                                            children: "Admin Panel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 120
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-6",
                                            children: posts.map((post, i)=>{
                                                const color = categoryColors[post.category] ?? 'primary';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/stacks/${post.slug}`,
                                                    className: "group rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-elevated",
                                                    style: {
                                                        background: 'hsl(var(--card))',
                                                        border: '1px solid hsl(var(--border) / 0.6)'
                                                    },
                                                    "data-testid": `stacks-article-${i}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-28 flex items-center justify-center overflow-hidden",
                                                            style: {
                                                                background: color === 'primary' ? 'linear-gradient(135deg, hsl(216 100% 50% / 0.04), hsl(216 100% 65% / 0.08))' : 'linear-gradient(135deg, hsl(259 72% 58% / 0.04), hsl(259 72% 72% / 0.08))'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 opacity-30 pointer-events-none",
                                                                style: {
                                                                    backgroundImage: 'linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px)',
                                                                    backgroundSize: '40px 40px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 flex flex-col flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] font-semibold tracking-wider uppercase",
                                                                            style: {
                                                                                color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))'
                                                                            },
                                                                            children: [
                                                                                "// ",
                                                                                categoryLabels[post.category] ?? post.category
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: 'hsl(var(--caption))'
                                                                            },
                                                                            children: new Date(post.createdAt).toLocaleDateString('en-US', {
                                                                                month: 'short',
                                                                                year: 'numeric'
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                            lineNumber: 104,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base font-bold text-foreground tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors duration-200",
                                                                    children: post.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 29
                                                                }, this),
                                                                post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm leading-relaxed flex-1",
                                                                    style: {
                                                                        color: 'hsl(var(--body))'
                                                                    },
                                                                    children: post.excerpt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mt-5 pt-4",
                                                                    style: {
                                                                        borderTop: '1px solid hsl(var(--border) / 0.4)'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: 'hsl(var(--caption))'
                                                                            },
                                                                            children: new Date(post.createdAt).toLocaleDateString('en-US', {
                                                                                month: 'short',
                                                                                day: 'numeric',
                                                                                year: 'numeric'
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                            lineNumber: 111,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2",
                                                                            style: {
                                                                                color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))'
                                                                            },
                                                                            children: [
                                                                                "Read ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                    className: "w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                    lineNumber: 116,
                                                                                    columnNumber: 38
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                            lineNumber: 114,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, post.id, true, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sticky top-24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl overflow-hidden",
                                                    style: {
                                                        background: 'hsl(var(--card) / 0.8)',
                                                        border: '1px solid hsl(var(--border) / 0.6)',
                                                        backdropFilter: 'blur(16px)'
                                                    },
                                                    "data-testid": "stacks-sidebar",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-6 py-5",
                                                            style: {
                                                                borderBottom: '1px solid hsl(var(--border) / 0.5)',
                                                                background: 'linear-gradient(135deg, hsl(216 100% 50% / 0.03), hsl(259 72% 58% / 0.03))'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium tracking-[0.2em] uppercase mb-2",
                                                                    style: {
                                                                        color: 'hsl(var(--primary))'
                                                                    },
                                                                    children: "Recommended Stack"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-bold text-foreground tracking-tight",
                                                                    children: "The Tools that Power ACE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3",
                                                            children: verifiedTools.map((tool, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group/tool",
                                                                    "data-testid": `stacks-tool-${i}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                                                                            style: {
                                                                                background: i % 2 === 0 ? 'hsl(216 100% 50% / 0.07)' : 'hsl(259 72% 58% / 0.07)'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "w-3.5 h-3.5",
                                                                                style: {
                                                                                    color: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                lineNumber: 145,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                            lineNumber: 143,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-foreground group-hover/tool:text-primary transition-colors duration-200",
                                                                                            children: tool.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                            lineNumber: 149,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                                            className: "w-3 h-3 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200",
                                                                                            style: {
                                                                                                color: 'hsl(var(--primary))'
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                            lineNumber: 150,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                    lineNumber: 148,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] font-medium tracking-wider uppercase mt-0.5",
                                                                                    style: {
                                                                                        color: 'hsl(var(--caption))'
                                                                                    },
                                                                                    children: tool.category
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                    lineNumber: 152,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs mt-1 leading-relaxed",
                                                                                    style: {
                                                                                        color: 'hsl(var(--body))'
                                                                                    },
                                                                                    children: tool.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                                    lineNumber: 153,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, tool.name, true, {
                                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-[11px] leading-relaxed px-2",
                                                    style: {
                                                        color: 'hsl(var(--caption))'
                                                    },
                                                    children: "We only recommend tools that power the ACE Engine. Some links may be affiliate links to support our R&D."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/stacks/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/stacks/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTAFooter"], {}, void 0, false, {
                fileName: "[project]/src/app/(app)/stacks/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/stacks/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(app)/stacks/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/stacks/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__02697be9._.js.map