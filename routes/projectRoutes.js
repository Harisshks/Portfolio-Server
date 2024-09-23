const express = require('express')
const router = express.Router();
const Projects = require('../models/projectModels')
router.get('/all',async(req,res) => {
    try{
        const fetchedprojects = await Projects.find()
        res.json(fetchprojects).sendStatus(200)
    }catch(error){
        res.json(error).status(500)
    }
})
router.post("/add", async (req, res) => {
    try {
      const newprojectdata = await new Projects(req.body);
      const { name, email ,password } = newprojectdata;
      if (!name || !email || !password) {
        res.json({ message: "Title & Desc Required" }).status(400);
      }
      const savedata = await newprojectdata.save();
      res.json;
    } catch (error) {
      res.json(error).status(400);
    }
  });