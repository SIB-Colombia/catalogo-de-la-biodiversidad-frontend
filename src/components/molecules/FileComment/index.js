import React from 'react';
import styled from 'styled-components';
import {Link, TitleSection, HomeTitle} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {isAuthenticated} from '../../../auth';
import * as FileService from '../../../services/FileService';

const Wrapper = styled.div `
padding-bottom: 20px;
.box-comment{
  padding-top: 0px !important;
  &.textarea{
    margin-top: -25px;
  }
}
.spacing{
  margin-bottom: 20px;
}
`
class FileComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      new: '',
      reply: '',
      expanded: []
    }

  }

  create() {
    FileService.newComment({text: this.state.new, fileId: this.props.id}).then(response => {
      console.log('ok', response);
      this.props.update();
      this.setState({new: ''})
    })
  }

  createReply(record) {

    console.log(record);
    console.log(this.state.reply);

  }

  change(e, model) {
    let obj = {};
    let value = e.target.value;
    obj[model] = value;
    this.setState(obj)
  }

  reply(e, idx) {
    let obj = this.state.expanded;
    obj[idx] = !obj[idx];
    obj.forEach((e, i) => {
      if (i != idx) {
        obj[i] = false;
      }
    });
    this.setState({expanded: obj, reply: ''})
  };

  componentDidMount() {}

  render() {

    return (
      <Wrapper>
        <Grid className="container">
          <Row>
            <Col xs={12}>
              <HomeTitle text="Comentarios" />

              {this.props.comments.map((record, i) => (
                <Card key={i} className="animated fadeInLeft spacing">
                  <CardHeader title={record.postedBy.username} subtitle={`@${record.postedBy.username} - ${record.date}`} avatar={record.postedBy.photo || '/avatar3.png'}/>
                  <CardText className="box-comment">
                    {record.text}

                    {record.replies.map((subrecord, j) => (
                      <Card key={j} className="animated fadeInLeft">
                        <CardHeader title={`${subrecord.postedBy.name} ${subrecord.postedBy.lastname}`} subtitle={`@${subrecord.postedBy.username} - ${subrecord.date}`} avatar={subrecord.postedBy.photo || '/avatar3.png'}/>
                        <CardText className="box-comment">
                          {subrecord.text}
                        </CardText>
                        {isAuthenticated() && <CardActions>
                          <FlatButton label="Responder" onTouchTap={(e) => this.reply(e, i)}/>
                          <FlatButton label="Denunciar"/>
                        </CardActions>}
                      </Card>
                    ))}

                  </CardText>
                  {isAuthenticated() && <CardActions>
                    <FlatButton label="Responder" onTouchTap={(e) => this.reply(e, i)}/>
                    <FlatButton label="Denunciar"/> {this.state.expanded[i] && <Card className="animated fadeIn">
                      <CardHeader title={isAuthenticated().username} avatar={isAuthenticated().photo || '/human.png'}/>
                      <CardText className="box-comment textarea">
                        <TextField hintText="Escriba aquí su comentario" onChange={(e) => this.change(e, 'reply')} value={this.state.reply} floatingLabelText="Comentario" fullWidth={true} multiLine={true} rows={2}/>
                      </CardText>
                      <CardActions>
                        <FlatButton label="Publicar respuesta" className="btn-secondary" onClick={() => this.createReply(record)}/>
                      </CardActions>
                    </Card>}
                  </CardActions>}
                  <Divider/>
                </Card>
              ))}
              {isAuthenticated() && <Card>
                <CardHeader title={isAuthenticated().username} avatar={isAuthenticated().photo || '/human.png'}/>
                <CardText className="box-comment textarea">
                  <TextField hintText="Escriba aquí su comentario" onChange={(e) => this.change(e, 'new')} value={this.state.new} floatingLabelText="Comentario" fullWidth={true} multiLine={true} rows={3}/>
                </CardText>
                <CardActions>
                  <FlatButton label="Publicar" className="btn-secondary" onClick={() => this.create()}/>
                </CardActions>
              </Card>}
              {!isAuthenticated() && <TitleSection align='center' className="padding-top-3">Para poder comentar, por favor inicie sesión primero</TitleSection>}
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default FileComment
