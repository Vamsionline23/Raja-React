import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{position:'relative'}} >
      <Carousel.Item>
        <img
          className='d-block w-100'
          src="https://images.thedirect.com/media/article_full/spider-man-tv-shows.jpg" style={{height:650}}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gq-magazine.co.uk/photos/63468efef4f48bee2acb7062/16:9/w_2560%2Cc_limit/Tom-Holland-Spiderman-what-we-know-so-far.jpg" style={{height:650}}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.koimoi.com/wp-content/new-galleries/2022/11/marvel-is-reportedly-not-casting-tobey-maguire-in-spider-man-4-001.jpg" style={{height:650}}
          alt="Third slide"
        />
        <Carousel.Caption>

         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;