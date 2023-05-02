import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ProductRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });

    // Send HTTP request to the server to save the rating
    const userId = 123; // Replace with actual user ID
    fetch('/save-rating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, productrating: nextValue })
    })
    .then(response => {
      // Handle response from server
    })
    .catch(error => {
      // Handle error
    });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating: {rating}</h2>
        <StarRatingComponent
          name="productrating"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default ProductRating;
