import PropTypes from "prop-types";
import { CardContainer, CardBody, CardFooter } from "./CardStyle";
import { TextLimit } from "../TextLimit/TextLimit";

export function Card(props) {
  if (!props) {
    return null; // or a fallback UI if desired
  }

  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{this.props.title}</h2>
          <img src={this.props.image} alt="imagens" />
        </div>
        <TextLimit text={this.props.text} limit={150} />
      </CardBody>

      <CardFooter>
        <i className="bi bi-hand-thumbs-up"></i>
        <span>{this.props.likes}</span>

        <i className="bi bi-chat"></i>
        <span>{this.props.comments}</span>
      </CardFooter>
    </CardContainer>
  );
}

Card.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }),
};

export default Card;
