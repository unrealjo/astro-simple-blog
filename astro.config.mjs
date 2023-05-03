import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});