const lockIPHost = require("./index.js");
  
lockIPHost.lockPort(8099).then(res => {
  console.log(res)
})