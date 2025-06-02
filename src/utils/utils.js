import dayjs from 'dayjs';
import {TimeConstants} from '../const/const';


function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function humanizeDate(date, format = TimeConstants.FORMATS.DATE) {
  return date ? dayjs(date).format(format) : '';
}

function getDurationTime(start, end) {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const duration = endDate.diff(startDate);

  const days = Math.floor(duration / TimeConstants.DIVIDERS.DAY);
  const hours = Math.floor((duration % TimeConstants.DIVIDERS.DAY) / TimeConstants.DIVIDERS.HOUR);
  const minutes = Math.floor((duration % TimeConstants.DIVIDERS.HOUR) / TimeConstants.DIVIDERS.MINUTE);

  const formatUnit = (value) => value.toString().padStart(2, '0');

  if (days > 0) {
    return `${formatUnit(days)}D ${formatUnit(hours)}H ${formatUnit(minutes)}M`;
  }

  if (hours > 0) {
    return `${formatUnit(hours)}H ${formatUnit(minutes)}M`;
  }

  return `${formatUnit(minutes)}M`;
}

function capitalizeString(word){
  return word[0].toUpperCase() + word.slice(1);
}

function getOfferKeyword(title){
  return title.split(' ').slice(-1);
}

function isPresentPoint(dateFrom, dateTo) {
  return dateFrom && dateTo && !dayjs().isAfter(dateTo, 'D') && !dayjs().isBefore(dateFrom, 'D');
}

function isPastPoint(dueDate) {
  return dayjs().isAfter(dueDate, 'day');
}

function isFuturePoint(dueDate) {
  return dayjs().isBefore(dueDate, 'day');
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {getRandomNumber,
  humanizeDate,
  getDurationTime,
  capitalizeString,
  getOfferKeyword,
  isFuturePoint,
  isPastPoint,
  isPresentPoint,
  updateItem};
  