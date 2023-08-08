import type {
  DataFunctionArgs,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import stylesheet from "~/tailwind.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = (args: DataFunctionArgs) => {
  return rootAuthLoader(
    args,
    ({ request }) => {
      const { userId, sessionId, getToken } = request.auth;
      console.log("Root loader auth:", { userId, sessionId, getToken });
      return { message: `Hello from the root loader :)` };
    },
    { loadUser: true }
  );
};

function App() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header isOwner={true} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export default ClerkApp(App);

export const CatchBoundary = ClerkCatchBoundary();
