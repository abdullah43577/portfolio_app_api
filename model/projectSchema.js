const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    liveURL: {
      type: String,
      required: true,
    },

    githubURL: {
      type: String,
      required: true,
    },

    techStacks: {
      type: Array,
      required: true,
    },

    logo: {
      type: String,
      required: true,
    },

    screenshot: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema); // creates a model from the schema

module.exports = Project;
