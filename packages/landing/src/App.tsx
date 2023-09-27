import { Button } from "ui-components/components";
import { getTodaysDate } from "utility/helpers";

const App = () => {
  console.log(getTodaysDate());

  return (
    <div>
      <Button /> Landing App
    </div>
  );
};

export default App;
