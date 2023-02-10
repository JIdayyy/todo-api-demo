import prisma from "../../../../prisma/prisma";
import { TodoController } from "../interfaces";

const updateTodo: TodoController["update"] = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        completed,
      },
    });
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default updateTodo;
