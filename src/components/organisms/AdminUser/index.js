import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link, TitleSection, Pagination, Loading, HomeTitle, PaginationTable, AdminUserEdit} from 'components';
import * as UserService from '../../../services/UserService';
import Dialog from 'material-ui/Dialog';

const Wrapper = styled.div `
  .box{
    margin-top: 20px;
  }
`

class AdminUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      total: 0,
      offset: 0,
      pages: 0,
      byPage: 10,
      page: 1,
      edit:false,
      user: null
    }
  }

  //Pagination
  componentWillMount(){
    this.load();
  }

  load() {
    UserService.getUsers(this.state.page,this.state.byPage).then(data => {
      this.setState({total: data.total});
      this.setState({pages: data.pages});
      this.setState({docs:data.docs});
    });
  }

  change = (data) => {
   let selected = data.selected;
   let offset = Math.ceil(selected * this.state.byPage);
    this.setState({offset}, () => {
      this.setState({page: (selected + 1)}, () => {
        this.setState({docs:[]}, () => this.load());
      });
    });
  };

  // Table actions

  show = (record) => {
    UserService.getUser(record._id).then(user => {
      this.setState({user}, () =>{
        this.setState({edit: true});
      });
    });
  };

  delete = (record) => {
    console.log(record);
      if(confirm(`Está seguro que desea eliminar el registro con username "${record.username}"?`)){
          UserService.deleteUser(record._id).then(result => {
            if(result.ok){
              if(this.state.docs.length == 1 && this.state.page != 1){
                  this.setState({page: (this.state.page - 1)}, () => this.load())
              }else{
                  this.load();
              }
            }
          });
      }
  };

  //Modal edit

  modalOpen = () => {
    this.setState({edit: true});
  };

  modalClose = () => {
    this.setState({edit: false});
  };

  //update

  update = () => {
    console.log('updated');
  };

  render() {

    const actions = [<FlatButton label="Cancelar" primary={true} onTouchTap={this.modalClose} />,<RaisedButton label="Guardar" className="btn-secondary-modal" onTouchTap={this.update} />];

    return (
      <Wrapper>
        <Grid className="container">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Paper zDepth={1} className="box">
                <HomeTitle text={`Usuarios (${this.state.total})`}/>
                {this.state.docs.length > 0 && <PaginationTable headers={['_id','username','name','lastname','email','roles','status']} docs={this.state.docs} delete={this.delete} show={this.show} /> || <Loading text={'Cargando...'}/>}
                {this.state.pages > 0 && <Pagination change={this.change} pages={this.state.pages} byPage={this.state.byPage} offset={this.state.offset} />}
              </Paper>
            </Col>
          </Row>
        </Grid>
        <Dialog titleClassName="modal-header-style" title="Editar usuario"  actions={actions} modal={false} open={this.state.edit} onRequestClose={this.modalClose} autoScrollBodyContent={true}>
          {this.state.user && <AdminUserEdit user={this.state.user} /> || <Loading/>}
        </Dialog>
      </Wrapper>
    )
  }
}

export default AdminUser;
