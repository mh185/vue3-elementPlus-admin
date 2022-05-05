const Token = "ADMIN-TOKEN"

export function getToken() {
    return sessionStorage.getItem(Token)
}

export function setToken(token: any) {
    return sessionStorage.setItem(Token, token)
}

export function removeToken() {
    return sessionStorage.removeItem(Token);
}

export default {
    getToken,
    setToken,
    removeToken
}