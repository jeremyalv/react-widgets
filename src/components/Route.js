import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // For event handlers, we usually only want to listen to it once
  useEffect(() => {
    // Create a new event handler so we may clean it up later on
    const onLocationChange = () => {
      // By invoking a setter function each time pathname changes, we can finally enable the Router to rerender itself each time url is changed
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};
// Any time we set up an event listener in a component, it means we would probably need to use the useEffect Hook

export default Route;
