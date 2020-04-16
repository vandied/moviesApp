import React, { Component } from "react";
import "./ItemDetails.css";
import Spinner from "../Spinner";

export default class ItemDetails extends Component {
  state = {
    item: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ item: null, getImgUrl: null });
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, image: getImgUrl });
    });
  };
  render() {
    const { item, image } = this.state;
    if (!this.state.item) {
      return <Spinner />;
    }
    const { name, gender, birthYear, eyeColor } = item;
    return (
      <div className="person">
        <div className="personImg">
          <img src={image} alt="characters" />
        </div>
        <div className="personDetails">
          <h4>
            {name} {this.props.itemId}
          </h4>
          <ul className="list-group">
            <li className="list-group-item">
              Gender <span>{gender}</span>
            </li>
            <li className="list-group-item">
              Birth <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              Eye Color <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}