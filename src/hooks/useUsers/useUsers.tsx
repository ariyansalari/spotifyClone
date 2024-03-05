import { createContext, useContext, useEffect, useState } from "react";
import { Props, UserContextType } from "./useUsers.types";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { Subscription, UserDetails } from "@/types";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();
  const accesToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const getUserDetails = () => supabase.from("users").select("*").single();
  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("*,prices(*,products(*))")
      .in("status", ["trialing", "active"]);
  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsLoadingData(true);
      Promise.allSettled([getUserDetails(), getSubscription()]).then((res) => {
        const userDetailsPromise = res[0];
        const subscriptionPromise = res[1];
        if (userDetailsPromise.status === "fulfilled") {
          setUserDetails(userDetailsPromise.value.data as UserDetails);
        }
        if (subscriptionPromise.status === "fulfilled") {
          setSubscription(
            subscriptionPromise.value.data as unknown as Subscription
          );
        }
        setIsLoadingData(false);
      });
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [user, isLoadingUser]);
  const value = {
    accesToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };
  return <UserContext.Provider value={value} {...props} />;
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a myUserContextProvider");
  }
  return context
};
