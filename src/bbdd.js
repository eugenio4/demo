let BBDD = (function BBDD (){
	let listUser = [];

	function addUser (user){
		listUser.push(user);
	}

	function checkUser (user, pwd){
		let i;
		for(i=0;i<listUser.length;i++){
			if(listUser[i].getUserName()=== user&&listUser[i].getPassword()=== pwd){
				return true;
			}
		}
		return false;
	}

	return {
		addUser,
		checkUser
	}
}());


export {
	BBDD
}