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
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';

import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Subheader from 'material-ui/Subheader';
import _ from 'lodash';

import {Link} from 'components';

const Wrapper = styled.div `

.back{
  margin-top: 60px;
}
  .btnFilters{
    position: fixed;
    left: 15px;
    bottom: 15px;
    z-index: 10;
  }

`
class FileSearchMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      schema: [
        {
          'category': 'Grupos Biológicos',
          'items': [
            {
              name: 'Anfibios',
              value: 1634
            }, {
              name: 'Aves',
              value: 2755
            }, {
              name: 'Hongos',
              value: 3345
            }, {
              name: 'Insectos',
              value: 4355
            }, {
              name: 'Mamíferos',
              value: 5674
            }, {
              name: 'Peces',
              value: 6325
            }, {
              name: 'Plantas',
              value: 73577
            }, {
              name: 'Reptiles',
              value: 8455
            }
          ]
        }, {
          'category': 'Departamentos',
          'items': [
            {
              name: 'Cundinamarca',
              value: 1832
            }, {
              name: 'Boyacá',
              value: 2124
            }
          ]
        }, {
          'category': 'Ecosistemas',
          'items': [
            {
              name: 'Bosque tropical',
              value: 135565
            }, {
              name: 'Desierto',
              value: 2456
            }, {
              name: 'Bosque seco',
              value: 33466
            }, {
              name: 'Páramo',
              value: 46225
            }, {
              name: 'Bosque de niebla',
              value: 51123
            }, {
              name: 'Humedales',
              value: 665433
            }
          ]
        }
      ],
      chipData: []
    };

    this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
  }

  handleRequestDelete = (data) => {
    // console.log(data);
    //Chip
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.value).indexOf(data.value);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
    //schema update
    this.schema = this.state.schema;
    this.schema[data.i].items.unshift(data);
    this.setState({schema: this.schema});
  };

  handleAddChip = (record, i, j) => {
    //Chip
    this.chipData = this.state.chipData;
    record.i = i;
    record.j = j;
    this.chipData.push(record);
    this.setState({chipData: this.chipData});
    //schema update
    this.schema = this.state.schema;
    this.schema[i].items.splice(j, 1);
    this.setState({schema: this.schema});
  };

  handleToggleMenu = () => this.setState({
    open: !this.state.open
  });

  componentDidMount() {}

  renderChip(data) {

    return (
      <Chip className="animated fadeInUp" key={data.value} onRequestDelete={() => this.handleRequestDelete(data)} style={this.styles.chip}>
        {data.name}
      </Chip>
    );
  }

  render() {

    const subcat = this.state.schema.map((record, i) => record.items.map((subrecord, j) => <ListItem key={j} primaryText={subrecord.name} onTouchTap={() => this.handleAddChip(subrecord, i, j)} leftIcon={< ActionGrade />}/>));
    const listItems = this.state.schema.map((record, i) => <ListItem key={i} nestedItems={subcat[i]} primaryText={record.category} initiallyOpen={true} primaryTogglesNestedList={true}/>);

    return (
      <Wrapper>
        <div className="btnFilters animated fadeInLeft">
          <FloatingActionButton onTouchTap={this.handleToggleMenu} className="btn-primary-floating">
            <Menu/>
          </FloatingActionButton>
        </div>
        <Drawer open={this.state.open}>
          <List>
            <RaisedButton label="Ocultar Menú" onTouchTap={this.handleToggleMenu} icon={< ArrowBack />} fullWidth={true} labelPosition="after" className="back"/>
            <Subheader>Filtros activos</Subheader>
            <div style={this.styles.wrapper}>
              {this.state.chipData.map(this.renderChip, this)}
            </div>
            {listItems}
          </List>
        </Drawer>
      </Wrapper>
    )
  }
}

export default FileSearchMenu
