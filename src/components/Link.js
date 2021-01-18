import React from "react";

const Link = ({ href, children, className }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      // If ctrl was entered before clicking the link, open the link in a new tab
      return;
    }
    // Prevents the whole web app to reload (its default action)
    event.preventDefault();
    window.history.pushState({}, "", href);

    // Tells the Route components that the url has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
