import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../config/config";


const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials:"include"
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(data);
      window.location.reload();
    
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };

};

export default useLogOut;
