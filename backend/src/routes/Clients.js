import express from "express";
import clientSchema from '../models/ClientModel.js'

const router = express.Router()

router.get('/clients', (req, res) => {
  clientSchema.find().then((data) => res.json(data)).catch(error => {
    res.json(error)
  })
})

router.post('/clients', (req, res) => {
  const user = clientSchema(req.body);
  user.save().then((data) => res.json(data).status(202)).catch(error => {
    res.json(error)
  })
})


router.get('/clients/:id', (req, res) => {

  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: "Invalid ID"
    });
  }
  clientSchema.findById(id, (__, userFound) => { res.send(userFound).status(202) });
})

router.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: "Invalid ID"
    });
  }
  const { name, document, address, phone } = req.body;
  const foundUser = clientSchema.findById(id)
  if (!foundUser) return res.json({ message: `User with id = ${id} not found` });
  clientSchema.updateOne({ _id: id }, { $set: { name, document, address, phone } }).then((data) => res.json({ message: `Client with id = ${id} was updated`, data }).status(202)).catch(error => {
    res.json(error)
  })
})

router.delete('/clients/:id', (req, res) => {

  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: "invalid ID"
    });
  }
  const foundClient = clientSchema.findById(id);
  if (!foundClient) return res.json({ message: `User not found` })
  clientSchema.findByIdAndDelete(id).then(() => res.json({ message: `User with id = ${id} was deleted` }).status(303)).catch(error => {
    res.json(error)
  })

})

export default router