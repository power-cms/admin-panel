import React, { Component } from 'react';
import { Pagination as ReactStrapPagination, PaginationItem, PaginationLink } from 'reactstrap';

interface IProps {
  onPageChange: (page: number) => void;
  page: number;
  totalPages: number;
}

const maxLinks = 5;
const maxLinksOnSide = maxLinks / 2 - 1;

export class Pagination extends Component<IProps> {
  public render() {
    const { changePage } = this;
    const { page, totalPages } = this.props;

    let linksOnLeft = Math.min(maxLinksOnSide, page - 1);
    let linksOnRight = Math.min(maxLinksOnSide, totalPages - page);

    if (linksOnLeft < maxLinksOnSide) {
      linksOnRight = Math.min(2 * maxLinksOnSide - linksOnLeft, totalPages - page);
    }

    if (linksOnRight < maxLinksOnSide) {
      linksOnLeft = Math.min(2 * maxLinksOnSide - linksOnRight, page - 1);
    }

    const start = page - linksOnLeft;
    const end = page + linksOnRight;

    const range = Array.from({ length: end + 1 - start }, (v, k) => k + start);

    if (range.length === 1) {
      return null;
    }

    return (
      <ReactStrapPagination>
        <PaginationItem disabled={!linksOnLeft}>
          <PaginationLink previous={true} tag="button" onClick={changePage(page - 1)}>
            Prev
          </PaginationLink>
        </PaginationItem>
        {range.map(pageNumber => (
          <PaginationItem key={pageNumber} active={pageNumber === page}>
            <PaginationLink tag="button" onClick={changePage(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={!linksOnRight}>
          <PaginationLink next={true} tag="button" onClick={changePage(page + 1)}>
            Next
          </PaginationLink>
        </PaginationItem>
      </ReactStrapPagination>
    );
  }

  private changePage = (page: number) => () => {
    this.props.onPageChange(page);
  };
}
