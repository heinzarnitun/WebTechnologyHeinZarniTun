import Panel from "./Panel.js";
import { getImageUrl2 } from "./utils.js";

let currentPerson;

export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export function Profile2({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  );
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl2(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
