import { Result } from './result.interface';

export interface ApiResult {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
