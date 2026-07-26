import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      name="search"
      placeholder="Search notes"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onSearch(event.target.value)
      }
    />
  );
}
