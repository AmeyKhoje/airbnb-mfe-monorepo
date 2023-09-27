import { TopBar } from "ui-components/components";
import { getTodaysDate } from "utility/helpers";

const App = () => {
  console.log(getTodaysDate());

  return (
    <div>
      <TopBar />
    </div>
  );
};

export default App;
