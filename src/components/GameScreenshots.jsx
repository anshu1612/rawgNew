import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

const GameScreenshots = ({ gameId }) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw new error();
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
