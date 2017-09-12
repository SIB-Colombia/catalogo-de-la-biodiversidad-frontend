import React from 'react';
import styled from 'styled-components';
import {Link, HomeButton} from 'components';
import ReactPaginate from 'react-paginate';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionZoomIn from 'material-ui/svg-icons/action/zoom-in';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const Wrapper = styled.div `

.noelipsis{
  /*text-overflow: clip !important;*/
  /*overflow: auto !important;*/
  /*white-space: normal !important;*/
}
`
class PaginationTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Table className="" selectable={false}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              {this.props.headers.map((elem,i) => (
                (<TableHeaderColumn key={i}>
                  {elem}
                </TableHeaderColumn>)
              ))}
              <TableHeaderColumn>
                Opciones
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody displayRowCheckbox={false}>
            {this.props.docs.map((elem,i) => (
              (<TableRow key={i} hoverable={true}>
                {this.props.headers.map((child,j) => (
                  (<TableRowColumn key={j} className="noelipsis">
                    {typeof elem[child] === 'object' ? elem[child].join(' - ') :elem[child] }
                  </TableRowColumn>)
                ))}
                <TableRowColumn>
                  <IconButton onClick={() => this.props.show(elem)}>
                    <ActionZoomIn />
                  </IconButton>
                  <IconButton onClick={() => this.props.delete(elem)} >
                    <ActionDelete />
                  </IconButton>
                </TableRowColumn>
              </TableRow>)
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    )
  }
}

export default PaginationTable;
