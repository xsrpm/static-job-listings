import { Default } from "./layouts/default";
import { JobCardList } from "./components/JobCardList";
import { FilterList } from './components/FilterList';
import { useFilter } from './hooks/useFilter';

function App() { 
  const { tags, removeTag, addTag, clearTags, filteredList} = useFilter()

  return (
    <Default>
      <FilterList tags={tags} removeTag={removeTag} clearTags={clearTags}/>
      <JobCardList jobList={filteredList} addTag={addTag}/>
    </Default>
  );
}

export default App;
