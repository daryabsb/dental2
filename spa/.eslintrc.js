module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "prettier",
    ],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : 0,
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : 0,
        "vue/multi-word-component-names": ["warn", {
            "ignores": ["Hero", "Headline", "Accordion", "Spotlight"]
        }],
        "vue/no-unused-components": "warn",
        // "no-multi-str": "warn",
        "no-unused-vars": "warn",
        "vue/require-explicit-emits": "off",

    },
    overrides: [{
        files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
        env: {
            jest: true,
        },
    },],
};