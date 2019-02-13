const tsImportPluginFactory = require('ts-import-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    const tsLoader = getLoader(
        config.module.rules,
        rule =>
        rule.loader &&
        typeof rule.loader === 'string' &&
        rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            })]
        })
    };

    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        (process.env.NODE_ENV === 'production') ?
        new CopyWebpackPlugin([{
            from: 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js',
            to: 'dist'
        }, {
            from: 'node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.signalr-client.js',
            to: 'dist'
        }, {
            from: 'src/lib/abp.js',
            to: 'dist'
        }]) :
        new CopyWebpackPlugin([{
            from: 'node_modules/@aspnet/signalr/dist/browser/signalr.min.js',
            to: 'dist'
        }, {
            from: 'node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.signalr-client.js',
            to: 'dist'
        }, {
            from: 'src/lib/abp.js',
            to: 'dist'
        }])
    );

    return config;
}
