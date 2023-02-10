import { TodoController } from "./interfaces";
import getAllTodos from "./handlers/getAll";
import getOneTodo from "./handlers/getOne";
import createTodo from "./handlers/create";
import updateTodo from "./handlers/update";
import delete_ from "./handlers/delete";

const controller: TodoController = {
  getAll: getAllTodos,
  getOne: getOneTodo,
  create: createTodo,
  update: updateTodo,
  delete: delete_,
};

export default controller;
