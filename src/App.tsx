import { Default } from "./layouts/default";
import { JobCardList } from "./components/JobCardList";
import { FilterList } from './components/FilterList';

function App() {
  return (
    <Default>
      <FilterList/>
      <JobCardList />
    </Default>
  );
}

export default App;
