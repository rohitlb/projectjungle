const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const AddList = require('../model/todolist');

mongoose.Promise = Promise;

router.post('/add-list', (req,res) => {
  const addList = new AddList(req.body);
  addList.save((err,result) => {
    if(err) {
      throw new err;
    }
    AddList.find({}, '-_id -__v').sort({date: -1})
      .then(lists => {
        return res.status(200).json({
          list: lists
        });
      })
      .catch(error => {
        throw new error;
      })
  });
});

router.get('/get-list', (req,res) => {
    AddList.find({}).sort({date: -1})
      .then(lists => {
        return res.status(200).json(lists);
      })
      .catch(error => {
        throw new error;
      });
});


module.exports = router;
