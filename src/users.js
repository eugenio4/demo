function User(userName, password){
	this.userName = userName;
	this.password = password;
}


User.prototype = {
	getUserName:function(){
		return this.userName
	},
	getPassword:function(){
		return this.password
	}
};


export {
	User
}
