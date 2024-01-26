// actions/index.js
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});
export const setRepositories = (repositories) => ({
    type: 'SET_REPOSITORIES',
    payload: repositories,
});
export const clearUserData = () => ({
    type: 'CLEAR_USER_DATA',
});
export const setSelectedRepository = (repository) => ({
    type: 'SET_SELECTED_REPOSITORY',
    payload: repository,
});
