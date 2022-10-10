import express from "express"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import productsRoute from "./routes/products.js"
import products_table from "./models/products.js"
import users_table from "./models/users.js"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()

dotenv.config()


const connect = async () =>{
	try{
		await mongoose.connect(process.env.MONGO)
		console.log("Connecetd to Mongo DB")
	}catch(error){
		throw(error)
	}
}

mongoose.connection.on("disconnection", () =>{
	console.log("Mongo disconnection")
})

mongoose.connection.on("connection", () =>{
	console.log("Mongo conncted after disconnection")
})


//Middlewares
app.use(cookieParser())
app.use(express.json())
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/products", productsRoute)


app.use((err, req, res, next) => {
	const errStatus = err.status || 500
	const errMessage = err.message || "Something went wrong"
	return res.status(errStatus).json({
		succes: false,
		status: errStatus,
		message: errMessage,
		//stack: err.stack
	})
})



app.listen(8000, () => {
	connect()
	console.log("Connected to server")
})






//CREATE USERS
//LOGIN USERS
//DELETE
//UPDATE USER INFO

//WE SHOULD DIFFERENTIATE BUYERS FROM SELLERS

//ADD PRODUCTS
//READ PRODUCTS
//UPDATE PRODUCTS
//DELETE PRODUCTS