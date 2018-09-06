function auth(state = {test: true}, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {signin: true}
    case 'AUTH_EXISTS':
      return {userExists: true};
    case 'AUTH_ERROR':
      return {failedAuth: true}
    default:
      return state
  }
}
export default {
    auth
}