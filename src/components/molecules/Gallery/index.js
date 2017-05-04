import React, {Component, PropTypes} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import {Link} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Lightbox from 'react-images';
import Carousel from 'react-slick';
import ArrowBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowForward from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import FlatButton from 'material-ui/FlatButton';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
  }
  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({currentImage: index, lightboxIsOpen: true});
  }
  closeLightbox = () => {
    this.setState({currentImage: 0, lightboxIsOpen: false});
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoImage = (index) => {
    this.setState({currentImage: index});
  }
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1)
      return;

    this.gotoNext();
  }

  //Carousel

  next = () => {
    this.slider.slickNext()
  }
  previous = () => {
    this.slider.slickPrev()
  }

  renderGallery() {

    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      draggable: false,
      centerMode: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1368,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 2000,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 100000,
          settings: 'unslick'
        }
      ]
    };

    const {images} = this.props;

    if (!images)
      return;

    const gallery = images.filter(i => i.src).map((obj, i) => {
      return (
        <div key={i} className={css(classes.box)}>
          <center>
            <a href={obj.src} onClick={(e) => this.openLightbox(i, e)}>
              <img src={obj.thumbnail} className={css(classes.img)}/>
            </a>
          </center>
        </div>
      );
    });

    return (
      <div className={css(classes.gallery)}>
        <Carousel ref={c => this.slider = c} {...settings}>
          {gallery}
        </Carousel>
        <br/>
        <br/>
        <div className="align-center">
          <FlatButton icon={< ArrowBack />} onTouchTap={this.previous}/>
          <FlatButton icon={< ArrowForward />} onTouchTap={this.next}/>
        </div>
      </div>

    );
  }
  render() {

    return (
      <div className="section">
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <Lightbox currentImage={this.state.currentImage} images={this.props.images} isOpen={this.state.lightboxIsOpen} onClickImage={this.handleClickImage} onClickNext={this.gotoNext} onClickPrev={this.gotoPrevious} onClickThumbnail={this.gotoImage} onClose={this.closeLightbox} showThumbnails={this.props.showThumbnails} theme={this.props.theme}/>
      </div>
    );
  }
};

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string
};

const gutter = {
  small: 2,
  large: 4
};
const classes = StyleSheet.create({
  img: {
    width: '95%'
  },

  box: {
    textAlign: 'center'
  },

  gallery: {},

  // orientation
  landscape: {
    width: '15%'
  },
  square: {
    paddingBottom: 0,
    width: '40%',

    '@media (min-width: 500px)': {
      paddingBottom: 0
    }
  },

  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto'
  }
});

export default Gallery;
