import { useCallback, useEffect, useState } from "react";
let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState();
    const [tokenExpirationD, setTokenExpirationD] = useState();

    const login = useCallback((uid, token, expirationDate) => {
        setToken(token);
        setUserId(uid);
        const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);  //this generates the time of (current time + one hour)
        setTokenExpirationD(tokenExpirationDate);
        console.log(tokenExpirationDate);
        localStorage.setItem('userData', JSON.stringify({ expiration: tokenExpirationDate, userId: uid, token: token }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setTokenExpirationD(null);
        localStorage.clear();
    }, []);

    useEffect(() => {
        if (token && tokenExpirationD) {
            const remainingTime = tokenExpirationD.getTime() - new Date().getTime();    //get remaining time in milli seconds by useing date
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationD])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        console.log(storedData)
        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.userId, storedData.token, new Date(storedData.expiration));
        }
    }, [login]);

    return { token, login, logout, userId};
}