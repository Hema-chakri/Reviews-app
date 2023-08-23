// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  render() {
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrows-container">
          <button type="button" data-testid="leftArrow" className="arrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div>
            <img src={reviewsList[0].imageUrl} alt={reviewsList[0].username} />
            <p>{reviewsList[0].username}</p>
            <p>{reviewsList[0].companyName}</p>
            <p>{reviewsList[0].description}</p>
          </div>
          <button type="button" data-testid="rightArrow" className="arrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
