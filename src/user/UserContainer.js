import UserList from './UserList';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const defaultUsers = [{
	id: 1,
	fullName: 'Bruce Wayne',
	active: false
}, {
	id: 2,
	fullName: 'Clark Kent',
	active: true
}];

const LOCAL_STORAGE_KEY = 'usersApp.users';

function UserContainer() {

	const [users, setUsers] = useState([...defaultUsers]);
	const userNameRef = useRef();

	useEffect(() => {
		const usersFromLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

		setUsers(usersFromLS);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
	}, [users]);

	function toggleUserActive(userId) {
		const toggledUsers = [...users];
		const user = toggledUsers.find((user) => user.id === userId)

		user.active = !user.active;
		setUsers(toggledUsers)
	}

	function handleAddUser() {
		const name = userNameRef.current.value;

		setUsers(users => [...users, {id: uuidv4(), fullName: name, active: false}])

		userNameRef.current.value = null;
	}

	return (
		<>
			<UserList users={users} toggleUserActive={toggleUserActive} />
			<div>
				{users.filter(user => user.active).length} active users
			</div>

			<input ref={userNameRef} type="text"/>
			<button onClick={handleAddUser}>Add User</button>
			<button>Clear all users</button>
		</>
	)
}

export default UserContainer;
