import { createError } from "../utils/error.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import usersTable from "../models/users.js"


//REGISTER NEW USER
export const registerUser  = async (req, res, next) =>{
	//const newUser = usersTable
	try{
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(String(req.body.password), salt)
		const user = {
				"name": req.body.name,
				"country": req.body.country,
				"address": req.body.address,
				"type": req.body.type,
				"email": req.body.email,
				"password" : hash,
				"city": req.body.city,
				"distance": req.body.distance,
				"profilePic": req.body.profilePic,
				"subscriberType": req.body.subscriberType,
				"isAdmin": req.body.isAdmin
				}
		const newUser = usersTable(user)
		const savedUser = await newUser.save()
		res.status(200).json(savedUser)
	}catch (err) {
		next(err)
	}
}


//LOGIN NEW USER
export const loginUser  = async (req, res, next) =>{
	try {
		const user = await usersTable.findOne({email: req.body.email})
		if (!user) return next(createError(401, "User not found"))
		const isPassword = await bcrypt.compare(String(req.body.password), user['password'])
		if (!isPassword) return next(createError(401, "Invalid password"))
		const {password, isAdmin, ...otherDetails} = user._doc
		const token = jwt.sign({id: user['id'], isAdmin: user['isAdmin']}, process.env.secretKey)
		res
		.cookie("access_token", token, {
			httpOnly: true
		})
		.status(200)
		.json(otherDetails)
	}catch(err){
		next(err)
	}
}



/*
		{
				
				"name": "Tengey Paul",
				"country": "Togo",
				"address": "Kwabenya",
				"type": "Seller",
				"email": "tengey@yahoo.com",
				"password" : "12345",
				"city": "Accra",
				"distance": "20km",
				"profilePic": "hags72171",
				"subscriberType": "free",
				"isAdmin": false
				}
			*/	