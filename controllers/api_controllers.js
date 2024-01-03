const data = require('../projects');
const Project = require('../model/projectSchema');
const client = require('../config/redisConfig');

const api_test = (req, res) => {
  res.status(200).json({ message: 'Welcome to the API server!' });
};

const save_projects = async (req, res) => {
  try {
    //loop and save projects data to DB
    let newProject;

    data.forEach(async (project) => {
      newProject = new Project(project);
      await newProject.save();
    });

    res.status(200).json({ message: 'Projects saved to DB' });
  } catch (err) {
    console.log(err);
  }
};

const get_projects = async (req, res) => {
  try {
    const projects = await Project.find({});

    // Cache the result
    await client.set('projects', JSON.stringify(projects), {
      EX: 3600, // Set an expiry for the cache, e.g., 1 hour
    });

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const get_single_project = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    await client.set(`${project._id}`, JSON.stringify(project), {
      EX: 3600,
    });
    res.status(200).json({ project });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const delete_all_project = async (req, res) => {
  try {
    await Project.deleteMany({});
    res.status(200).json({ message: 'All projects deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { api_test, get_projects, get_single_project, save_projects, delete_all_project };
