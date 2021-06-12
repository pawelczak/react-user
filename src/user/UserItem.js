function UserItem({user, toggleUserActive}) {

	function handleUserActiveChange() {
		toggleUserActive(user.id)
	}

	return (
		<>
			<label>
				<input type="checkbox" checked={user.active} onChange={handleUserActiveChange}/>
				{user.fullName}
			</label>
		</>
	);
}

export default UserItem;
