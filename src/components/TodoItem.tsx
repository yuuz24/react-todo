import type { Todo } from "../App";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <li
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: 5,
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <label
        style={{
          flex: 1,
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "#aaa" : "#000",
        }}
      >
        {todo.text}
      </label>
      <button
        type="button"
        onClick={() => onRemove(todo.id)}
        style={{ backgroundColor: "#FFF" }}
      >
        X
      </button>
    </li>
  );
}
