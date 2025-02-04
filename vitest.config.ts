import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./vitest.setup.ts",
		coverage: {
			provider: "v8",
			include: ["src/components/**/*.{ts,tsx}"],
			exclude: ["src/components/**/schema.ts"],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
})
