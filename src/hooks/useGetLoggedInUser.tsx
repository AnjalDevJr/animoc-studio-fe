import { get } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetLoggedInUser = () => {
  return useQuery({
    queryKey: ["get-logged-in-user"],
    queryFn: () =>
      get("/auth/me", {
        headers: {
          // prettier-ignore
          "Authorization": "Bearer " + localStorage.getItem('token'),
        },
      }),
    retry: false,
    enabled: true,
    staleTime: 360000,
  });
};

export const useRefreshToken = () => {
  return useQuery({
    queryKey: ["refresh-token"],
    queryFn: () =>
      get("/auth/refresh", {
        headers: {
          // prettier-ignore
          "Refresh": "Bearer " + localStorage.getItem("refToken"),
        },
      }),
    retry: false,
    enabled: true,
    staleTime: 360000,
  });
};
