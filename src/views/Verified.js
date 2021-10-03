import React, { useContext, useEffect } from 'react'
import { AuthContext } from './auth-context';
import { useHttpClient } from './http-hook';

const Verified = () => {
    const {sendRequest} = useHttpClient();
    const auth = useContext(AuthContext);

    useEffect(() => {
        const verification = async () => {
            var dataTemp = null;
            try {
                console.log('im in')
                const data1 = JSON.parse(localStorage.getItem('authData'));
                console.log(data1)
                if (data1) {
                    var responseData = null;
                    console.log(dataTemp)
                    dataTemp = {
                        userId: data1.userId,
                        token: data1.token,
                        confirmed: true
                    }
                    console.log(dataTemp)
                    // try {
                    //     responseData = await sendRequest('http://localhost:8000/api/users/auth',
                    //         'POST',
                    //         dataTemp,
                    //         {'Content-Type': 'application/json'}
                    //     );
                    // }
                    try {
                        responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/auth`,
                            'POST',
                            JSON.stringify({
                                userId: data1.userId,
                                token: data1.token,
                                confirmed: data1.confirmed
                            }),
                            {
                                'Content-Type': 'application/json'
                            },
                        )
                    } catch (err) { console.log(err) }
                    localStorage.removeItem('authData');

                    console.log('im innnnn')
                    // localStorage.setItem('authData', JSON.stringify(dataTemp))
                    console.log(responseData.userId+ '   11111111')
                    auth.login(responseData.userId, responseData.token);
                }
            } catch (err) {
                console.log('adadasd' + err)
                //not handling errors here because the errors are being handled in our custom hook (http-hook)
            }
        }

        verification();
    }, [sendRequest])

    return (
        <div>
            email verified!
        </div>
    )
}

export default Verified;
