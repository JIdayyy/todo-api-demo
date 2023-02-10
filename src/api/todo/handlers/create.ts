import prisma from "../../../../prisma/prisma";
import { TodoController } from "../interfaces";

const createTodo: TodoController["create"] = async (req, res) => {
  const { completed, title, userId } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        completed,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return res.status(201).json(todo);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: error });
  }
};

export default createTodo;
