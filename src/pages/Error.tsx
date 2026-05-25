import './main.css'
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <main className="bl_page404">
          <h1>Error {error.status}. {error.statusText}</h1>
          <p>Sorry! The page you are looking for can not be found.</p>
          <div className="bl_page404__wrapper">
            <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="error"/>
            <div className="bl_page404__el1"></div>
            <div className="bl_page404__el2"></div>
            <div className="bl_page404__el3"></div>
            <Link className="bl_page404__link" to="/">go home</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="bl_page404">
        <h1>Error 404. The page does not exist</h1>
        <p>Sorry! The page you are looking for can not be found.</p>
        <div className="bl_page404__wrapper">
          <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="error"/>
          <div className="bl_page404__el1"></div>
          <div className="bl_page404__el2"></div>
          <div className="bl_page404__el3"></div>
          <Link className="bl_page404__link" to="/">go home</Link>
        </div>
      </main>
    </div>
  );
}
