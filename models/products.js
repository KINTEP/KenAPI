import mongoose from "mongoose"

const { Schema } = mongoose

const productsTable = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	category:{
		type:String,
		required:true
	},
	unitPrice:{
		type:Number,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	tags:{
		type:String,
	},
	pictures:{
		type:[String]
	},
	status:{
		type:String,
		required:true
	},
	rating:{
		type:Number,
		min: 0,
		max: 5
	},
	userName:{
		type:String,
		required:true
	}
})
/*
{
	"name": "Aplle",
	"category": "Agriculture",
	"unitPrice":20,
	"description":"A very nice apple from Ghana",
	"tags":"None",
	"pictures":["7172781","718176287"],
	"status":"active",
	"rating":4,
	"userName":"kumi"
}
*/
export default mongoose.model("productsTable", productsTable)
