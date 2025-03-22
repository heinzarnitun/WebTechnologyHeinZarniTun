function Cup2({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaSet2() {
  return (
    <>
      <Cup2 guest={1} />
      <Cup2 guest={2} />
      <Cup2 guest={3} />
    </>
  );
}
