var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 11,
    columnNumber: 33
  }, this));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AXVE7KB4.css";

// app/components/Header.tsx
var import_react2 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_react3 = require("@remix-run/react"), import_remix = require("@clerk/remix"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var SigninLink = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Link, { to: "/sign-in", className: "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium", children: "Sign In" }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this), AccountLink = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.UserButton, {}, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 21,
  columnNumber: 3
}, this);
function Header(props) {
  var _a, _b, _c, _d;
  let navigation = (0, import_react3.useNavigation)();
  console.log(navigation.location);
  let routes2 = [
    {
      name: "Search Recipes",
      href: "/recipes",
      current: ((_a = navigation.location) == null ? void 0 : _a.pathname) === "/recipes"
    },
    {
      name: "Menus",
      href: "/menus",
      current: ((_b = navigation.location) == null ? void 0 : _b.pathname) === "/menus"
    }
  ];
  return routes2.push({
    name: "Create Recipe",
    href: "/recipes/create",
    current: ((_c = navigation.location) == null ? void 0 : _c.pathname) === "/recipes/create"
  }), routes2.push({
    name: "Create Menu",
    href: "/menus/create",
    current: ((_d = navigation.location) == null ? void 0 : _d.pathname) === "/menus/create"
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Disclosure, { as: "nav", className: "bg-gray-800", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: " Open main menu " }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 66,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-8 h-8 text-white",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 83,
                columnNumber: 23
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 75,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 74,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4", children: routes2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react3.Link,
          {
            to: item.href,
            className: classNames(
              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "px-3 py-2 rounded-md text-sm font-medium"
            ),
            "aria-current": item.current ? "page" : void 0,
            children: item.name
          },
          item.name,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 94,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountLink, {}, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 113,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 112,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SigninLink, {}, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 116,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pt-2 pb-3", children: routes2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Link,
      {
        "aria-current": item.current ? "page" : void 0,
        className: classNames(
          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block px-3 py-2 rounded-md text-base font-medium"
        ),
        to: item.href,
        children: item.name
      },
      item.name,
      !1,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 125,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 123,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "bg-white", "aria-labelledby": "footer-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-12 border-t border-gray-200 pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-base text-gray-400 xl:text-center", children: "\xA9 2022 Bithuis, LLC. All rights reserved." }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => ({ title: "New Remix App" }), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], loader = (args) => (0, import_ssr.rootAuthLoader)(
  args,
  ({ request }) => {
    let { userId, sessionId, getToken } = request.auth;
    return console.log("Root loader auth:", { userId, sessionId, getToken }), { message: "Hello from the root loader :)" };
  },
  { loadUser: !0 }
);
function App() {
  let { message } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, { isOwner: !0 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix2.ClerkApp)(App), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)();

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-sm mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_remix3.SignIn, { path: "/sign-in", routing: "path", signUpUrl: "/sign-up" }, void 0, !1, {
    fileName: "app/routes/sign-in/$.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in/$.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto max-w-sm mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_remix4.SignUp, { path: "/sign-up", routing: "path", signInUrl: "/sign-in" }, void 0, !1, {
    fileName: "app/routes/sign-up/$.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up/$.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_react5 = require("@remix-run/react");

// app/images/recipe.png
var recipe_default = "/build/_assets/recipe-VOGOFNXP.png";

// app/images/menu.jpg
var menu_default = "/build/_assets/menu-ZK4ZMNVE.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Card({ title, description, image, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "col-span-1 rounded-2xl bg-gray-800 px-8 py-10 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "mt-6 text-2xl font-semibold leading-7 tracking-tight text-white", children: title }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md leading-6 text-gray-400", children: description }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8 flex justify-center rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        src: image,
        alt: "",
        className: "rounded-lg",
        width: 300,
        height: 300
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "m-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react5.Link,
      {
        type: "button",
        className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        to: url,
        children: title
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var Home = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl text-center m-6", children: "Crystal's Cooking" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md text-center m-6", children: "Bacon ipsum dolor amet fatback swine cupim capicola tail. Kevin ball tip cupim meatloaf strip steak. Chislic pork chicken meatloaf beef tenderloin shankle tongue cow rump biltong filet mignon. Beef ribs pancetta tenderloin, spare ribs ribeye sausage filet mignon turkey chislic tail brisket salami. Shankle biltong cow, sirloin porchetta pastrami buffalo tail swine bacon." }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-2 space-x-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Card,
      {
        title: "Recipes",
        description: "Your favorite recipes",
        image: recipe_default,
        url: "/recipes"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Card,
      {
        title: "Menus",
        description: "Curated menus for a special occasion",
        image: menu_default,
        url: "/menus"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/index.tsx",
  lineNumber: 36,
  columnNumber: 5
}, this), routes_default = Home;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-U6AQ4VEC.js", imports: ["/build/_shared/chunk-NEL7EBD5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L7MPV3TE.js", imports: ["/build/_shared/chunk-ZT47F2BK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LI7QPRH7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-B3B4NWBS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-Z5C5FVLR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "02a0b901", hmr: void 0, url: "/build/manifest-02A0B901.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
