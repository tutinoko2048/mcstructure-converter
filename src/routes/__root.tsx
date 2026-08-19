import appCss from "../style.css?url";
import { AppProviders } from "../components/AppProviders";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"


export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "mcstructure converter" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png"
      }
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppProviders>
          <Outlet />
        </AppProviders>
        <Scripts />
      </body>
    </html>
  );
}
