export default function Log({ turns, playerName }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {playerName} Selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
