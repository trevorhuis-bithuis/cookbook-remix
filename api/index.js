var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
var tailwind_default = "/build/_assets/tailwind-652D2PTW.css";

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
  let navigation = (0, import_react3.useNavigation)(), routes2 = [
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
          lineNumber: 62,
          columnNumber: 19
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 66,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 59,
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
                lineNumber: 81,
                columnNumber: 23
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 73,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 71,
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
            lineNumber: 92,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 90,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountLink, {}, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 111,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SigninLink, {}, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 114,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 57,
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
        lineNumber: 123,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 54,
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

// app/routes/recipes/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action,
  default: () => create_default,
  loader: () => loader2
});
var import_react6 = require("react");

// app/components/forms/descriptionInput.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function DescriptionInput(props) {
  let { description, setDescription } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "label",
      {
        htmlFor: "description",
        className: "block text-sm font-medium text-gray-700",
        children: "Description"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/descriptionInput.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "textarea",
      {
        id: "description",
        name: "description",
        rows: 2,
        className: "block w-full rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        value: description,
        onChange: (e) => {
          setDescription(e.target.value);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/descriptionInput.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/forms/descriptionInput.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/descriptionInput.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/forms/titleInput.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function TitleInput(props) {
  let { title, setTitle } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "label",
      {
        htmlFor: "title",
        className: "block text-sm font-medium text-gray-700",
        children: "Title"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/titleInput.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "input",
      {
        type: "text",
        name: "title",
        id: "title",
        autoComplete: "given-name",
        className: "block w-full p-2 rounded-md border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        value: title,
        onChange: (e) => setTitle(e.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/titleInput.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/forms/titleInput.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/titleInput.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/forms/stepsInput.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function StepsInput(props) {
  let { steps, setSteps } = props;
  function addStep() {
    setSteps([...steps, ""]);
  }
  function updateStep(index, value) {
    let newSteps = [...steps];
    newSteps[index] = value, setSteps(newSteps);
  }
  function removeStep(index) {
    return () => {
      let newSteps = [...steps];
      newSteps.splice(index, 1), setSteps(newSteps);
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:col-span-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "block text-md font-medium text-gray-700 mb-4", children: "Steps" }, void 0, !1, {
      fileName: "app/components/forms/stepsInput.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "label",
        {
          htmlFor: "step",
          className: "block text-sm font-medium text-gray-500",
          children: [
            "Step ",
            index + 1
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/forms/stepsInput.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "textarea",
          {
            id: "step",
            name: "step",
            rows: 2,
            className: "block w-full rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            value: step,
            onChange: (e) => {
              updateStep(index, e.target.value);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/stepsInput.tsx",
            lineNumber: 41,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/forms/stepsInput.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-none content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            className: "m-2",
            type: "button",
            onClick: removeStep(index),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/forms/stepsInput.tsx",
                    lineNumber: 66,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/forms/stepsInput.tsx",
                lineNumber: 58,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/stepsInput.tsx",
            lineNumber: 53,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/forms/stepsInput.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/stepsInput.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, index, !0, {
      fileName: "app/components/forms/stepsInput.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "m-2", type: "button", onClick: addStep, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6 border-2 border-indigo-700 rounded-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.5v15m7.5-7.5h-15"
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/stepsInput.tsx",
            lineNumber: 87,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/stepsInput.tsx",
        lineNumber: 79,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/forms/stepsInput.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/stepsInput.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/components/forms/ingredientsInput.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function IngredientsInput(props) {
  let { ingredients, setIngredients } = props;
  function addIngredient() {
    let newIngredients = [...ingredients];
    newIngredients.push(""), setIngredients(newIngredients);
  }
  function updateIngredient(index, ingredient) {
    let newIngredients = [...ingredients];
    newIngredients[index] = ingredient, setIngredients(newIngredients);
  }
  function removeIngredient(index) {
    return () => {
      let newIngredients = [...ingredients];
      newIngredients.splice(index, 1), setIngredients(newIngredients);
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sm:col-span-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "block text-md font-medium text-gray-700 mb-4", children: "Ingredients" }, void 0, !1, {
      fileName: "app/components/forms/ingredientsInput.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    ingredients.map((ingredient, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex my-2 md:w-1/2 w-full space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "ingredient",
            className: "block text-sm font-medium text-gray-700",
            children: [
              "Ingredient ",
              index + 1
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/forms/ingredientsInput.tsx",
            lineNumber: 39,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "text",
            name: "ingredient",
            className: "block w-full rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            placeholder: "1/4 cup butter",
            onChange: (e) => {
              updateIngredient(index, e.target.value);
            },
            value: ingredient
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/ingredientsInput.tsx",
            lineNumber: 46,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/forms/ingredientsInput.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/ingredientsInput.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/forms/ingredientsInput.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex-none content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "button",
        {
          className: "mt-8",
          type: "button",
          onClick: removeIngredient(index),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18L18 6M6 6l12 12"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/forms/ingredientsInput.tsx",
                  lineNumber: 73,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/forms/ingredientsInput.tsx",
              lineNumber: 65,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/ingredientsInput.tsx",
          lineNumber: 60,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/forms/ingredientsInput.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, index, !0, {
      fileName: "app/components/forms/ingredientsInput.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        type: "button",
        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        onClick: addIngredient,
        children: "Add"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/ingredientsInput.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/forms/ingredientsInput.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/forms/categoriesInput.tsx
var import_react5 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function CategoriesInput(props) {
  let { categories, setCategories } = props, [categoryInput, setCategoryInput] = (0, import_react5.useState)(""), addCategory = (category) => {
    category !== "" && (setCategories([...categories, category]), setCategoryInput(""));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-6 max-w-7xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "label",
      {
        htmlFor: "location",
        className: "block text-sm font-medium text-gray-700",
        children: "Categories"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/categoriesInput.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "input",
      {
        type: "text",
        name: "category",
        className: "w-48 mt-1 rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        onChange: (e) => {
          setCategoryInput(e.target.value);
        },
        value: categoryInput
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/categoriesInput.tsx",
        lineNumber: 29,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        type: "button",
        className: "inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        onClick: () => {
          addCategory(categoryInput);
        },
        children: "Add"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/categoriesInput.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { role: "list", className: "flex flex-wrap m-2", children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "li",
      {
        className: "relative flex-initial mr-4 mt-4 p-3 shadow-sm rounded-lg bg-indigo-100 text-md font-medium text-indigo-800 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              className: "absolute w-6 h-6 -right-2 -top-2 bg-indigo-100 rounded-full",
              onClick: () => {
                setCategories(
                  categories.filter((c) => c !== category)
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/forms/categoriesInput.tsx",
                  lineNumber: 71,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/forms/categoriesInput.tsx",
              lineNumber: 56,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/forms/categoriesInput.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          category
        ]
      },
      index,
      !0,
      {
        fileName: "app/components/forms/categoriesInput.tsx",
        lineNumber: 51,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/forms/categoriesInput.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/forms/categoriesInput.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/categoriesInput.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/forms/imagesInput.tsx
var import_uuid = require("uuid"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ImagesInput(props) {
  let { setImageUrl } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "sm:col-span-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "label",
      {
        htmlFor: "cover-image",
        className: "block text-sm font-medium text-gray-700",
        children: "Images"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/imagesInput.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "space-y-1 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400",
          stroke: "currentColor",
          fill: "none",
          viewBox: "0 0 48 48",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "path",
            {
              d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/components/forms/imagesInput.tsx",
              lineNumber: 52,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/imagesInput.tsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex text-sm text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "label",
          {
            htmlFor: "file-upload",
            className: "relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Upload a file" }, void 0, !1, {
                fileName: "app/components/forms/imagesInput.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "input",
                {
                  id: "file-upload",
                  name: "file-upload",
                  type: "file",
                  className: "sr-only",
                  accept: ".jpg, .jpeg, .png",
                  onInput: async (e) => {
                    if (!e.target.files || e.target.files.length <= 0)
                      return;
                    let file = e.target.files[0], filename = encodeURIComponent(
                      `${(0, import_uuid.v4)()}.${file.name.split(".")[1]}`
                    ), data = await (await fetch(`/api/upload-image?file=${filename}`)).json(), formData = new FormData();
                    Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
                      formData.append(key, value);
                    }), fetch(data.url, {
                      method: "POST",
                      body: formData
                    }), setImageUrl(
                      `https://cookbook-recipe-images.s3.amazonaws.com/${data.fields.key}`
                    );
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/forms/imagesInput.tsx",
                  lineNumber: 65,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/forms/imagesInput.tsx",
            lineNumber: 60,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "pl-1", children: "or drag and drop" }, void 0, !1, {
          fileName: "app/components/forms/imagesInput.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/imagesInput.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-gray-500", children: "PNG, JPG, GIF up to 10MB" }, void 0, !1, {
        fileName: "app/components/forms/imagesInput.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/imagesInput.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/forms/imagesInput.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/imagesInput.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/components/forms/cancelAndSaveButtons.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function CancelAndSaveButton(props) {
  let { handleCancel, isSaveDisabled } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        type: "button",
        className: "rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        onClick: handleCancel,
        children: "Cancel"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/cancelAndSaveButtons.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        type: "submit",
        disabled: isSaveDisabled,
        className: "ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 disabled:bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        children: "Save"
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/cancelAndSaveButtons.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/forms/cancelAndSaveButtons.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/forms/cancelAndSaveButtons.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/recipes/create.tsx
var import_outline2 = require("@heroicons/react/24/outline"), import_ssr2 = require("@clerk/remix/ssr.server"), import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/utils/db.server.ts
var import_axios = __toESM(require("axios")), import_dayjs = __toESM(require("dayjs"));
function buildConfig({ action: action2, document = null, filter = null, projection = null }) {
  let config = {
    method: "post",
    url: `${process.env.DATA_API_BASE_URL}/action/${action2}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.DATA_API_KEY
    },
    data: {
      dataSource: "cookbook",
      database: "cookbook",
      collection: "Recipe"
    }
  };
  return document && (config.data.document = document), filter && (config.data.filter = filter), projection && (config.data.projection = projection), config;
}
async function createRecipe(title, description, ingredients, steps, categories, photoUrl) {
  let action2 = "insertOne", document = {
    title,
    description,
    ingredients,
    steps,
    categories,
    photoUrl,
    createdAt: (0, import_dayjs.default)().format(),
    updatedAt: (0, import_dayjs.default)().format()
  }, config = buildConfig({ action: action2, document });
  return (await (0, import_axios.default)(config)).data.insertedId;
}
async function getRecipe(id) {
  let config = buildConfig({ action: "findOne", filter: {
    _id: { $oid: id }
  } }), result = await (0, import_axios.default)(config);
  return {
    ...result.data.document,
    createdAt: (0, import_dayjs.default)(result.data.document.createdAt).format("MMMM DD, YYYY")
  };
}

// app/routes/recipes/create.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader2 = async (args) => {
  let { userId } = await (0, import_ssr2.getAuth)(args);
  return userId ? { userId } : (0, import_node.redirect)("/sign-in");
};
async function action({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData), id = await createRecipe(
    values.title,
    values.description,
    values.ingredients.split(","),
    values.steps.split(","),
    values.categories.split(","),
    values.photoUrl
  );
  return (0, import_node.redirect)(`/recipes/${id}`);
}
var CreateRecipe = () => {
  let { userId } = (0, import_react7.useLoaderData)(), submit = (0, import_react7.useSubmit)(), [title, setTitle] = (0, import_react6.useState)(""), [categories, setCategories] = (0, import_react6.useState)([]), [description, setDescription] = (0, import_react6.useState)(""), [imageUrl, setImageUrl] = (0, import_react6.useState)(""), [ingredients, setIngredients] = (0, import_react6.useState)([""]), [steps, setSteps] = (0, import_react6.useState)([""]), [isLoading, setIsLoading] = (0, import_react6.useState)(!1);
  function handleCancel() {
    console.log("cancel");
  }
  function handleSubmit(event) {
    event.preventDefault();
    let $form = event.currentTarget, formData = new FormData($form);
    formData.set("ingredients", `${ingredients.join(",")}`), formData.set("categories", `${categories.join(",")}`), formData.set("steps", `${steps.join(",")}`), formData.set("photoUrl", imageUrl), formData.delete("ingredient"), formData.delete("step"), formData.delete("'file-upload'"), formData.delete("category"), submit(formData, {
      // @ts-ignore
      method: $form.getAttribute("method") ?? $form.method,
      action: $form.getAttribute("action") ?? $form.action
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Form, { onSubmit: handleSubmit, method: "post", className: "space-y-8 divide-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Create a New Recipe" }, void 0, !1, {
      fileName: "app/routes/recipes/create.tsx",
      lineNumber: 94,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TitleInput, { title, setTitle }, void 0, !1, {
        fileName: "app/routes/recipes/create.tsx",
        lineNumber: 99,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        CategoriesInput,
        {
          categories,
          setCategories
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes/create.tsx",
          lineNumber: 101,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        DescriptionInput,
        {
          description,
          setDescription
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes/create.tsx",
          lineNumber: 106,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(StepsInput, { steps, setSteps }, void 0, !1, {
        fileName: "app/routes/recipes/create.tsx",
        lineNumber: 111,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        IngredientsInput,
        {
          ingredients,
          setIngredients
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes/create.tsx",
          lineNumber: 113,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ImagesInput, { setImageUrl }, void 0, !1, {
        fileName: "app/routes/recipes/create.tsx",
        lineNumber: 118,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/recipes/create.tsx",
      lineNumber: 98,
      columnNumber: 21
    }, this),
    imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "items-center mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_outline2.CheckIcon,
        {
          className: "h-6 w-6 text-green-600",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes/create.tsx",
          lineNumber: 124,
          columnNumber: 33
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/recipes/create.tsx",
        lineNumber: 123,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-3 text-center sm:mt-5", children: "Upload successful" }, void 0, !1, {
        fileName: "app/routes/recipes/create.tsx",
        lineNumber: 129,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/recipes/create.tsx",
      lineNumber: 122,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      CancelAndSaveButton,
      {
        handleCancel,
        isSaveDisabled: !1
      },
      void 0,
      !1,
      {
        fileName: "app/routes/recipes/create.tsx",
        lineNumber: 132,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/recipes/create.tsx",
    lineNumber: 93,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/recipes/create.tsx",
    lineNumber: 92,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/recipes/create.tsx",
    lineNumber: 91,
    columnNumber: 9
  }, this);
}, create_default = CreateRecipe;

// app/routes/menu/create.tsx
var create_exports2 = {};
__export(create_exports2, {
  default: () => create_default2
});
var CreateMenu = () => {
}, create_default2 = CreateMenu;

// app/routes/recipes/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Recipe,
  loader: () => loader3
});
var import_clsx = __toESM(require("clsx")), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader3 = async ({ params }) => {
  let id = params.id;
  return await getRecipe(id);
};
function Recipe() {
  let recipe = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-start content-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-4xl font-bold text-gray-900 p-1", children: recipe.title }, void 0, !1, {
        fileName: "app/routes/recipes/$id.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: (0, import_clsx.default)(
            "w-6 h-6 active:animate-ping hover:fill-red-500 ",
            recipe.isFavorite && ""
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes/$id.tsx",
              lineNumber: 33,
              columnNumber: 25
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes/$id.tsx",
          lineNumber: 22,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/recipes/$id.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-md text-gray-500 mt-2", children: [
      "Published on ",
      recipe.createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    recipe.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-wrap", children: recipe.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "div",
      {
        className: "flex-initial mr-4 mt-4 p-2 shadow-sm rounded-lg bg-indigo-100 text-md font-medium text-indigo-800 text-center",
        children: category
      },
      index,
      !1,
      {
        fileName: "app/routes/recipes/$id.tsx",
        lineNumber: 47,
        columnNumber: 25
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    recipe.photo && recipe.photo !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto max-w-4xl m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "img",
      {
        src: recipe.photo,
        alt: recipe.title,
        height: 300,
        width: 300
      },
      void 0,
      !1,
      {
        fileName: "app/routes/recipes/$id.tsx",
        lineNumber: 58,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-2xl text-gray-500 mt-2", children: "Description" }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-gray-900", children: recipe.description }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-2xl text-gray-500 mt-2", children: "Ingredients" }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { className: "list-disc list-inside", children: recipe.ingredients.map((ingredient, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: "text-gray-900 p-1", children: ingredient }, index, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 71,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-2xl text-gray-500 mt-2", children: "Steps" }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ol", { className: "list-decimal list-inside", children: recipe.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: "text-gray-900 p-1", children: step }, index, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 79,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/recipes/$id.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/recipes/$id.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mx-auto max-w-sm mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_remix3.SignIn, { path: "/sign-in", routing: "path", signUpUrl: "/sign-up" }, void 0, !1, {
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
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mx-auto max-w-sm mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_remix4.SignUp, { path: "/sign-up", routing: "path", signInUrl: "/sign-in" }, void 0, !1, {
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
var import_react9 = require("@remix-run/react");

// app/images/recipe.png
var recipe_default = "/build/_assets/recipe-VOGOFNXP.png";

// app/images/menu.jpg
var menu_default = "/build/_assets/menu-ZK4ZMNVE.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Card({ title, description, image, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "col-span-1 rounded-2xl bg-gray-800 px-8 py-10 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { className: "mt-6 text-2xl font-semibold leading-7 tracking-tight text-white", children: title }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-md leading-6 text-gray-400", children: description }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-8 flex justify-center rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "m-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_react9.Link,
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
var Home = () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-2xl text-center m-6", children: "Crystal's Cooking" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-md text-center m-6", children: "Bacon ipsum dolor amet fatback swine cupim capicola tail. Kevin ball tip cupim meatloaf strip steak. Chislic pork chicken meatloaf beef tenderloin shankle tongue cow rump biltong filet mignon. Beef ribs pancetta tenderloin, spare ribs ribeye sausage filet mignon turkey chislic tail brisket salami. Shankle biltong cow, sirloin porchetta pastrami buffalo tail swine bacon." }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid grid-cols-2 space-x-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
var assets_manifest_default = { entry: { module: "/build/entry.client-52G5LSIV.js", imports: ["/build/_shared/chunk-MA7PXXCU.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HXOB63GP.js", imports: ["/build/_shared/chunk-G2XXMJUW.js", "/build/_shared/chunk-KGJ7GAAT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZCMA5ZVJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/menu/create": { id: "routes/menu/create", parentId: "root", path: "menu/create", index: void 0, caseSensitive: void 0, module: "/build/routes/menu/create-LXZHZ5M3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes/$id": { id: "routes/recipes/$id", parentId: "root", path: "recipes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes/$id-IB4LZVPG.js", imports: ["/build/_shared/chunk-KONDUBG3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes/create": { id: "routes/recipes/create", parentId: "root", path: "recipes/create", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes/create-QKSOXCOG.js", imports: ["/build/_shared/chunk-KONDUBG3.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-UT2XE7CV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-KEZKOYNX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e69f42b9", hmr: void 0, url: "/build/manifest-E69F42B9.js" };

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
  "routes/recipes/create": {
    id: "routes/recipes/create",
    parentId: "root",
    path: "recipes/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/menu/create": {
    id: "routes/menu/create",
    parentId: "root",
    path: "menu/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports2
  },
  "routes/recipes/$id": {
    id: "routes/recipes/$id",
    parentId: "root",
    path: "recipes/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
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
