import React from "react";
import useLogOut from "../../hooks/useLogOut";


const LogOutButton = () => {
  const {loading,logout} = useLogOut()
  return (
    <div className="py-4 flex justify-center">
      <button className="btn btn-primary text-white" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
