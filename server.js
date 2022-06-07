import express from "express"
import hbs from "hbs"

const app = express()


app.use(express.static("public"))
app.set("view engine", "hbs")
//hbs.registerPartials()

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard")
})



app.listen(80 , (req, res) => {
    console.log("listenning on PCM servers")
})