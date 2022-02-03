const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

app.use(cors())

app.post('/upload',(req,res)=>{
    res.status(200).json({result:true,msg:'Your File Uploaded'})
})
app.delete('/upload',(req,res)=>{
    res.status(200).json({result:true,msg:'Your File Deleted'})
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})