import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // For deployment to github pages
  site: "https://unrealjo.github.io",
  base: "/astro-simple-blog",

  integrations: [
    partytown(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
