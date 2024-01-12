import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard.js';
import AnimatedDisplayCard from './AnimatedDisplayCard.js';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice.js';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice.js';
import { selectFeaturedPartners } from '../partners/partnersSlice.js';

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartners(state)
  ]);

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className='m-1' key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
