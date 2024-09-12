import { useQuery } from "@tanstack/react-query";
import { FetchingResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchingResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: platforms.results.length,
      results: platforms.results,
    },
  });

export default usePlatforms;
