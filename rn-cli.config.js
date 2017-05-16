module.exports = {
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer')
    },
    getProjectRoots() {
        return [__dirname];
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    }
}