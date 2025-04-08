import { get } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getLoggedInUser = async () => {
    try {
      const token = localStorage.getItem("token") || null;
      if (token) {
        const response: any = await get("/auth/me", {
          headers: {
            // prettier-ignore
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
        });
        setData(response.detail);
      }
    } catch (exception) {
      throw exception;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  // const { data, isLoading, error } = useGetLoggedInUser() as {
  //   data: any;
  //   isLoading: boolean;
  //   error: any;
  // };

  // console.log({ data, isLoading, error });

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <AuthContext.Provider
        value={{
          loggedInUser: data || null,
          setLoggedInUser: setData,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
