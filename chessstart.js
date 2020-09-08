const express = require('express')
const Horse = require('./horse.js')
//const Table = require('./table.js')
const app = express()
const port = 4001

app.get('/test', (req, res) => {
    //console.log(req.params)
    //res.write("Exemplo")
    filled = ["f5","b3"]
    result = new Horse().GetPositions("d4",filled);
    res.write(JSON.stringify(result))
    res.end()
})

app.post('/horseposition', express.json({type: '*/*'}), (req, res) => {
  //console.log(req.body.building)
  //console.log(req.body.current)
  //console.log(req.body.filled)
  console.log('servico ligado')
  result = new Horse().GetPositions(req.body.current,req.body.filled);
  res.write(JSON.stringify(result))
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})