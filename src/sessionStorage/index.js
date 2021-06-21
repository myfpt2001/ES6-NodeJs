class SessionStorage {
    static setSession(key, data) {
        sessionStorage.setItem(key, JSON.stringify(data))
    }
}

export default SessionStorage;