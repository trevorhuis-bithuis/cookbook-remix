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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => handleRequest2
});
var import_node_stream2 = require("node:stream"), import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_isbot2 = __toESM(require("isbot")), import_server2 = require("react-dom/server"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), ABORT_DELAY2 = 5e3;
function handleRequest2(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot2.default)(request.headers.get("user-agent")) ? handleBotRequest2(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest2(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest2(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react2.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY2
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream2.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY2);
  });
}
function handleBrowserRequest2(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react2.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY2
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream2.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node2.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY2);
  });
}

// app/routes/recipes.edit.$id.tsx
var recipes_edit_id_exports = {};
__export(recipes_edit_id_exports, {
  action: () => action,
  default: () => recipes_edit_id_default,
  loader: () => loader
});
var import_react4 = require("react");

// app/components/forms/descriptionInput.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function DescriptionInput(props) {
  let { description, setDescription } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "textarea",
      {
        id: "description",
        name: "description",
        rows: 2,
        className: "block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
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
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TitleInput(props) {
  let { title, setTitle } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "input",
      {
        type: "text",
        name: "title",
        id: "title",
        autoComplete: "given-name",
        className: "block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
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
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "sm:col-span-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-md mb-4 block font-medium text-gray-700", children: "Steps" }, void 0, !1, {
      fileName: "app/components/forms/stepsInput.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "textarea",
          {
            id: "step",
            name: "step",
            rows: 2,
            className: "block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-none content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "button",
          {
            className: "m-2",
            type: "button",
            onClick: removeStep(index),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "h-6 w-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "m-2", type: "button", onClick: addStep, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "h-6 w-6 rounded-md border-2 border-indigo-700",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sm:col-span-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-md mb-4 block font-medium text-gray-700", children: "Ingredients" }, void 0, !1, {
      fileName: "app/components/forms/ingredientsInput.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    ingredients.map((ingredient, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "my-2 flex w-full space-x-2 md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            type: "text",
            name: "ingredient",
            className: "block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-none content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          className: "mt-8",
          type: "button",
          onClick: removeIngredient(index),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "h-6 w-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "button",
        className: "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
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
var import_react3 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function CategoriesInput(props) {
  let { categories, setCategories } = props, [categoryInput, setCategoryInput] = (0, import_react3.useState)(""), addCategory = (category) => {
    category !== "" && (setCategories([...categories, category]), setCategoryInput(""));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "max-w-7xl sm:col-span-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "input",
      {
        type: "text",
        name: "category",
        className: "mt-1 w-48 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "button",
      {
        type: "button",
        className: "mx-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "m-2 flex flex-wrap", children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "li",
      {
        className: "text-md relative mr-4 mt-4 flex-initial rounded-lg bg-indigo-100 p-3 text-center font-medium text-indigo-800 shadow-sm",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              className: "absolute -right-2 -top-2 h-6 w-6 rounded-full bg-indigo-100",
              onClick: () => {
                setCategories(
                  categories.filter((c) => c !== category)
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
var import_uuid = require("uuid"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ImagesInput(props) {
  let { setImageUrl } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sm:col-span-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-1 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400",
          stroke: "currentColor",
          fill: "none",
          viewBox: "0 0 48 48",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex text-sm text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "label",
          {
            htmlFor: "file-upload",
            className: "relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Upload a file" }, void 0, !1, {
                fileName: "app/components/forms/imagesInput.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "pl-1", children: "or drag and drop" }, void 0, !1, {
          fileName: "app/components/forms/imagesInput.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/imagesInput.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-xs text-gray-500", children: "PNG, JPG, GIF up to 10MB" }, void 0, !1, {
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function CancelAndSaveButton(props) {
  let { handleCancel, isSaveDisabled } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        type: "button",
        className: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        type: "submit",
        disabled: isSaveDisabled,
        className: "ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-600",
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

// app/routes/recipes.edit.$id.tsx
var import_outline = require("@heroicons/react/24/outline"), import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/models/recipe.server.ts
var import_axios = __toESM(require("axios")), import_dayjs = __toESM(require("dayjs"));

// app/utils/db.server.ts
function buildConfig({
  action: action8,
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
    url: `${process.env.DATA_API_BASE_URL}/action/${action8}`,
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

// app/models/recipe.server.ts
var createRecipe = async (title, description, ingredients, steps, categories, photoUrl) => {
  let action8 = "insertOne", document = {
    title,
    description,
    ingredients,
    steps,
    categories,
    photoUrl,
    createdAt: (0, import_dayjs.default)().format(),
    updatedAt: (0, import_dayjs.default)().format()
  }, config = buildConfig({ action: action8, document });
  return (await (0, import_axios.default)(config)).data.insertedId;
}, updateRecipe = async (id, title, description, ingredients, steps, categories, photoUrl) => {
  let action8 = "updateOne", filter = {
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
  }, config = buildConfig({ action: action8, filter, update });
  return (await (0, import_axios.default)(config)).data.modifiedCount;
}, getRecipe = async (id) => {
  let config = buildConfig({ action: "findOne", filter: {
    _id: { $oid: id }
  } }), result = await (0, import_axios.default)(config);
  return {
    ...result.data.document,
    createdAt: (0, import_dayjs.default)(result.data.document.createdAt).format("MMMM DD, YYYY")
  };
}, deleteRecipe = async (id) => {
  let config = buildConfig({ action: "deleteOne", filter: {
    _id: { $oid: id }
  } });
  return (await (0, import_axios.default)(config)).data.deletedCount;
};

// app/routes/recipes.edit.$id.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader = async (args) => {
  let id = args.params.id;
  return await getRecipe(id);
}, action = async ({
  params,
  request
}) => {
  let formData = await request.formData(), values = Object.fromEntries(formData), id = params.id;
  return await updateRecipe(
    id,
    values.title,
    values.description,
    values.ingredients.split(","),
    values.steps.split(","),
    values.categories.split(","),
    values.photoUrl
  ), (0, import_node3.redirect)(`/recipes/${id}`);
}, UpdateRecipe = () => {
  let recipe = (0, import_react5.useLoaderData)(), submit = (0, import_react5.useSubmit)(), [title, setTitle] = (0, import_react4.useState)(recipe.title), [categories, setCategories] = (0, import_react4.useState)(
    recipe.categories || []
  ), [description, setDescription] = (0, import_react4.useState)(recipe.description), [imageUrl, setImageUrl] = (0, import_react4.useState)(recipe.photoUrl), [ingredients, setIngredients] = (0, import_react4.useState)(
    recipe.ingredients || []
  ), [steps, setSteps] = (0, import_react4.useState)(recipe.steps || []);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react5.Form,
    {
      onSubmit: handleSubmit,
      method: "post",
      className: "space-y-8 divide-gray-200",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Create a New Recipe" }, void 0, !1, {
          fileName: "app/routes/recipes.edit.$id.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TitleInput, { title, setTitle }, void 0, !1, {
            fileName: "app/routes/recipes.edit.$id.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            CategoriesInput,
            {
              categories,
              setCategories
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.edit.$id.tsx",
              lineNumber: 117,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            DescriptionInput,
            {
              description,
              setDescription
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.edit.$id.tsx",
              lineNumber: 122,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(StepsInput, { steps, setSteps }, void 0, !1, {
            fileName: "app/routes/recipes.edit.$id.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            IngredientsInput,
            {
              ingredients,
              setIngredients
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.edit.$id.tsx",
              lineNumber: 129,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ImagesInput, { setImageUrl }, void 0, !1, {
            fileName: "app/routes/recipes.edit.$id.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/recipes.edit.$id.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_outline.CheckIcon,
            {
              className: "h-6 w-6 text-green-600",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.edit.$id.tsx",
              lineNumber: 140,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/recipes.edit.$id.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-3 text-center sm:mt-5", children: "Upload successful" }, void 0, !1, {
            fileName: "app/routes/recipes.edit.$id.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/recipes.edit.$id.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          CancelAndSaveButton,
          {
            handleCancel,
            isSaveDisabled: !1
          },
          void 0,
          !1,
          {
            fileName: "app/routes/recipes.edit.$id.tsx",
            lineNumber: 148,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/recipes.edit.$id.tsx",
      lineNumber: 105,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/recipes.edit.$id.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/recipes.edit.$id.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}, recipes_edit_id_default = UpdateRecipe;

// app/routes/recipes.create.tsx
var recipes_create_exports = {};
__export(recipes_create_exports, {
  action: () => action2,
  default: () => recipes_create_default,
  loader: () => loader2
});
var import_react6 = require("react");
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader2 = async (args) => ({}), action2 = async ({ request }) => {
  let formData = await request.formData(), values = Object.fromEntries(formData), id = await createRecipe(
    values.title,
    values.description,
    values.ingredients.split(","),
    values.steps.split(","),
    values.categories.split(","),
    values.photoUrl
  );
  return (0, import_node4.redirect)(`/recipes/${id}`);
}, CreateRecipe = () => {
  let submit = (0, import_react7.useSubmit)(), [title, setTitle] = (0, import_react6.useState)(""), [categories, setCategories] = (0, import_react6.useState)([]), [description, setDescription] = (0, import_react6.useState)(""), [imageUrl, setImageUrl] = (0, import_react6.useState)(""), [ingredients, setIngredients] = (0, import_react6.useState)([""]), [steps, setSteps] = (0, import_react6.useState)([""]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react7.Form,
    {
      onSubmit: (event) => {
        event.preventDefault();
        let $form = event.currentTarget, formData = new FormData($form);
        formData.set("ingredients", `${ingredients.join(",")}`), formData.set("categories", `${categories.join(",")}`), formData.set("steps", `${steps.join(",")}`), formData.set("photoUrl", imageUrl), formData.delete("ingredient"), formData.delete("step"), formData.delete("'file-upload'"), formData.delete("category"), submit(formData, {
          // @ts-ignore
          method: $form.getAttribute("method") ?? $form.method,
          action: $form.getAttribute("action") ?? $form.action
        });
      },
      method: "post",
      className: "space-y-8 divide-gray-200",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Create a New Recipe" }, void 0, !1, {
          fileName: "app/routes/recipes.create.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(TitleInput, { title, setTitle }, void 0, !1, {
            fileName: "app/routes/recipes.create.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            CategoriesInput,
            {
              categories,
              setCategories
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.create.tsx",
              lineNumber: 102,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            DescriptionInput,
            {
              description,
              setDescription
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.create.tsx",
              lineNumber: 107,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(StepsInput, { steps, setSteps }, void 0, !1, {
            fileName: "app/routes/recipes.create.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            IngredientsInput,
            {
              ingredients,
              setIngredients
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.create.tsx",
              lineNumber: 114,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ImagesInput, { setImageUrl }, void 0, !1, {
            fileName: "app/routes/recipes.create.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/recipes.create.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-3 text-center sm:mt-5", children: "Upload successful" }, void 0, !1, {
          fileName: "app/routes/recipes.create.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/recipes.create.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          CancelAndSaveButton,
          {
            handleCancel: () => {
              console.log("cancel");
            },
            isSaveDisabled: !1
          },
          void 0,
          !1,
          {
            fileName: "app/routes/recipes.create.tsx",
            lineNumber: 133,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/recipes.create.tsx",
      lineNumber: 90,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/recipes.create.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/recipes.create.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}, recipes_create_default = CreateRecipe;

// app/routes/recipes.search.tsx
var recipes_search_exports = {};
__export(recipes_search_exports, {
  action: () => action3,
  default: () => recipes_search_default,
  loader: () => loader3
});
var import_react9 = require("@remix-run/react"), import_react10 = require("react");

// app/components/paginator.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Paginator(props) {
  let { length, page, setPage } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "nav",
    {
      className: "flex items-center border-gray-200 bg-white px-4 py-3 sm:px-6",
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-sm text-gray-700", children: [
          "Showing ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "font-medium", children: page * 8 - 7 }, void 0, !1, {
            fileName: "app/components/paginator.tsx",
            lineNumber: 17,
            columnNumber: 19
          }, this),
          " to",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "font-medium", children: page * 8 > length ? length : page * 8 }, void 0, !1, {
            fileName: "app/components/paginator.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this),
          " ",
          "of ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "font-medium", children: length }, void 0, !1, {
            fileName: "app/components/paginator.tsx",
            lineNumber: 21,
            columnNumber: 14
          }, this),
          " results"
        ] }, void 0, !0, {
          fileName: "app/components/paginator.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/paginator.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-1 justify-between sm:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "button",
            {
              type: "submit",
              onClick: () => {
                page > 1 && setPage(page - 1);
              },
              className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
              children: "Previous"
            },
            void 0,
            !1,
            {
              fileName: "app/components/paginator.tsx",
              lineNumber: 25,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "button",
            {
              type: "submit",
              onClick: () => {
                page < length / 8 && setPage(page + 1);
              },
              className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
              children: "Next"
            },
            void 0,
            !1,
            {
              fileName: "app/components/paginator.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/paginator.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/paginator.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/recipeGrid/recipeBox.tsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function RecipeBox(props) {
  let { recipe } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react8.Link, { to: `/recipes/${recipe._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-1 flex-col p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "mt-6 text-lg font-medium text-gray-900", children: recipe.title }, void 0, !1, {
    fileName: "app/components/recipeGrid/recipeBox.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/recipeGrid/recipeBox.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/recipeGrid/recipeBox.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/recipeGrid/index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function RecipeGrid(props) {
  let { recipes } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4", children: recipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "li",
    {
      className: "col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(RecipeBox, { recipe }, void 0, !1, {
        fileName: "app/components/recipeGrid/index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    },
    recipe._id,
    !1,
    {
      fileName: "app/components/recipeGrid/index.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/recipeGrid/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/searchBar.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function SearchBar(props) {
  let { setSearchText } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-center md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mx-2 mt-4 basis-3/4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "search", className: "text-sm font-medium text-gray-700", children: "Search" }, void 0, !1, {
        fileName: "app/components/searchBar.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "input",
        {
          type: "text",
          name: "search",
          id: "search",
          className: "block w-full rounded-md border border-gray-300 p-2 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
          onChange: (e) => setSearchText(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/components/searchBar.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/searchBar.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/searchBar.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-10 basis-1/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "mx-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        children: "Search"
      },
      void 0,
      !1,
      {
        fileName: "app/components/searchBar.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/searchBar.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/searchBar.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/recipes.search.tsx
var import_search = require("~/utils/search.server"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader3 = async ({ params }) => {
  let recipes = await (0, import_search.getRecipes)(0), recipeCount = await (0, import_search.getRecipeCount)();
  return { recipes, recipeCount };
}, action3 = async ({ request }) => {
  let formData = await request.formData(), values = Object.fromEntries(formData), skip = (parseInt(values.page) - 1) * 8;
  if (values.searchText === "") {
    let recipes2 = await (0, import_search.getRecipes)(skip), recipeCount2 = await (0, import_search.getRecipeCount)();
    return { recipes: recipes2, recipeCount: recipeCount2, shouldShowPaginator: !0 };
  }
  let recipes = await (0, import_search.searchRecipes)(
    values.searchText,
    values.selectedCategory,
    skip
  ), recipeCount = await (0, import_search.getRecipeCount)();
  return { recipes, recipeCount, shouldShowPaginator: !1 };
}, Recipes = () => {
  let { recipes, recipeCount } = (0, import_react9.useLoaderData)(), actionData = (0, import_react9.useActionData)();
  actionData && (recipes = actionData.recipes, recipeCount = actionData.recipeCount);
  let [page, setPage] = (0, import_react10.useState)(1), [searchText, setSearchText] = (0, import_react10.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { name: "page", value: page, hidden: !0, readOnly: !0 }, void 0, !1, {
      fileName: "app/routes/recipes.search.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { name: "searchText", value: searchText, hidden: !0, readOnly: !0 }, void 0, !1, {
      fileName: "app/routes/recipes.search.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "mt-6 text-xl", children: "Recipes" }, void 0, !1, {
      fileName: "app/routes/recipes.search.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SearchBar, { setSearchText, page }, void 0, !1, {
      fileName: "app/routes/recipes.search.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    recipeCount === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "mt-6 text-xl", children: "No recipes found" }, void 0, !1, {
      fileName: "app/routes/recipes.search.tsx",
      lineNumber: 67,
      columnNumber: 31
    }, this),
    recipeCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RecipeGrid, { recipes }, void 0, !1, {
        fileName: "app/routes/recipes.search.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/recipes.search.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this),
      searchText === "" && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Paginator, { page, setPage, length: recipeCount }, void 0, !1, {
        fileName: "app/routes/recipes.search.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/recipes.search.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/recipes.search.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/recipes.search.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}, recipes_search_default = Recipes;

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/recipes.$id.tsx
var recipes_id_exports = {};
__export(recipes_id_exports, {
  action: () => action4,
  default: () => recipes_id_default,
  loader: () => loader5
});
var import_clsx = __toESM(require("clsx")), import_node5 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/components/deleteModal.tsx
var import_react11 = require("react"), import_react12 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function DeleteRecipeModal(props) {
  let { open, setOpen, itemToDelete } = props, cancelButtonRef = (0, import_react11.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react12.Transition.Root, { show: open, as: import_react11.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_react12.Dialog,
    {
      as: "div",
      className: "relative z-10",
      initialFocus: cancelButtonRef,
      onClose: setOpen,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react12.Transition.Child,
          {
            as: import_react11.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
              fileName: "app/components/deleteModal.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/deleteModal.tsx",
            lineNumber: 24,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react12.Transition.Child,
          {
            as: import_react11.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react12.Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "sm:flex sm:items-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  import_outline2.ExclamationTriangleIcon,
                  {
                    className: "h-6 w-6 text-red-600",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/deleteModal.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/deleteModal.tsx",
                  lineNumber: 49,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                    import_react12.Dialog.Title,
                    {
                      as: "h3",
                      className: "text-lg font-medium leading-6 text-gray-900",
                      children: [
                        "Delete ",
                        itemToDelete
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/deleteModal.tsx",
                      lineNumber: 57,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                    "Are you sure you want to delete this",
                    " ",
                    itemToDelete.toLowerCase(),
                    "? All of your data will be permanently removed from our servers forever. This action cannot be undone."
                  ] }, void 0, !0, {
                    fileName: "app/components/deleteModal.tsx",
                    lineNumber: 64,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/components/deleteModal.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/deleteModal.tsx",
                  lineNumber: 56,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/deleteModal.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    name: "action",
                    value: "_delete",
                    className: "inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",
                    children: "Delete"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/deleteModal.tsx",
                    lineNumber: 74,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",
                    onClick: () => setOpen(!1),
                    ref: cancelButtonRef,
                    children: "Cancel"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/deleteModal.tsx",
                    lineNumber: 82,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/deleteModal.tsx",
                lineNumber: 73,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/deleteModal.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/deleteModal.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/deleteModal.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/deleteModal.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/deleteModal.tsx",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/deleteModal.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/recipes.$id.tsx
var import_react14 = require("react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  let id = params.id;
  return await getRecipe(id);
}, action4 = async ({
  params,
  request
}) => {
  let id = params.id, formData = await request.formData(), { _action } = Object.fromEntries(formData);
  return _action === "_delete" ? (await deleteRecipe(id), (0, import_node5.redirect)("/recipes")) : (0, import_node5.redirect)(`/recipes/${id}`);
}, Recipe = () => {
  let recipe = (0, import_react13.useLoaderData)(), [openDelete, setOpenDelete] = (0, import_react14.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex content-center justify-start space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "p-1 text-4xl font-bold text-gray-900", children: recipe.title }, void 0, !1, {
        fileName: "app/routes/recipes.$id.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: (0, import_clsx.default)(
            "h-6 w-6 hover:fill-red-500 active:animate-ping ",
            recipe.isFavorite && ""
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/recipes.$id.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes.$id.tsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/recipes.$id.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-md mt-2 text-gray-500", children: [
      "Published on ",
      recipe.createdAt
    ] }, void 0, !0, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    recipe.categories && recipe.categories.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-wrap", children: recipe.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "div",
      {
        className: "text-md mr-4 mt-4 flex-initial rounded-lg bg-indigo-100 p-2 text-center font-medium text-indigo-800 shadow-sm",
        children: category
      },
      index,
      !1,
      {
        fileName: "app/routes/recipes.$id.tsx",
        lineNumber: 76,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    recipe.photo && recipe.photo !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "m-4 mx-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: recipe.photo, alt: recipe.title, height: 300, width: 300 }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mt-2 text-2xl text-gray-500", children: "Description" }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-gray-900", children: recipe.description }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mt-2 text-2xl text-gray-500", children: "Ingredients" }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ul", { className: "list-inside list-disc", children: recipe.ingredients.map((ingredient, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "p-1 text-gray-900", children: ingredient }, index, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mt-2 text-2xl text-gray-500", children: "Steps" }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ol", { className: "list-inside list-decimal", children: recipe.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "p-1 text-gray-900", children: step }, index, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react13.Link,
        {
          className: "m-2 inline-flex items-center rounded-md border border-transparent bg-gray-400 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          to: `/recipes/edit/${recipe._id}`,
          children: "Edit"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes.$id.tsx",
          lineNumber: 109,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "button",
        {
          type: "button",
          className: "m-2 inline-flex items-center rounded-md border border-transparent bg-red-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          onClick: () => setOpenDelete(!0),
          children: "Delete"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/recipes.$id.tsx",
          lineNumber: 115,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react13.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      DeleteRecipeModal,
      {
        open: openDelete,
        setOpen: setOpenDelete,
        itemToDelete: "Recipe"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/recipes.$id.tsx",
        lineNumber: 124,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/recipes.$id.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/recipes.$id.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}, recipes_id_default = Recipe;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node");

// app/session.server.ts
var import_node6 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs")), import_axios2 = __toESM(require("axios")), import_dayjs2 = __toESM(require("dayjs")), buildUserConfig = ({ action: action8, document = null, filter = null }) => {
  let config = {
    method: "post",
    url: `${process.env.DATA_API_BASE_URL}/action/${action8}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.DATA_API_KEY
    },
    data: {
      dataSource: "cookbook",
      database: "cookbook",
      collection: "User"
    }
  };
  return document && (config.data.document = document), filter && (config.data.filter = filter), config;
};
var getUserByEmail = async (email) => {
  let config = buildUserConfig({ action: "findOne", filter: {
    email: { email }
  } }), result = await (0, import_axios2.default)(config);
  return {
    ...result.data.document,
    createdAt: (0, import_dayjs2.default)(result.data.document.createdAt).format("MMMM DD, YYYY")
  };
}, createUser = async (email, password) => {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10), action8 = "insertOne", document = {
    email,
    hashedPassword,
    createdAt: (0, import_dayjs2.default)().format(),
    updatedAt: (0, import_dayjs2.default)().format()
  }, config = buildUserConfig({ action: action8, document });
  return (await (0, import_axios2.default)(config)).data.insertedId;
};
var verifyLogin = async (email, password) => {
  let userWithPassword = await getUserByEmail(email);
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
};

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node6.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node6.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node6.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/routes/logout.tsx
var action5 = async ({ request }) => logout(request), loader6 = async () => (0, import_node7.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_react15 = require("@remix-run/react");

// app/images/recipe.png
var recipe_default = "/build/_assets/recipe-VOGOFNXP.png";

// app/images/menu.jpg
var menu_default = "/build/_assets/menu-ZK4ZMNVE.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function Card({ title, description, image, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-1 rounded-2xl bg-gray-800 px-8 py-10 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "mt-6 text-2xl font-semibold leading-7 tracking-tight text-white", children: title }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-md leading-6 text-gray-400", children: description }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-8 flex justify-center rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "m-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_react15.Link,
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
var Home = () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "m-6 text-center text-2xl", children: "Crystal's Cooking" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-md m-6 text-center", children: "Bacon ipsum dolor amet fatback swine cupim capicola tail. Kevin ball tip cupim meatloaf strip steak. Chislic pork chicken meatloaf beef tenderloin shankle tongue cow rump biltong filet mignon. Beef ribs pancetta tenderloin, spare ribs ribeye sausage filet mignon turkey chislic tail brisket salami. Shankle biltong cow, sirloin porchetta pastrami buffalo tail swine bacon." }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-2 space-x-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  loader: () => loader7,
  meta: () => meta
});
var import_node8 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");

// app/utils.ts
var import_react16 = require("@remix-run/react"), import_react17 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/login.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => await getUserId(request) ? (0, import_node8.redirect)("/") : (0, import_node8.json)({}), action6 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node8.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node8.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node8.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node8.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react18.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react18.useActionData)(), emailRef = (0, import_react19.useRef)(null), passwordRef = (0, import_react19.useRef)(null);
  return (0, import_react19.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react18.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 90,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 111,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 137,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 151,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_react18.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 160,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action7,
  default: () => Join,
  loader: () => loader8,
  meta: () => meta2
});
var import_node9 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_react21 = require("react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => await getUserId(request) ? (0, import_node9.redirect)("/") : (0, import_node9.json)({}), action7 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node9.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node9.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta2 = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react20.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react20.useActionData)(), emailRef = (0, import_react21.useRef)(null), passwordRef = (0, import_react21.useRef)(null);
  return (0, import_react21.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react20.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 151,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6POSAUFV.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-CAIWWLB3.js", "/build/_shared/chunk-Z7T72KI5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PKJNOEWB.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-UKIBAX2W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-U5WJMY2I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-7SFDUBFS.js", imports: ["/build/_shared/chunk-37NQGEZB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-OEFOW35P.js", imports: ["/build/_shared/chunk-37NQGEZB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes.$id": { id: "routes/recipes.$id", parentId: "root", path: "recipes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes.$id-4AIZSLOF.js", imports: ["/build/_shared/chunk-EMTRYSRI.js", "/build/_shared/chunk-KUZRNH7Y.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes.create": { id: "routes/recipes.create", parentId: "root", path: "recipes/create", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes.create-OG3YDWCJ.js", imports: ["/build/_shared/chunk-PWF3HWG7.js", "/build/_shared/chunk-KUZRNH7Y.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes.edit.$id": { id: "routes/recipes.edit.$id", parentId: "root", path: "recipes/edit/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes.edit.$id-JKX3OYTH.js", imports: ["/build/_shared/chunk-PWF3HWG7.js", "/build/_shared/chunk-EMTRYSRI.js", "/build/_shared/chunk-KUZRNH7Y.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/recipes.search": { id: "routes/recipes.search", parentId: "root", path: "recipes/search", index: void 0, caseSensitive: void 0, module: "/build/routes/recipes.search-AQGNJOFX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "8570277e", hmr: { runtime: "/build/_shared/chunk-Z7T72KI5.js", timestamp: 1691465903119 }, url: "/build/manifest-8570277E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/recipes.edit.$id": {
    id: "routes/recipes.edit.$id",
    parentId: "root",
    path: "recipes/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: recipes_edit_id_exports
  },
  "routes/recipes.create": {
    id: "routes/recipes.create",
    parentId: "root",
    path: "recipes/create",
    index: void 0,
    caseSensitive: void 0,
    module: recipes_create_exports
  },
  "routes/recipes.search": {
    id: "routes/recipes.search",
    parentId: "root",
    path: "recipes/search",
    index: void 0,
    caseSensitive: void 0,
    module: recipes_search_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/recipes.$id": {
    id: "routes/recipes.$id",
    parentId: "root",
    path: "recipes/:id",
    index: void 0,
    caseSensitive: void 0,
    module: recipes_id_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
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
