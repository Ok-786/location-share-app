import React from 'react'
import '../css/UserList.css';
// import homeStyles from '../material-ui-css/UserList';
import Card from '../components/Card';
import UserItem from '../components/UserItem';

export default function UserList(props) {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        )
    }

    return <ul className="users-list">
        {props.items.map(user => {
            return (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places.length}
                />
            )
        })}
    </ul>
}
