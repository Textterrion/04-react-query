import type { ComponentType } from "react";
import style from "./ReactPaginate.module.css";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginateProps {
  pageCount: number;
  forcePage: number;
  onPageChange: (page: number) => void;
}

export default function Paginate( { pageCount, forcePage, onPageChange }: PaginateProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={forcePage}
      containerClassName={style.pagination}
      activeClassName={style.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
