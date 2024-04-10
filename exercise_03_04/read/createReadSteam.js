var http = require ('http')
var fs = require('fs')

http
  .createServer(function (req, res){
    const fileSteam = fs.createReadStream('./content/big.txt', 'utf8')
    fileSteam.on('open', () =>{
      fileSteam.pipe(res)
    })
    fileSteam.on('error', (err) =>{
      res.end(err)
    })
  })
  .listen(5000)