import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-slick'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Reorder from 'material-ui/svg-icons/action/reorder';

import Drawer from 'material-ui/Drawer';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Subheader from 'material-ui/Subheader';

import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import ActionAndroid from 'material-ui/svg-icons/action/android';

import {blue500, orange800, greenA200} from 'material-ui/styles/colors';

import {Link} from 'components';

const Wrapper = styled.div `
.paper{
  padding: 10px 0 0px 0;
}
.paper-horizontal{
  padding: 15px 20px;
  h3{
    font-size: 23px;
    font-weight: lighter;
  }
  .img-media{
    text-align: center;
    img{
      width: 80%;
    }
  }

}
.col{
  margin: 10px 0px;
}
.col-horizontal{
  margin-top: 10px;
}
`
class FileSearchResult extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mode: 1,
      value: 1,
      value2: 1
    };
  }

  componentDidMount() {}

  handleChange = (event, index, value) => this.setState({value});
  handleChange2 = (event, index, value2) => this.setState({value2});

  handleView = (value) => {
    this.setState({mode: value});
  }

  render() {

    return (
      <Wrapper>
        <Grid>
          <Row className="animated fadeInDown">
            <Col xs={12}>
              <br/>
              <Paper className="paper">
                <Row>
                  <Col xs={12} sm={6} md={6} lg={6}></Col>
                  <Col xs={12} sm={6} md={6} lg={6}>
                    <Row>
                      <Col xs={12} sm={4} md={4} lg={4} className="align-right">
                        <IconButton tooltip="modo lista" touch={true} tooltipPosition="bottom-center" onTouchTap={() => this.handleView(1)}>
                          <Reorder color={this.state.mode == 1 ? orange800: ''}/>
                        </IconButton>
                        <IconButton tooltip="modo grilla" touch={true} tooltipPosition="bottom-center" onTouchTap={() => this.handleView(2)}>
                          <Reorder color={this.state.mode == 2 ? orange800: ''}/>
                        </IconButton>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4} className="align-center">
                        <SelectField value={this.state.value} onChange={this.handleChange} fullWidth={true}>
                          <MenuItem value={1} primaryText="A/Z"/>
                          <MenuItem value={2} primaryText="Visitas"/>
                          <MenuItem value={3} primaryText="El peligro"/>
                        </SelectField>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4} className="align-center">
                        <SelectField value={this.state.value2} onChange={this.handleChange2} fullWidth={true}>
                          <MenuItem value={1} primaryText="Mejor coincidencia"/>
                          <MenuItem value={2} primaryText="Más visitados"/>
                          <MenuItem value={3} primaryText="Mejores valorados"/>
                        </SelectField>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Paper>

            </Col>

            {this.state.mode == 1 && this.props.data.map((record, i) => (
              <Col key={i} xs={12} sm={12} md={10} lg={8} lgOffset={2} mdOffset={1} className="col-horizontal animated fadeIn">
                <Paper className="paper-horizontal">
                  <Row middle="xs">
                    <Col xs={12} sm={4} md={4} lg={4} className="img-media">
                      <img src="/file.jpg"/>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={8}>
                      <h3>Título Ficha</h3>
                      <p className="align-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus leo non sapien tempus, ac cursus lectus tristique. Donec vitae mattis ante, a interdum sem. Cras libero tortor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus leo non sapien tempus, ac cursus lectus tristique. Donec vitae mattis ante, a interdum sem. Cras libero tortor
                      </p>
                      <div className="align-right">
                        <Link to={`/file/summary/${record.id}`}>
                          <RaisedButton label="Ver ficha" primary={true}/>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Paper>
              </Col>
            ))}

            {this.state.mode == 2 && this.props.data.map((record, i) => (
              <Col key={i} xs={12} sm={6} md={3} lg={3} className="col animated fadeIn">
                <Card className="space">
                  <CardHeader title="URL Avatar" subtitle="Subtítulo" avatar="/avatar4.png"/>
                  <CardMedia>
                    <img src="/file.jpg"/>
                  </CardMedia>
                  <CardTitle title="Título" subtitle="Subtítulo"/>
                  <CardActions className="align-center">
                    <Link to={`/file/summary/${record.id}`}>
                      <RaisedButton label="Ver ficha" primary={true} fullWidth={true}/>
                    </Link>
                  </CardActions>
                </Card>
              </Col>
            ))}

          </Row>
        </Grid>

      </Wrapper>
    )
  }
}

export default FileSearchResult
