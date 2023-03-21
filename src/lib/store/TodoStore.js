import { v4 as uuidv4 } from "uuid";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const data = browser
  ? JSON.parse(window.localStorage.getItem("to-do")) ?? []
  : [];

export const todos = writable(data);

todos.subscribe((value) => {
  if (browser) {
    localStorage.setItem("to-do", JSON.stringify(value));
  }
});

export const addTodo = (text) => {
  todos.update((currentTodo) => {
    return [...currentTodo, { id: uuidv4(), text, complete: false }];
  });
};

export const deleteTodo = (id) => {
  todos.update((currentValue) => {
    return currentValue.filter((todo) => todo.id !== id);
  });
};

export const toggelTodo = (id) => {
  todos.update((currentValue) => {
    return currentValue.map((todo) => {
      if (todo.id == id) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });
  });
};

export const editTodo = (id, text) => {
  todos.update((currentValue) => {
    return currentValue.map((todo) => {
      if (todo.id == id) {
        return { ...todo, text };
      }

      return todo;
    });
  });
};
