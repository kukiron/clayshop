const express = require("express"),
  path = require("path"),
  app = express()

const port = process.env.PORT || 8080

// Setup static assets
app.use(express.static(__dirname))

// Serve main index.html for the react-router to render
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"))
})

// Listening to the port
app.listen(
  port,
  console.log(`🌍 Express server is up and running on port: ${port} 🐎`)
)
