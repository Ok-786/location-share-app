import React from "react";
import "../css/UserItem.css";
// import homeStyles from "../material-ui-css/UserItem";
import Card from '../components/Card';
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

export default function UserItem(props) {
  // const classes = homeStyles();

  return (
    // <div className={[classes.container, "container"].join(" ")}>
      <li className="user-item">
          <Card className="user-item__content">
            <Link to={`/${props.id}/places`}>
              <div className="user-item__image">
                <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
              </div>
              <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>
                  {props.placeCount} {props.placeCount === 1 ? "Place" : "places"}
                </h3>
              </div>
            </Link>
          </Card>
      </li>
  );
}
