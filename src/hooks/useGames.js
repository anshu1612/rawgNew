import apiClient from "../services/api-client";
import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
const useGames = (gameQuery) =>
  useQuery({
    queryKey: ["games",gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parents_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data.results),
  });
 

export default useGames;
