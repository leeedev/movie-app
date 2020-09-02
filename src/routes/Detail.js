import React from "react";
import Comment from "../components/Comment";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="container">
          <div className="movie__detail">
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="movie__data">
              <h3 className="movie__title">{location.state.title}</h3>
              <h5 className="movie__year">{location.state.year}</h5>
              <p className="movie__summary">{location.state.summary}</p>
            </div>
            <Comment />
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
