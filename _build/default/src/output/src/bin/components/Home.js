// Generated by Melange

import * as AboutMe from "./AboutMe.js";
import * as Header from "./Header.js";
import * as Layout from "./Layout.js";
import * as Link from "./Link.js";
import * as R from "../../lib/r/R.js";
import * as Stdlib__Array from "melange/array.js";
import * as Stdlib__List from "melange/list.js";
import * as Table from "./Table.js";
import * as JsxRuntime from "react/jsx-runtime";

function Home(Props) {
  return JsxRuntime.jsxs("div", {
    children: [
      JsxRuntime.jsx(Header.make, {}),
      JsxRuntime.jsx(AboutMe.home, {}),
      JsxRuntime.jsx("h3", {
        children: JsxRuntime.jsx("a", {
          children: R.s("→→→旧サイトはこちら←←←"),
          href: "https://astro.miya-lis.net/"
        }),
        className: "text-4xl pb-5 font-black"
      }),
      JsxRuntime.jsx("h1", {
        children: R.s("※※※ THIS WEB SITE IS UNDER CONSTRUCTION ※※※"),
        className: "text-4xl"
      }),
      JsxRuntime.jsx("h2", {
        children: JsxRuntime.jsx(Link.make, {
          path: "/",
          children: R.s("→→作り途中のやつ←←")
        }),
        className: "text-3xl"
      })
    ],
    className: "font-serif"
  });
}

function Home$dev(Props) {
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
    children: [
      JsxRuntime.jsxs(Layout.wrap, {
        children: [
          JsxRuntime.jsx(Header.make, {}),
          JsxRuntime.jsxs(Layout.wrapMain, {
            children: [
              JsxRuntime.jsx(AboutMe.home, {}),
              JsxRuntime.jsx(Table.make, {
                children: Stdlib__Array.of_list(Stdlib__List.map((function (param) {
                  return JsxRuntime.jsx(Table.element, {
                    path: param[0],
                    name: param[1]
                  });
                }), {
                  hd: [
                    "/aboutme",
                    "About me"
                  ],
                  tl: {
                    hd: [
                      "/prev",
                      "Prev Site"
                    ],
                    tl: /* [] */ 0
                  }
                }))
              })
            ]
          })
        ]
      }),
      JsxRuntime.jsx("footer", {
        children: JsxRuntime.jsx("h1", {
          children: R.s("※※ THIS WEB SITE IS UNDER CONSTRUCTION ※※"),
          className: "text-2xl"
        }),
        className: "text-center fixed bottom-0"
      })
    ]
  });
}

const make = Home;

const dev = Home$dev;

export {
  make,
  dev,
}
/* AboutMe Not a pure module */
