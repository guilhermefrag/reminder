/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4, // Set tabWidth to 4
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
