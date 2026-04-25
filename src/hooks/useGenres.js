import { useQuery } from "@tanstack/react-query";
import genres from "../data/gennres";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: genres,
  });
};
export default useGenres;
