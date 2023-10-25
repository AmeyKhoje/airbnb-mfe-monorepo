import moment from "moment-mini";
import { getMonthCalender, returnCalender } from "./helper";

const Calender = () => {
  const months = moment.months();
  const year = new Date().getFullYear();

  const calender = getMonthCalender(year, 5);

  const cal = returnCalender(calender);

  console.log(cal, months);

  return <div></div>;
};

export default Calender;
