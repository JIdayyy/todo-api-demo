import { RequestHandler } from "express";
import { ApiError } from "./generics";

export type ItemCreate<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
export type ItemUpdate<T> = Partial<ItemCreate<T>>;

export interface HandlerController<T> {
  getAll: RequestHandler<null, T[] | ApiError, null, null>;
  getOne: RequestHandler<{ id: string }, T | ApiError, null, null>;
  create: RequestHandler<null, T | ApiError, ItemCreate<T>, null>;
  update: RequestHandler<{ id: string }, T | ApiError, ItemUpdate<T>, null>;
  delete: RequestHandler<{ id: string }, T | ApiError, null, null>;
}
