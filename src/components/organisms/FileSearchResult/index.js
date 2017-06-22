import React from 'react';
import styled from 'styled-components';
import {Link, FileCard, FileCardHorizontal} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Carousel from 'react-slick';
import Masonry from 'react-masonry-component';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import ViewHeadline from 'material-ui/svg-icons/action/view-headline';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Apps from 'material-ui/svg-icons/navigation/apps';
import ViewList from 'material-ui/svg-icons/action/view-list';
import {palette} from 'styled-theme';

const Wrapper = styled.div `

.col-grid{
  margin: 10px 0px;
}
.col-list{
  margin-top: 10px;
}
.color-select{
  color: ${palette('primary', 0)} !important;
}
.color-unselect{
  color: ${palette('grayscale', 5)} !important;
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
  handleView = (value) => this.setState({mode: value});

  render() {

    return (
      <Wrapper>
        <Grid className="container">
          <Row>
            <Col xs={12}>
              <br/>
                <Row>
                  <Col xs={12} sm={6} md={6} lg={6}></Col>
                  <Col xs={12} sm={6} md={6} lg={6}>
                    <Row>
                      <Col xs={12} sm={4} md={4} lg={4} className="align-right">
                        <IconButton tooltip="modo grilla" touch={true} tooltipPosition="bottom-center" onTouchTap={() => this.handleView('grid')}>
                          <Apps className={this.state.mode == 'grid'
                            ? 'color-select'
                            : 'color-unselect'}/>
                        </IconButton>
                        <IconButton tooltip="modo lista" touch={true} tooltipPosition="bottom-center" onTouchTap={() => this.handleView('list')}>
                          <ViewList className={this.state.mode == 'list'
                            ? 'color-select'
                            : 'color-unselect'}/>
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
            </Col>
          </Row>

          <Masonry>
            {this.state.mode == 'grid' && this.props.data.map((record, i) => (
              <Col key={i} xs={12} sm={6} md={3} lg={3} className="col-grid">
                <FileCard record={record}/>
              </Col>
            ))}
          </Masonry>
          <Masonry>
            {this.state.mode == 'list' && this.props.data.map((record, i) => (
              <Col key={i} xs={12} sm={12} md={10} lg={8} lgOffset={2} mdOffset={1} className="col-list">
                <FileCardHorizontal record={record}/>
              </Col>
            ))}
          </Masonry>
        </Grid>
      </Wrapper>
    )
  }
}

export default FileSearchResult;
