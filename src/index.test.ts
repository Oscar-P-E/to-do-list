import Todo from './index';

describe('Todo', () => {
  test('should create a new todo with provided values', () => {
    const todo = new Todo("Test title", "Test description", 2, 1234567890, 1234567891, true);

    expect(todo.title).toBe("Test title");
    expect(todo.description).toBe("Test description");
    expect(todo.priority).toBe(2);
    expect(todo.dueDateTime).toBe(1234567890);
    expect(todo.shownDateTime).toBe(1234567891);
    expect(todo.isDone).toBe(true);
  });

  test('should create a new todo with default values', () => {
    const todo = new Todo("Test title");

    expect(todo.title).toBe("Test title");
    expect(todo.description).toBe("");
    expect(todo.priority).toBe(3);
    expect(todo.dueDateTime).toBe(0);
    expect(todo.shownDateTime).toBe(0);
    expect(todo.isDone).toBe(false);
  });

  test('should generate unique uuid for each todo', () => {
    const todo1 = new Todo("Test title 1");
    const todo2 = new Todo("Test title 2");

    expect(todo1.uuid).toBeDefined();
    expect(todo2.uuid).toBeDefined();
    expect(todo1.uuid).not.toBe(todo2.uuid);
  });
});
