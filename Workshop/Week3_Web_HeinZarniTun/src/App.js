import Gallery from "./Gallery.js";
import { Profile } from "./Profile.js"; // Use named import
import { TodoList } from "./TodoList.js";
import { Bio } from "./Bio";
import { TodoList2 } from "./TodoList2";
import { Gallery2 } from "./Gallery2";
import { PackingList } from "./PackingList";
import { PackingList2 } from "./PackingList2";
import { DrinkList } from "./DrinkList";
import { List } from "./List";
import { Receipe } from "./Receipe";
import { TeaSet } from "./TeaSet";
import { TeaSet2 } from "./TeaSet2";
import { TeaGathering } from "./TeaGathering";
import { Clock } from "./Clock";
import { ViewProfile } from "./VewProfile.js";
import { ViewStoryTray } from "./ViewStoryTray.js";
import { UIAsTree } from "./UIAsTree.js";

export default function App() {
  const currentTime = new Date();
  return (
    <div>
      <div>
        <Profile />
        <Gallery />
        <TodoList />
        <Bio />
        <TodoList2 />
        <Gallery2 />
        <PackingList />
        <PackingList2 />
        <DrinkList />
        <List />
        <Receipe />
        <br />
        <TeaSet />
        <br />
        <TeaSet2 />
        <br />
        <TeaGathering />
        <br />
        <Clock time={currentTime} />
        <br />
        <ViewProfile />
        <br />
        <br />
        <UIAsTree />
        <br />
        <ViewStoryTray />
        <br />
      </div>
    </div>
  );
}
