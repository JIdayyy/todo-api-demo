import { Todo } from "@prisma/client";
import { HandlerController } from "../../types/handlers";

export interface TodoController extends HandlerController<Todo> {}
