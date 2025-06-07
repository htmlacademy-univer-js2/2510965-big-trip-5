import { FilterType } from '../constants/const.js';
import { isFuturePoint, isPastPoint, isPresentPoint } from '../utils/utils.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) =>
    isFuturePoint(point.date_from)
  ),
  [FilterType.PRESENT]: (points) => points.filter((point) =>
    isPresentPoint(point.date_from, point.date_to)
  ),
  [FilterType.PAST]: (points) => points.filter((point) =>
    isPastPoint(point.date_to)
  ),
};

function generateFilters(points){
  return Object.entries(filter).map(
    ([filterType,filterPoints]) =>({
      type:filterType,
      count: filterPoints(points).length
    })
  );
}

export { filter, generateFilters };
