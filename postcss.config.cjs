module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        'postcss-preset-env': {
            stage: 0,
            autoprefixer: true,
            features: { 'nesting-rules': false },
        },
    },
};
