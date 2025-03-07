import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React import
      "@typescript-eslint/no-unused-vars": "warn", // Change 'error' to 'warn'
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disable explicit return types
      "no-console": "warn", // Allow console logs but show a warning
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive dependency checks for React hooks
    },
  },
];

export default eslintConfig;
