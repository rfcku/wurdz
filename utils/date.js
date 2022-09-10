import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export const fromNow = (date) => {
  return `${dayjs(date || dayjs()).fromNow()}`;
};
