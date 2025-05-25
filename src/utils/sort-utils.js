import dayjs from 'dayjs';

export function sortByDay(a, b) {
  return dayjs(a.date_from).diff(dayjs(b.date_from));
}

export function sortByTime(a, b) {
  const durationA = dayjs(a.date_to).diff(dayjs(a.date_from));
  const durationB = dayjs(b.date_to).diff(dayjs(b.date_from));
  return durationB - durationA;
}

export function sortByPrice(a, b) {
  return b.base_price - a.base_price;
}
