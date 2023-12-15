import { HttpException, HttpStatus } from '@nestjs/common';
import { MarketSegment } from 'src/market-segment/market-segment.model';

export function totalMarket(segments: MarketSegment[]) {
  const result = segments.reduce((sum, item) => {
    return (sum += item.segment.peak_size);
  }, 0);
  if (!result) {
    throw new HttpException(
      "There are no segments' market parameters",
      HttpStatus.NOT_FOUND,
    );
  }
  return result;
}
