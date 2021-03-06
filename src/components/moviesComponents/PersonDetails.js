import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import React from "react";
import { withMovieService } from "../HOCHelpers";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="popularity" label="Popularity" />
      <Record field="gender" label="Gender" />
      <Record field="birthday" label="Birthday" />
      <Record field="knownAs" label="Also known as" />
      <Record field="biography" label="biography" />
    </ItemDetails>
  );
};

const mapMethodsToProps = movieService => {
  return {
    getData: movieService.getPerson,
    getImgUrl: movieService.getImage
  };
};

export default withMovieService(PersonDetails, mapMethodsToProps);
