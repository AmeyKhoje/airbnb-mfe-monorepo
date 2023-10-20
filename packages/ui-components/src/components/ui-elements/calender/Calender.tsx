import moment from "moment-mini";
import { getCalender } from "./helper";

const Calender = () => {
  const months = moment.months();
  const year = new Date().getFullYear();

  const calender = getCalender(year, 0);

  console.log(calender);

  return <div></div>;
};

export default Calender;
