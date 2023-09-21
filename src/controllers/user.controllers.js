import userModel from "../models/user.model.js";

export const createUser = async (req, res) => {
  const {
    username,
    controlNumber,
    email,
    numberPhone,
    carrera,
    question_one,
    question_two,
    question_tree,
  } = req.body;
  try {
    const dataUser = {
      username,
      controlNumber,
      email,
      numberPhone,
      carrera,
      question_one,
      question_two,
      question_tree,
    };

    // && save data
    const savedDataUser = await userModel.create(dataUser);
    if (savedDataUser) {
      res.status(200).json({ savedDataUser });
      console.log("all okay")
    } else {
      res.status(204).json({ message: "Failed to save data user." });
      console.log("error")
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: mostrar todos los usuarios
export const showUsers = async (req, res) => {
  try {
    const data = await userModel.find();
    res.json({ message: data });
    console.log("aqui está")
  } catch (error) {
    throw new Error(error);
  }
};
