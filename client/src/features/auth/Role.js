
import React, { useEffect, useState } from 'react'

export const Role = () => {

  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(''); 
    const loggedInUser = localStorage.getItem("role");
    if (loggedInUser) {
      console.log(loggedInUser); 
      setRole(loggedInUser);
      console.log('Role: ' + role); 
    }
  }, [role]);

  return [role, setRole]; 
}

