import { useState, type FormEvent, type ChangeEvent } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInsert({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", alignItems: "center", width: "500px" }}
    >
      <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
        style={{
          height: 35,
          borderRadius: 7,
          border: "1px solid #aaa",
          flex: 1,
        }}
      ></input>
      <button type="submit" style={{}}>
        추가
      </button>
    </form>
  );
}
