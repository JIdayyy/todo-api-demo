import prisma from "../../../../prisma/prisma";
import { TodoController } from "./../interfaces";

const deleteTodo: TodoController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default deleteTodo;
