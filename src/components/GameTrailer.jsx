import React from "react";
import useTrailers from "../hooks/useTrailers";

const GameTrailer = ({ gameId }) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw new error();
  const first = data.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
