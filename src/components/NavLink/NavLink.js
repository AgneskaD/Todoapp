export const NavLink = ({ children }) => {
    return (
      <li>
        <a href={children}>{children}</a>
      </li>
    );
  };