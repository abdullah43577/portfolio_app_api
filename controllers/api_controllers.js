const data = require('../projects');
const Project = require('../model/projectSchema');

const api_test = (req, res) => {
  res.status(200).json({ message: 'Welcome to the API server!' });
};

// const save_projects = async (req, res) => {
//   try {
//     //loop and save projects data to DB

//     data.forEach(async (project) => {
//       newProject = new Project(project);
//       await newProject.save();
//     });

//     res.status(200).json({ message: 'Projects saved to DB' });
//   } catch (err) {
//     console.log(err);
//   }
// };

const get_projects = async (req, res) => {
  try {
    //loop and save projects data to DB
    const projects = await Project.find({});
    res.status(200).json({ projects });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const get_single_project = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json({ project });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { api_test, get_projects, get_single_project };
