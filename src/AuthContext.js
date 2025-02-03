import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loggedIn: false, username: null });

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/check-session', {
        credentials: 'include'
      });
      const data = await response.json();
      setAuth(data);
    } catch (error) {
      console.error('Session check error:', error);
    }
  };

  const placeBid = async (auctionId, bidAmount) => {
    if (!auth.loggedIn) {
      return { success: false, message: 'You must be logged in to place a bid.' };
    }
  
    try {
      const response = await fetch(`http://localhost:3001/api/auctions/${auctionId}/bid`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: auth.username, bidAmount }),
        credentials: 'include'
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error placing bid:', error);
      return { success: false, message: 'An error occurred while placing the bid.' };
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, checkSession, placeBid }}>
      {children}
    </AuthContext.Provider>
  );
};