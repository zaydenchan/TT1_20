import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className="content-body"
      background="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    >
      <div className="form-wrapper">
        <form className="bg-white">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png"
            alt="DBS Logo"
          />
          <h1 className="text-title">LOGIN </h1>
          <div className="field-group">
            <label className="label" htmlFor="txt-email">
              Email address
            </label>
            <input
              className="input"
              type="email"
              id="txt-email"
              name="email"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="field-group">
            <label className="label" htmlFor="txt-password">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="txt-password"
              name="password"
              placeholder="Enter password"
            />
            <a href="#forgot" className="link-forgot">
              Forgot?
            </a>
          </div>

          <div className="field-group">
            <input className="btn-submit" type="submit" value="Log In" />
          </div>
        </form>

        <div className="bg-grey">
          <a href="#register" className="link-register">
            Sign Up
          </a>
                <div class="bg-grey">
                    
                    <Link to="/registration">Sign Up</Link>

                </div>
            </div>
        </div>
      </div>
  );
};

export default LoginPage;
