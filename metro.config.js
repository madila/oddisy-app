// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

let config = getDefaultConfig(__dirname);
module.exports = async () => {
    config.resolver.assetExts.push(['db', 'mp3', 'ttf', 'obj', 'png', 'jpg']);
    return {
        config
    };
};
