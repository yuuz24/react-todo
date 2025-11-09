import TodoItem from "./TodoItem";
import type { Todo } from "../App";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onRemove }: Props) {
  return (
    <ul style={{ padding: 0, marginRight: -15 }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
