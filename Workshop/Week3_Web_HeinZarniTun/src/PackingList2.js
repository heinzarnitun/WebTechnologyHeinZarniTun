function Item2({ name, importance }) {
  return <li className="item2">{name}</li>;
}

export function PackingList2() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item2 importance={9} name="Space suit" />
        <Item2 importance={0} name="Helmet with a golden leaf" />
        <Item2 importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
}
