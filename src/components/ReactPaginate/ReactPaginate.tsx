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
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

export default function Paginate( { totalPages, page, setPage }: PaginateProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => setPage(selected + 1)}
      forcePage={page - 1}
      containerClassName={style.pagination}
      activeClassName={style.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
