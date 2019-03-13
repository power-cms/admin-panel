import { IDataProps } from '@power-cms/react-kit';
import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../Box/Box';
import { DataHolder } from '../DataHolder/DataHolder';
import { Pagination } from '../Pagination/Pagination';
import { BasePage } from './BasePage';

export interface IListPageProps {
  createLink?: string;
  detailsLink?: string;
}

interface IProps<T> extends IDataProps<T>, IListPageProps {}

interface IState {
  page: number;
}

export interface IElementData {
  title: string | ReactElement;
  subtitle?: string | ReactElement;
  avatar?: string | ReactElement;
}

export abstract class ListPage<T> extends Component<IProps<T>, IState> {
  public static defaultProps = {
    data: [],
    isLoading: true,
    pagination: {
      page: 1,
      totalPages: 1,
    },
  };
  public abstract title: string;

  public state = {
    page: 1,
  };

  public abstract renderElement(element: T): IElementData;

  public componentDidMount() {
    this.props.getData(this.state.page);
  }

  public changePage = (page: number) => {
    this.setState({ page });

    this.props.getData(page);
  };

  public render() {
    const { createLink, detailsLink, data, isLoading, pagination } = this.props;
    const { renderElement, title } = this;

    const actions = createLink ? [{ icon: 'Plus', link: createLink }] : undefined;

    return (
      <BasePage title={title} actions={actions}>
        <DataHolder isLoading={isLoading} data={data}>
          <div>
            {data.map((element: any) => (
              <Link to={(detailsLink || '').replace(/:id/, element.id)} key={element.id} className="box-link">
                <Box {...renderElement(element)} size="lg" />
              </Link>
            ))}
          </div>
          <Pagination {...pagination} onPageChange={this.changePage} />
        </DataHolder>
      </BasePage>
    );
  }
}
