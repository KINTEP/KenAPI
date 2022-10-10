import mongoose from "mongoose"


const usersTable = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	country:{
		type:String,
		required:true
	},
	address:{
		type:String,
		required:true
	},
	type:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	distance:{
		type:String,
	},
	products:{
		type:[String]
	},
	profilePic:{
		type:String,
		required:true
	},
	subscriberType:{
		type:String,
	},
	/*
	sentMessages:{
		type:[{to: String, body:String, date: [{type: Date}]}]
	},
	receivedMessages:{
		type:[{from: String, body:String, date: [{type: Date}]}]
	},
	*/
	isAdmin:{
		type:Boolean,
		required:true
	}
})


export default mongoose.model("usersTable", usersTable)