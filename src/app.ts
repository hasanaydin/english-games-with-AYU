import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app: Express = express()

mongoose.Promise = global.Promise
mongoose.connect(`${process.env.MONGODB_URL}`).then(
  () => {
    console.log("connected")
  },
  error => {
    console.log(error)
  }
)

app.get("/", (req: Request, res: Response) => {
  res.send("server is up")
})

app.get("/isMongoWorking", (req: Request, res: Response) => {
  if (mongoose.connection.readyState === 1)
    res.send("mongo is up")
  else
    res.send("mongo is down")
})

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`)
})

export default app