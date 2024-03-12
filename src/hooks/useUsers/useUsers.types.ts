import { Subscription, UserDetails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";

export type UserContextType = {
  acessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};
export type Props ={
  [propName:string]:any;
  
}