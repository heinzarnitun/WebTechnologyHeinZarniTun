function Cup3({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup3 key={i} guest={i} />);
  }
  return cups;
}
