import {createError} from "../utils/error.js"
import usersTable from "../models/users.js"



// GET ALL USERS
export const getAllUsers = async (req, res, next) => {
	try{
		const users = await usersTable.find()
		res.status(200).json(users)
	}catch(err){
		 next(err)
	}
}

//GET ONE USER BY ID
export const getUserById = async (req, res, next) => {
	try{
		const user = await usersTable.findById(req.params.id)
		res.status(200).json(user)
	}catch(err){
		 next(err)
	}
}

//UPDATE ONE USER
export const updateUser = async (req, res, next) => {
	//console.log(req.body)
	try{
		const updatedUser = await usersTable.findByIdAndUpdate(
			req.params.id, 
			{$set: req.body},
			{new: true})
		res.status(200).json(updatedUser)
	}catch(err){
		 next(err)
	}
}

//DELETE ONE
export const deleteUser = async (req, res, next) => {
	try{
		await usersTable.findByIdAndDelete(req.params.id)
		res.status(200).json("User has been deleted")
	}catch(err){
		next(err)
	}
}