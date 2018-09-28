/// <reference types="react" />

declare module 'zent/lib/table' {

  namespace Table {

    interface IPartialColumn<T = any> {
      name: string
      width: number | string
      isMoney: boolean
      needSort: boolean
      bodyRender: (data: T) => React.ReactNode
      textAign: 'left' | 'right' | 'center'
    }

    interface IColumn<T = any> extends Partial<IPartialColumn<T>> {
      title: string
    }

    interface IChangeConfig {
      sortBy: string
      sortType: 'asc' | 'desc'
      current: number
      pageSize: number
    }

    interface IPageInfo {
      current: number
      totalItem: number
      pageSize: number
      maxPageToShow: number
    }

    interface ISingleSelection {
      selectedRowKeys: string[]
      isSingleSelection: true
      needCrossPage: boolean
      onSelect: (selectedkeys: any[], selectedRows: any[], currentRow: number) => void
    }

    interface IMultipleSelection {
      selectedRowKeys: string[]
      isSingleSelection: false
      needCrossPage: boolean
      onSelect: (selectedkeys: any[], selectedRows: any[], currentRow: number) => void
    }

    type ISelection = ISingleSelection | IMultipleSelection;

    interface IRowConf {
      canSelect: boolean
      rowClass: string
    }

    interface IExpandation {
      isExpanded: (record: any, index: number) => boolean
      expandRender: (data: any) => React.ReactNode
    }

    interface IProps {
      columns: Table.IColumn[]
      datasets: any[]
      rowKey?: string
      sortBy?: string
      sortType?: 'desc' | 'asc'
      onChange?: (conf: Table.IChangeConfig) => void
      emptyLabel?: string
      selection?: Partial<Table.ISelection>
      loading?: boolean
      getRowConf?: (data: any, index: number) => Table.IRowConf
      expandation?: Partial<Table.IExpandation>
      batchComponents?: any[]
      batchComponentsAutoFixed?: boolean
      autoStick?: boolean
      autoScroll?: boolean
      className?: string
      prefix?: string
      pageInfo?: Partial<Table.IPageInfo>
    }

  }

  class Table extends React.Component<Table.IProps, any> { }

  export default Table;
}
