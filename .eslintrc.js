module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": { "ecmaVersion": "latest" },
    "rules": {
        "indent": [
            "error",
            2,
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "always",
        ],
        "no-console": ["error"],
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "comma-spacing": [
            "error",
            { "before": false, "after": true },
        ],
        "array-bracket-newline": [
            "error",
            { "multiline": true, "minItems": 3 },
        ],
        "array-element-newline": [
            "error",
            "consistent",
            { "multiline": true, "minItems": 3 },
        ],
        "array-bracket-spacing": [
            "error",
            "always",
        ],
        "brace-style": ["error"],
        "object-curly-newline": [
            "error",
            { "multiline": true },
        ],
    },
};
