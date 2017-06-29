import React from 'react';
import styled from 'styled-components';
import {Link, HomeButton} from 'components';
import ReactPaginate from 'react-paginate';


const Wrapper = styled.div `

.pagination{
    text-align: center;
    padding: 0 10px;
    padding-top: 20px;
    li{
      display: inline-block;
      margin-bottom: 20px;
      a{
        -webkit-transition:.3s ease;
        transition: .3s ease;
        border: none;
        cursor: default;
        position: relative;
        opacity: 1;
        font-size: 14px;
        letter-spacing: 0px;
        text-transform: uppercase;
        font-weight: 500;
        margin: 0px;
        user-select: none;
        padding: 8px 10px;
        color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
        &:hover{
          background-color: rgba(0, 0, 0, 0.08);
        }
        &:visited,&:active{
          text-decoration: none !important;
        }
      }
      &.active{
        a{
          /*background-color: #009CB0;*/
          color: #e8774b;
          text-decoration: none !important;
          font-weight: 600;
        }
      }
      &.disabled{
        a{
          opacity: 0.4;
          cursor: default;
        }
      }
      &.break-me{
        a{
          cursor: default;
          background-color: transparent !important;
        }
      }
      &.previous{
        a{
          padding: 8px 14px;
        }
        a:before{
          content: "";
          width: 0;
          height: 0;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-right: 7px solid #333;
          position: absolute;
          left: 10px;
          top: 10px;
        }
      }
      &.next{
        a{
          padding: 8px 14px;
        }
        a:before{
          content: "";
          width: 0;
          height: 0;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-left: 7px solid #333;
          position: absolute;
          left: 10px;
          top: 10px;
        }
      }
    }
}

`
class Pagination extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <ReactPaginate previousLabel={""}
           nextLabel={""}
           breakLabel={<a href="">...</a>}
           breakClassName={"break-me"}
           pageCount={this.props.pages}
           marginPagesDisplayed={2}
           pageRangeDisplayed={this.props.byPage}
           onPageChange={this.props.change}
           containerClassName={"pagination"}
           subContainerClassName={"pages pagination"}
           activeClassName={"active"} />
      </Wrapper>
    )
  }
}

export default Pagination;
