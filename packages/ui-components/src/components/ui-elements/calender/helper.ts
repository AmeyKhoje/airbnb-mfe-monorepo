import moment from "moment-mini";

const isExtraDays = (week: number, date: number) => {
  return !!(
    (week === 0 && date > 10) ||
    (week === 5 && date < 10) ||
    (week === 4 && date < 10)
  );
};

const getMonthCalender = (year: number, month: number) => {
  let calender = [];

  const startDate = moment([year, month])
    .clone()
    .startOf("month")
    .startOf("week");

  const endDate = moment([year, month]).clone().endOf("month");

  const day = startDate.clone().subtract(1, "day");

  while (day.isBefore(endDate, "day")) {
    calender.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone().format("DD"))
    );
  }

  return calender;
};

const returnCalender = (calender: Array<Array<string>>) => {
  let weekWiseCalendar: any = [];

  calender.forEach((week: Array<string>, weekIndex: number) => {
    let weekArray: any = [];
    week.forEach((item: String, index: number) => {
      const date = Number(item);
      const dateObject = {
        date: item,
        isDisabled: isExtraDays(weekIndex, date),
      };
      weekArray.push(dateObject);
    });

    const weekObj = {
      week: weekIndex,
      dates: weekArray,
    };

    weekWiseCalendar.push(weekObj);
  });

  return weekWiseCalendar;
};

export { getMonthCalender, isExtraDays, returnCalender };
