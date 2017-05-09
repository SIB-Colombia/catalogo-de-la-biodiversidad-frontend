import React from 'react';
import styled from 'styled-components';
import {Link,TitleSection} from 'components';
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

const Wrapper = styled.div `
padding-bottom: 20px;
.box-comment{
  padding-top: 0px !important;
  &.textarea{
    margin-top: -25px;
  }
}
`
class FileComment extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {}

  render() {

    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12}>
                <Card>
                  <CardHeader title="Instituto Humboldt" subtitle="01/01/2017" avatar="/avatar4.png"/>
                  <CardText className="box-comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="Responder"/>
                    <FlatButton label="Denunciar"/>
                  </CardActions>
                </Card>
                <Divider/>
                <Card>
                  <CardHeader title="Usuario registrado" subtitle="01/01/2017" avatar="/avatar3.png"/>
                  <CardText className="box-comment textarea">
                    <TextField hintText="Escriba aquí su comentario" floatingLabelText="Comentario" fullWidth={true} multiLine={true} rows={3}/>
                  </CardText>
                  <CardActions>
                    <FlatButton label="Publicar" className="btn-secondary"/>
                  </CardActions>
                </Card>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default FileComment
