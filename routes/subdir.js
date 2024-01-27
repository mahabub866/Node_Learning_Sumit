
const express=require('express')
const router=express.Router()
const path=require('path')
const c=console.log;
  router.get('/',(req,res)=>{
     res.send('hello world')
  })
  router.get('/index',(req,res)=>{
     c('attempt')
     res.send('hello world')
  })

module.exports=router
