/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
  article: {
    type: String, // type of data
    required: true, // input is required
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
  },
  year: {
    type: String,
  },
  sePractice: {
    type: String,
    required: true,
  },
  claim: {
    type: String,
    required: true,
  },
  claimStrength: {
    type: String,
    required: true,
  },

});

module.exports = Evidence = mongoose.model('Evidence', EvidenceSchema);
