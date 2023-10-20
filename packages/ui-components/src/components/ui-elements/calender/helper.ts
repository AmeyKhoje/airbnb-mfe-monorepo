import moment from "moment-mini";
import { List } from "immutable";

const isExtraDays = (week: number, date: number) => {
  return !!(
    (week === 0 && date > 10) ||
    (week === 5 && date < 10) ||
    (week === 4 && date < 10)
  );
};

const getCalender = (year: number, month: number) => {
  let calender = [];

  const startDate = moment([year, month])
    .clone()
    .startOf("month")
    .startOf("week");

  const endDate = moment([year, month]).clone().endOf("month");

  const day = startDate.clone().subtract(1, "day");
  let list = List([]);

  while (day.isBefore(endDate, "day")) {
    list.concat(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone().format("DD"))
    );
    calender.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone().format("DD"))
    );
  }

  console.log(list);

  return calender;
};

export { getCalender, isExtraDays };
