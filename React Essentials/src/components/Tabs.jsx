export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsCoantainer = buttonsContainer;
  return (
    <>
      <ButtonsCoantainer>{buttons}</ButtonsCoantainer>
      {children}
    </>
  );
}
