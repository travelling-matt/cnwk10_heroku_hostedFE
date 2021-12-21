//cannot reset more than one state at a time from an expternal component. useState resets movied back to App.js

export const logoutRequest = async (setUser1, setUsername1, setEmail1, setPassword1) => {
  try {
    setUser1(null);
    setUsername1(null);
    setEmail1(null);
    setPassword1(null);
    console.log("You have logged out");
  } catch (error) {
    console.log(error);
  }
};
