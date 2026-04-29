import { useQuery } from "@tanstack/react-query";
import genres from "../data/gennres";
import APIClient from "../services/api-client";
import ms from "ms";
const apiClient = new APIClient("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hr
    initialData: genres,
  });
};
export default useGenres;
