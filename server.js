const setupServer = require('./setup-server')
const app = setupServer()

// add your api here
app.get('/test', (req, res) => {
  res.json({ success: true })
})
