// Functional Component with Anonymous Function

/*
 * imports (optional)
 * comp defn
 * must return JSX
 * export
 */
import MenuList from '../MenuList/MenuList';

const Footer = function () {
  const copyrightYear = 2023;
  const developerName = 'Karventhan';

  return (
    <footer className="navbar navbar-expand-md bg-body-tertiary border-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          &#169; {copyrightYear} | {developerName}
        </div>
        <button
          className="navbar-toggler btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Prime Video
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <MenuList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
