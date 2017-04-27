import React from 'react'
import styled from 'styled-components'
import {Link} from 'components';
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
import ViewList from 'material-ui/svg-icons/action/view-list';
import {blue500, orange800, greenA200} from 'material-ui/styles/colors';
import Badge from 'material-ui/Badge';
import Comment from 'material-ui/svg-icons/communication/comment';
import GridOn from 'material-ui/svg-icons/image/grid-on';

const Wrapper = styled.div `
.paper{
  padding: 10px 0 0px 0;
}
.paper-horizontal{
  /*padding: 15px 20px;*/
  h3{
    font-size: 23px;
    font-weight: lighter;
  }
  .img-media{
    text-align: center;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .options{
    padding: 0px 20px 0px 0px;
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
      mode: 'grid',
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
                        <IconButton tooltip="modo grilla" touch={true} tooltipPosition="bottom-center" onTouchTap={() => this.handleView('grid')}>
                          <GridOn color={this.state.mode == 'grid'
                            ? orange800
                            : ''}/>
                        </IconButton>
                        <IconButton tooltip="modo lista" touch={true} tooltipPosition="bottom-center" onTouchTap={() => this.handleView('list')}>
                          <ViewList color={this.state.mode == 'list'
                            ? orange800
                            : ''}/>
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

            {this.state.mode == 'grid' && this.props.data.map((record, i) => (
              <Col key={i} xs={12} sm={6} md={3} lg={3} className="col animated fadeIn">
                <Link to={`/file/summary/${record.id}`}>
                  <Card className="space">
                    <CardMedia>
                      <img src={record.image}/>
                    </CardMedia>
                    <CardTitle title={record.name} subtitle={record.description}>
                      <div className="box-history align-right">
                        <Badge badgeContent={'EX'} className="badge cr"/>
                        <Badge badgeContent={'CR'} className="badge ex"/>
                        <Badge badgeContent={'EN'} className="badge en"/>
                      </div>
                    </CardTitle>
                    <CardActions className="align-center">
                      <FlatButton fullWidth={true} className="btn-secondary">
                        <Comment/> {record.comment}
                      </FlatButton>
                    </CardActions>
                  </Card>
                </Link>
              </Col>
            ))}

            {this.state.mode == 'list' && this.props.data.map((record, i) => (
              <Col key={i} xs={12} sm={12} md={10} lg={8} lgOffset={2} mdOffset={1} className="col-horizontal animated fadeIn">
                <Link to={`/file/summary/${record.id}`}>
                  <Paper className="paper-horizontal">
                    <Row>
                      <Col xs={12} sm={4} md={4} lg={4} className="img-media">
                        <img src={record.image}/>
                      </Col>
                      <Col xs={12} sm={8} md={8} lg={8}>
                        <div className="options">
                          <h3>{record.name}</h3>
                          <FlatButton className="btn-secondary inverse">
                            <Comment/> {record.comment}
                          </FlatButton>
                          <p className="align-justify">
                            Lorem ipsum dolor sit amet, consectetur piscing elipiscing elipiscing eliadipiscing elit. Morbi luctus leo non sapien tempus, ac cursus lectus tristique. Donec vitae mattis ante. Donec vitae mattis ante
                          </p>
                          <div className="box-history align-right">
                            <Badge badgeContent={'EX'} className="badge cr"/>
                            <Badge badgeContent={'CR'} className="badge ex"/>
                            <Badge badgeContent={'EN'} className="badge en"/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Paper>
                </Link>
              </Col>
            ))}

          </Row>
        </Grid>

      </Wrapper>
    )
  }
}

export default FileSearchResult
