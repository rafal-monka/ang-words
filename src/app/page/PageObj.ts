import { WordObj } from '../word/WordObj';

//Page Object
export class PageObj {
  message: string;
  rows: WordObj[];
  meta: {
    currentPage: number;
    pageCount: number;
    pageSize: number;
    count: number;
  }
}
