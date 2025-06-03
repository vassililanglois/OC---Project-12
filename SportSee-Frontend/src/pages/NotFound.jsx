/**
 * React component to display a loading error.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component display a message when ther is a loading error.
 */

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oups !</h1>
      <p>La page que vous cherchez semble introuvable.</p>
    </div>
  );
}

export default NotFound;
