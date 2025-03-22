import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";

export function UIAsTree() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
