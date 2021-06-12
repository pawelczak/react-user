import UserItem from './UserItem';

function UserList({users, toggleUserActive}) {
	return (
		users.map(user => {
			return <UserItem key={user.id} user={user} toggleUserActive={toggleUserActive}/>
		})
	);
}

export default UserList;
