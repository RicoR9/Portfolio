import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
    index("pages/index.tsx"),
    route("information", "pages/Information.tsx"),
    route("about", "pages/About.tsx"),
    route("contact", "pages/Contact.tsx"),
    route("*", "pages/NoMatch.tsx"),
]   satisfies RouteConfig;
