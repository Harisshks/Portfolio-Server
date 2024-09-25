const express = require('express')
const router = express.Router();
const Users = require('../models/users')

router.get('/all', async (req, res) => {
    try {
        const fetchedUser = await Users.find()
        res.status(200).json(fetchedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/add', async (req, res) => {
    try {
        const newuserdata = new Users(req.body)
        const { name, email } = newuserdata
        if (!name || !email) {
            res.status(400).json({ message: "Name & email Required" })

        }
        const savedata = await newuserdata.save()
        res.status(201).json(savedata)

    } catch (error) {
        res.status(500).json(error)
    }
})
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await Users.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const updateUser = await Users.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await Users.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const deleteUser = await Users.findByIdAndDelete(id)
        res.status(200).json({ message: "Project Deleted !" })
    } catch (e) {
        res.status(500).json(error)
    }
})

module.exports = router