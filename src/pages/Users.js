import React, { useEffect, useState } from 'react'
import '../css/Users.css';
// import homeStyles from '../material-ui-css/Users';
import UserList from '../components/UserList';
import ErrorModal from '../views/ErrorModal';
import LoadingSpinner from '../views/LoadingSpinner';
import { useHttpClient } from '../views/http-hook';

// export default class Users extends React.Component {
//     state = {
//         isLoading: false,
//         error: null,
//         loadedUsers: null
//     }

//     async componentDidMount() {
//         this.setState({ isLoading: true });
//         try {
//             const response = await fetch('http://localhost:8000/api/users');
//             const responseData = await response.json();

//             if (!response.ok) {
//                 throw new Error(responseData.message);
//             }

//             this.setState({
//                 loadedUsers: responseData.users,
//                 isLoading: false
//             });
//         } catch (err) {
//             this.setState({
//                 error: err.message
//             })
//         }
//         this.setState({ isLoading: false, });
//     }

//     errorHandler = () => {
//         this.setState({ error: null });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <ErrorModal error={this.state.error} onClear={this.errorHandler} />
//                 {this.state.isLoading && (
//                     <div className="center">
//                         <LoadingSpinner />
//                     </div>
//                 )}

//                 {!this.state.isLoading && this.state.loadedUsers && <UserList items={this.state.loadedUsers} />}
//             </React.Fragment>
//         )
//     }
// }

const Users = () => {
    const [loadedUsers, setLoadedUsers] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users`);
                setLoadedUsers(responseData.users)
                console.log(responseData.users)
            } catch (err) { }
        }
        fetchUsers();
    }, [sendRequest])


    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}

            {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
        </React.Fragment>
    )
}

export default Users;