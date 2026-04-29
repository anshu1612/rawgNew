import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new APIClient("/games");
const useGame = (slug) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
export default useGame;
