module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    rules: {
        "max-len": 1,
        "no-console": 0,
        "no-undef": 0,
        "eol-last": 2,
        "no-confusing-arrow": 0,
        "no-tabs": 0,
        "no-unused-vars": 1,
        "indent": ["error", "tab"],
        "quotes": [
            "error",
            "single"
        ],
        "comma-spacing": [2, { "before": false, "after": true }],
        "comma-style": [2, "last"],
        "jsx-a11y/href-no-hash": 0,
        "import/no-extraneous-dependencies": 0
    }
};