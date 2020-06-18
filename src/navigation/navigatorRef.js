let navigatorRef = {}
export const setTopLevelNavigator = (val) => {
    navigatorRef = val
}

/**
 * 返回
 */
const goBack = () => {
    navigatorRef.goBack();
}
export { goBack }