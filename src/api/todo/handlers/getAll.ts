import prisma from "../../../../prisma/prisma";
import { TodoController } from "../interfaces";

const getAllTodos: TodoController["getAll"] = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default getAllTodos;
