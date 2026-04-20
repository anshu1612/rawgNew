import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/gennres"
const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data.results),
    staleTime:24*60*60*1000, //24hr
    initialData:genres
  });
};
export default useGenre;
