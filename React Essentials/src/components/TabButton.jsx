export default function TabButton({ children, onTouch, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onTouch}>
        {children}
      </button>
    </li>
  );
}
