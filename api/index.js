"use strict";
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

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }));
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
var tailwind_default = "/build/_assets/tailwind-EU36KT5K.css";

// app/components/Header.tsx
var import_react2 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_react3 = require("@remix-run/react"), import_remix = require("@clerk/remix"), import_jsx_runtime2 = require("react/jsx-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var SigninLink = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Link, { to: "/sign-in", className: "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium", children: "Sign In" }), AccountLink = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_remix.UserButton, {});
function Header(props) {
  var _a, _b;
  let navigation = (0, import_react3.useNavigation)(), routes2 = [
    {
      name: "Search Recipes",
      href: "/recipes/search",
      current: ((_a = navigation.location) == null ? void 0 : _a.pathname) === "/recipes/search"
    }
    // {
    //   name: "Menus",
    //   href: "/menus",
    //   current: navigation.location?.pathname === "/menus",
    // },
  ];
  return routes2.push({
    name: "Create Recipe",
    href: "/recipes/create",
    current: ((_b = navigation.location) == null ? void 0 : _b.pathname) === "/recipes/create"
  }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Disclosure, { as: "nav", className: "bg-gray-800", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: " Open main menu " }),
        open ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex flex-shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-8 h-8 text-white",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              }
            )
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex space-x-4", children: routes2.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
          item.name
        )) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AccountLink, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_remix.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SigninLink, {}) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "space-y-1 px-2 pt-2 pb-3", children: routes2.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      item.name
    )) }) })
  ] }) });
}

// app/components/Footer.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "bg-white", "aria-labelledby": "footer-heading", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-12 border-t border-gray-200 pt-8", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-base text-gray-400 xl:text-center", children: "\xA9 2022 Bithuis, LLC. All rights reserved." }) }) }) });
}

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta = () => ({ title: "New Remix App" }), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Header, { isOwner: !0 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer, {})
    ] })
  ] });
}
var root_default = (0, import_remix2.ClerkApp)(App), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)();

// app/routes/recipes/edit/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action,
  default: () => id_default,
  loader: () => loader2
});
var import_react6 = require("react");

// app/components/forms/descriptionInput.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function DescriptionInput(props) {
  let { description, setDescription } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "label",
      {
        htmlFor: "description",
        className: "block text-sm font-medium text-gray-700",
        children: "Description"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      }
    ) })
  ] });
}

// app/components/forms/titleInput.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function TitleInput(props) {
  let { title, setTitle } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "label",
      {
        htmlFor: "title",
        className: "block text-sm font-medium text-gray-700",
        children: "Title"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "input",
      {
        type: "text",
        name: "title",
        id: "title",
        autoComplete: "given-name",
        className: "block w-full p-2 rounded-md border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        value: title,
        onChange: (e) => setTitle(e.target.value)
      }
    ) })
  ] });
}

// app/components/forms/stepsInput.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "sm:col-span-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "block text-md font-medium text-gray-700 mb-4", children: "Steps" }),
    steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "my-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "label",
        {
          htmlFor: "step",
          className: "block text-sm font-medium text-gray-500",
          children: [
            "Step ",
            index + 1
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex-none content-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            className: "m-2",
            type: "button",
            onClick: removeStep(index),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6",
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        ) })
      ] })
    ] }, index)),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "m-2", type: "button", onClick: addStep, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-6 h-6 border-2 border-indigo-700 rounded-md",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.5v15m7.5-7.5h-15"
          }
        )
      }
    ) })
  ] });
}

// app/components/forms/ingredientsInput.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "sm:col-span-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "block text-md font-medium text-gray-700 mb-4", children: "Ingredients" }),
    ingredients.map((ingredient, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex my-2 md:w-1/2 w-full space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "label",
          {
            htmlFor: "ingredient",
            className: "block text-sm font-medium text-gray-700",
            children: [
              "Ingredient ",
              index + 1
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
          }
        ) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex-none content-end", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          className: "mt-8",
          type: "button",
          onClick: removeIngredient(index),
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            }
          )
        }
      ) })
    ] }, index)),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        type: "button",
        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        onClick: addIngredient,
        children: "Add"
      }
    )
  ] });
}

// app/components/forms/categoriesInput.tsx
var import_react5 = require("react"), import_jsx_runtime9 = require("react/jsx-runtime");
function CategoriesInput(props) {
  let { categories, setCategories } = props, [categoryInput, setCategoryInput] = (0, import_react5.useState)(""), addCategory = (category) => {
    category !== "" && (setCategories([...categories, category]), setCategoryInput(""));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "sm:col-span-6 max-w-7xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "label",
      {
        htmlFor: "location",
        className: "block text-sm font-medium text-gray-700",
        children: "Categories"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "input",
      {
        type: "text",
        name: "category",
        className: "w-48 mt-1 rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        onChange: (e) => {
          setCategoryInput(e.target.value);
        },
        value: categoryInput
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "button",
      {
        type: "button",
        className: "inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        onClick: () => {
          addCategory(categoryInput);
        },
        children: "Add"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { role: "list", className: "flex flex-wrap m-2", children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "li",
      {
        className: "relative flex-initial mr-4 mt-4 p-3 shadow-sm rounded-lg bg-indigo-100 text-md font-medium text-indigo-800 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              )
            }
          ) }),
          category
        ]
      },
      index
    )) }) })
  ] });
}

// app/components/forms/imagesInput.tsx
var import_uuid = require("uuid"), import_jsx_runtime10 = require("react/jsx-runtime");
function ImagesInput(props) {
  let { setImageUrl } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "sm:col-span-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "label",
      {
        htmlFor: "cover-image",
        className: "block text-sm font-medium text-gray-700",
        children: "Images"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-1 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400",
          stroke: "currentColor",
          fill: "none",
          viewBox: "0 0 48 48",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "path",
            {
              d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex text-sm text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "label",
          {
            htmlFor: "file-upload",
            className: "relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Upload a file" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "pl-1", children: "or drag and drop" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-xs text-gray-500", children: "PNG, JPG, GIF up to 10MB" })
    ] }) })
  ] });
}

// app/components/forms/cancelAndSaveButtons.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function CancelAndSaveButton(props) {
  let { handleCancel, isSaveDisabled } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "pt-5", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-end", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "button",
      {
        type: "button",
        className: "rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        onClick: handleCancel,
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "button",
      {
        type: "submit",
        disabled: isSaveDisabled,
        className: "ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 disabled:bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        children: "Save"
      }
    )
  ] }) });
}

// app/routes/recipes/edit/$id.tsx
var import_outline2 = require("@heroicons/react/24/outline"), import_ssr2 = require("@clerk/remix/ssr.server"), import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/utils/db.server.ts
var import_axios = __toESM(require("axios")), import_dayjs = __toESM(require("dayjs"));
function buildConfig({
  action: action5,
  document = null,
  update = null,
  filter = null,
  projection = null,
  sort = null,
  limit = null,
  skip = null,
  pipeline = null
}) {
  let config = {
    method: "post",
    url: `${process.env.DATA_API_BASE_URL}/action/${action5}`,
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
  return document && (config.data.document = document), update && (config.data.update = update), filter && (config.data.filter = filter), projection && (config.data.projection = projection), sort && (config.data.sort = sort), limit && (config.data.limit = limit), skip && (config.data.skip = skip), pipeline && (config.data.pipeline = pipeline), config;
}
async function createRecipe(title, description, ingredients, steps, categories, photoUrl) {
  let action5 = "insertOne", document = {
    title,
    description,
    ingredients,
    steps,
    categories,
    photoUrl,
    createdAt: (0, import_dayjs.default)().format(),
    updatedAt: (0, import_dayjs.default)().format()
  }, config = buildConfig({ action: action5, document });
  return (await (0, import_axios.default)(config)).data.insertedId;
}
async function updateRecipe(id, title, description, ingredients, steps, categories, photoUrl) {
  let action5 = "updateOne", filter = {
    _id: { $oid: id }
  }, update = {
    $set: {
      title,
      description,
      ingredients,
      steps,
      categories,
      photoUrl,
      updatedAt: (0, import_dayjs.default)().format()
    }
  }, config = buildConfig({ action: action5, filter, update });
  return (await (0, import_axios.default)(config)).data.modifiedCount;
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
async function deleteRecipe(id) {
  let config = buildConfig({ action: "deleteOne", filter: {
    _id: { $oid: id }
  } });
  return (await (0, import_axios.default)(config)).data.deletedCount;
}

// app/routes/recipes/edit/$id.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), loader2 = async (args) => {
  let { userId } = await (0, import_ssr2.getAuth)(args);
  if (!userId)
    return (0, import_node.redirect)("/sign-in");
  let id = args.params.id;
  return await getRecipe(id);
};
async function action({ params, request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData), id = params.id;
  return await updateRecipe(
    id,
    values.title,
    values.description,
    values.ingredients.split(","),
    values.steps.split(","),
    values.categories.split(","),
    values.photoUrl
  ), (0, import_node.redirect)(`/recipes/${id}`);
}
var UpdateRecipe = () => {
  let recipe = (0, import_react7.useLoaderData)(), submit = (0, import_react7.useSubmit)(), [title, setTitle] = (0, import_react6.useState)(recipe.title), [categories, setCategories] = (0, import_react6.useState)(recipe.categories || []), [description, setDescription] = (0, import_react6.useState)(recipe.description), [imageUrl, setImageUrl] = (0, import_react6.useState)(recipe.photoUrl), [ingredients, setIngredients] = (0, import_react6.useState)(recipe.ingredients || []), [steps, setSteps] = (0, import_react6.useState)(recipe.steps || []), [isLoading, setIsLoading] = (0, import_react6.useState)(!1);
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react7.Form, { onSubmit: handleSubmit, method: "post", className: "space-y-8 divide-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Create a New Recipe" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TitleInput, { title, setTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        CategoriesInput,
        {
          categories,
          setCategories
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DescriptionInput,
        {
          description,
          setDescription
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StepsInput, { steps, setSteps }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        IngredientsInput,
        {
          ingredients,
          setIngredients
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ImagesInput, { setImageUrl })
    ] }),
    imageUrl && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "items-center mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        import_outline2.CheckIcon,
        {
          className: "h-6 w-6 text-green-600",
          "aria-hidden": "true"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mt-3 text-center sm:mt-5", children: "Upload successful" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      CancelAndSaveButton,
      {
        handleCancel,
        isSaveDisabled: !1
      }
    )
  ] }) }) });
}, id_default = UpdateRecipe;

// app/routes/recipes/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action2,
  default: () => create_default,
  loader: () => loader3
});
var import_react8 = require("react");
var import_outline3 = require("@heroicons/react/24/outline"), import_ssr3 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_runtime13 = require("react/jsx-runtime"), loader3 = async (args) => {
  let { userId } = await (0, import_ssr3.getAuth)(args);
  return userId ? { userId } : (0, import_node2.redirect)("/sign-in");
};
async function action2({ request }) {
  let formData = await request.formData(), values = Object.fromEntries(formData), id = await createRecipe(
    values.title,
    values.description,
    values.ingredients.split(","),
    values.steps.split(","),
    values.categories.split(","),
    values.photoUrl
  );
  return (0, import_node2.redirect)(`/recipes/${id}`);
}
var CreateRecipe = () => {
  let { userId } = (0, import_react9.useLoaderData)(), submit = (0, import_react9.useSubmit)(), [title, setTitle] = (0, import_react8.useState)(""), [categories, setCategories] = (0, import_react8.useState)([]), [description, setDescription] = (0, import_react8.useState)(""), [imageUrl, setImageUrl] = (0, import_react8.useState)(""), [ingredients, setIngredients] = (0, import_react8.useState)([""]), [steps, setSteps] = (0, import_react8.useState)([""]), [isLoading, setIsLoading] = (0, import_react8.useState)(!1);
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react9.Form, { onSubmit: handleSubmit, method: "post", className: "space-y-8 divide-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Create a New Recipe" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TitleInput, { title, setTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        CategoriesInput,
        {
          categories,
          setCategories
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        DescriptionInput,
        {
          description,
          setDescription
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(StepsInput, { steps, setSteps }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        IngredientsInput,
        {
          ingredients,
          setIngredients
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ImagesInput, { setImageUrl })
    ] }),
    imageUrl && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "items-center mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_outline3.CheckIcon,
        {
          className: "h-6 w-6 text-green-600",
          "aria-hidden": "true"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-3 text-center sm:mt-5", children: "Upload successful" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      CancelAndSaveButton,
      {
        handleCancel,
        isSaveDisabled: !1
      }
    )
  ] }) }) });
}, create_default = CreateRecipe;

// app/routes/recipes/search.tsx
var search_exports = {};
__export(search_exports, {
  action: () => action3,
  default: () => search_default,
  loader: () => loader4
});
var import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/paginator.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Paginator(props) {
  let { length, page, setPage } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "nav",
    {
      className: "flex items-center border-gray-200 bg-white px-4 py-3 sm:px-6",
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-sm text-gray-700", children: [
          "Showing ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "font-medium", children: page * 8 - 7 }),
          " to",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "font-medium", children: page * 8 > length ? length : page * 8 }),
          " ",
          "of ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "font-medium", children: length }),
          " results"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-1 justify-between sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              type: "submit",
              onClick: () => {
                page > 1 && setPage(page - 1);
              },
              className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              type: "submit",
              onClick: () => {
                page < length / 8 && setPage(page + 1);
              },
              className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
              children: "Next"
            }
          )
        ] })
      ]
    }
  );
}

// app/components/recipeGrid/recipeBox.tsx
var import_react10 = require("@remix-run/react"), import_jsx_runtime15 = require("react/jsx-runtime");
function RecipeBox(props) {
  let { recipe } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react10.Link, { to: `/recipes/${recipe._id}`, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex flex-1 flex-col p-8", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "mt-6 text-lg font-medium text-gray-900", children: recipe.title }) }) });
}

// app/components/recipeGrid/index.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function RecipeGrid(props) {
  let { recipes } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "ul",
    {
      role: "list",
      className: "grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4",
      children: recipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "li",
        {
          className: "col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow",
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RecipeBox, { recipe })
        },
        recipe._id
      ))
    }
  );
}

// app/components/searchBar.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function SearchBar(props) {
  let { setSearchText } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex flex-col md:flex-row items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "mt-4 basis-3/4 mx-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { htmlFor: "search", className: "text-sm font-medium text-gray-700", children: "Search" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "input",
        {
          type: "text",
          name: "search",
          id: "search",
          className: "block w-full border-gray-300 p-2 border rounded-md pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
          onChange: (e) => setSearchText(e.target.value)
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mt-10 basis-1/4", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        type: "submit",
        className: "inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        children: "Search"
      }
    ) })
  ] });
}

// app/utils/search.server.ts
var import_axios2 = __toESM(require("axios"));
async function getRecipes(skip) {
  let config = buildConfig({ action: "find", sort: { title: 1, _id: 1 }, skip, limit: 8 });
  return (await (0, import_axios2.default)(config)).data.documents;
}
async function getRecipeCount() {
  let config = buildConfig({ action: "aggregate", pipeline: [{
    $count: "recipeCount"
  }] });
  return (await (0, import_axios2.default)(config)).data.documents[0].recipeCount;
}
async function searchRecipes(search, category, skip) {
  let config = buildConfig({ action: "aggregate", pipeline: [{
    $search: {
      index: "default",
      text: {
        query: search,
        path: {
          wildcard: "*"
        }
      },
      sort: { title: 1, _id: 1 },
      count: {
        type: "total"
      }
    }
  }], skip, category });
  return (await (0, import_axios2.default)(config)).data.documents;
}

// app/routes/recipes/search.tsx
var import_jsx_runtime18 = require("react/jsx-runtime"), loader4 = async ({ params }) => {
  let recipes = await getRecipes(0), recipeCount = await getRecipeCount();
  return { recipes, recipeCount };
}, action3 = async ({ request }) => {
  let formData = await request.formData(), values = Object.fromEntries(formData), skip = (parseInt(values.page) - 1) * 8;
  if (values.searchText === "") {
    let recipes2 = await getRecipes(skip), recipeCount2 = await getRecipeCount();
    return { recipes: recipes2, recipeCount: recipeCount2, shouldShowPaginator: !0 };
  }
  let recipes = await searchRecipes(values.searchText, values.selectedCategory, skip), recipeCount = await getRecipeCount();
  return { recipes, recipeCount, shouldShowPaginator: !1 };
}, Recipes = () => {
  let { recipes, recipeCount } = (0, import_react11.useLoaderData)(), actionData = (0, import_react11.useActionData)();
  actionData && (recipes = actionData.recipes, recipeCount = actionData.recipeCount);
  let [page, setPage] = (0, import_react12.useState)(1), [searchText, setSearchText] = (0, import_react12.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react11.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "page", value: page, hidden: !0, readOnly: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "searchText", value: searchText, hidden: !0, readOnly: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-xl mt-6", children: "Recipes" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      SearchBar,
      {
        setSearchText,
        page
      }
    ),
    recipeCount === 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-xl mt-6", children: "No recipes found" }),
    recipeCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "py-4 mt-6", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RecipeGrid, { recipes }) }),
      searchText === "" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        Paginator,
        {
          page,
          setPage,
          length: recipeCount
        }
      )
    ] })
  ] }) });
}, search_default = Recipes;

// app/routes/menu/create.tsx
var create_exports2 = {};
__export(create_exports2, {
  default: () => create_default2
});
var CreateMenu = () => {
}, create_default2 = CreateMenu;

// app/routes/recipes/$id.tsx
var id_exports2 = {};
__export(id_exports2, {
  action: () => action4,
  default: () => Recipe,
  loader: () => loader5
});
var import_clsx = __toESM(require("clsx")), import_node3 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/components/deleteModal.tsx
var import_react13 = require("react"), import_react14 = require("@headlessui/react"), import_outline4 = require("@heroicons/react/24/outline"), import_jsx_runtime19 = require("react/jsx-runtime");
function DeleteRecipeModal(props) {
  let { open, setOpen, itemToDelete } = props, cancelButtonRef = (0, import_react13.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react14.Transition.Root, { show: open, as: import_react13.Fragment, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_react14.Dialog,
    {
      as: "div",
      className: "relative z-10",
      initialFocus: cancelButtonRef,
      onClose: setOpen,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_react14.Transition.Child,
          {
            as: import_react13.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_react14.Transition.Child,
          {
            as: import_react13.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react14.Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sm:flex sm:items-start", children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  import_outline4.ExclamationTriangleIcon,
                  {
                    className: "h-6 w-6 text-red-600",
                    "aria-hidden": "true"
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                    import_react14.Dialog.Title,
                    {
                      as: "h3",
                      className: "text-lg font-medium leading-6 text-gray-900",
                      children: [
                        "Delete ",
                        itemToDelete
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "text-sm text-gray-500", children: [
                    "Are you sure you want to delete this",
                    " ",
                    itemToDelete.toLowerCase(),
                    "? All of your data will be permanently removed from our servers forever. This action cannot be undone."
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  "button",
                  {
                    type: "submit",
                    name: "action",
                    value: "_delete",
                    className: "inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",
                    children: "Delete"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",
                    onClick: () => setOpen(!1),
                    ref: cancelButtonRef,
                    children: "Cancel"
                  }
                )
              ] })
            ] })
          }
        ) }) })
      ]
    }
  ) });
}

// app/routes/recipes/$id.tsx
var import_react16 = require("react"), import_jsx_runtime20 = require("react/jsx-runtime"), loader5 = async ({ params }) => {
  let id = params.id;
  return await getRecipe(id);
}, action4 = async ({ params, request }) => {
  let id = params.id, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  return _action === "_delete" ? (await deleteRecipe(id), (0, import_node3.redirect)("/recipes")) : (0, import_node3.redirect)(`/recipes/${id}`);
};
function Recipe() {
  let recipe = (0, import_react15.useLoaderData)(), [openDelete, setOpenDelete] = (0, import_react16.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-start content-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-4xl font-bold text-gray-900 p-1", children: recipe.title }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { className: "text-md text-gray-500 mt-2", children: [
      "Published on ",
      recipe.createdAt
    ] }),
    recipe.categories && recipe.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex flex-wrap", children: recipe.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        className: "flex-initial mr-4 mt-4 p-2 shadow-sm rounded-lg bg-indigo-100 text-md font-medium text-indigo-800 text-center",
        children: category
      },
      index
    )) }),
    recipe.photo && recipe.photo !== "" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mx-auto max-w-4xl m-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "img",
      {
        src: recipe.photo,
        alt: recipe.title,
        height: 300,
        width: 300
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-2xl text-gray-500 mt-2", children: "Description" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-gray-900", children: recipe.description }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-2xl text-gray-500 mt-2", children: "Ingredients" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "list-disc list-inside", children: recipe.ingredients.map((ingredient, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { className: "text-gray-900 p-1", children: ingredient }, index)) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-2xl text-gray-500 mt-2", children: "Steps" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ol", { className: "list-decimal list-inside", children: recipe.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { className: "text-gray-900 p-1", children: step }, index)) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        import_react15.Link,
        {
          className: "inline-flex items-center rounded-md border border-transparent bg-gray-400 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2",
          to: `/recipes/edit/${recipe._id}`,
          children: "Edit"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "button",
        {
          type: "button",
          className: "inline-flex items-center rounded-md border border-transparent bg-red-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2",
          onClick: () => setOpenDelete(!0),
          children: "Delete"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react15.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      DeleteRecipeModal,
      {
        open: openDelete,
        setOpen: setOpenDelete,
        itemToDelete: "Recipe"
      }
    ) })
  ] });
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix3 = require("@clerk/remix"), import_jsx_runtime21 = require("react/jsx-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto max-w-sm mt-8", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_remix3.SignIn, { path: "/sign-in", routing: "path", signUpUrl: "/sign-up" }) });
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpPage
});
var import_remix4 = require("@clerk/remix"), import_jsx_runtime22 = require("react/jsx-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mx-auto max-w-sm mt-8", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_remix4.SignUp, { path: "/sign-up", routing: "path", signInUrl: "/sign-in" }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_react17 = require("@remix-run/react");

// app/images/recipe.png
var recipe_default = "/build/_assets/recipe-VOGOFNXP.png";

// app/images/menu.jpg
var menu_default = "/build/_assets/menu-ZK4ZMNVE.jpg";

// app/routes/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function Card({ title, description, image, url }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "col-span-1 rounded-2xl bg-gray-800 px-8 py-10 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "mt-6 text-2xl font-semibold leading-7 tracking-tight text-white", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-md leading-6 text-gray-400", children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mt-8 flex justify-center rounded-md", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "img",
      {
        src: image,
        alt: "",
        className: "rounded-lg",
        width: 300,
        height: 300
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "m-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      import_react17.Link,
      {
        type: "button",
        className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        to: url,
        children: title
      }
    ) })
  ] });
}
var Home = () => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-2xl text-center m-6", children: "Crystal's Cooking" }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-md text-center m-6", children: "Bacon ipsum dolor amet fatback swine cupim capicola tail. Kevin ball tip cupim meatloaf strip steak. Chislic pork chicken meatloaf beef tenderloin shankle tongue cow rump biltong filet mignon. Beef ribs pancetta tenderloin, spare ribs ribeye sausage filet mignon turkey chislic tail brisket salami. Shankle biltong cow, sirloin porchetta pastrami buffalo tail swine bacon." }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "grid grid-cols-2 space-x-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Card,
      {
        title: "Recipes",
        description: "Your favorite recipes",
        image: recipe_default,
        url: "/recipes"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Card,
      {
        title: "Menus",
        description: "Curated menus for a special occasion",
        image: menu_default,
        url: "/menus"
      }
    )
  ] })
] }), routes_default = Home;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QRKREF2N.js", imports: ["/build/_shared/chunk-2LJ3HF3F.js", "/build/_shared/chunk-2ZC3NUNJ.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NNXOWFA3.js", imports: ["/build/_shared/chunk-T6T2AEVA.js", "/build/_shared/chunk-X7KZMCHC.js", "/build/_shared/chunk-CIRPIAQD.js", "/build/_shared/chunk-APQ4DIHV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-K3LRGFVI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/menu/create": { id: "routes/menu/create", parentId: "root", path: "menu/create", index: void 0, caseSensitive: void 0, module: "/build/routes/menu/create-5SI5CAKA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes/$id": { id: "routes/recipes/$id", parentId: "root", path: "recipes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes/$id-3QRVAZOL.js", imports: ["/build/_shared/chunk-FUCYWCFS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes/create": { id: "routes/recipes/create", parentId: "root", path: "recipes/create", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes/create-6OPPY22X.js", imports: ["/build/_shared/chunk-SU53JMIU.js", "/build/_shared/chunk-FUCYWCFS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes/edit/$id": { id: "routes/recipes/edit/$id", parentId: "root", path: "recipes/edit/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes/edit/$id-WKBDVCE4.js", imports: ["/build/_shared/chunk-SU53JMIU.js", "/build/_shared/chunk-FUCYWCFS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes/search": { id: "routes/recipes/search", parentId: "root", path: "recipes/search", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes/search-PND4GMC4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-TGGVW6FZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-2SVZTUGY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "9f6bc87d", hmr: void 0, url: "/build/manifest-9F6BC87D.js" };

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
  "routes/recipes/edit/$id": {
    id: "routes/recipes/edit/$id",
    parentId: "root",
    path: "recipes/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/recipes/create": {
    id: "routes/recipes/create",
    parentId: "root",
    path: "recipes/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/recipes/search": {
    id: "routes/recipes/search",
    parentId: "root",
    path: "recipes/search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
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
    module: id_exports2
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

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
