import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

function ForgotPassword() {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/log-in";

  const handleForgot = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/forgot-password", { email })
      .then((res) => {
        if (res.data.status) {
          alert("Check your email to reset the password");
          navigate(from, { replace: true });
        } else {
          setError(res.data.message || "Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error during forgot password:", err.message);
        setError("Failed to send reset password email. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="lg:w-[1180px] relative min-w-screen py-3 sm:max-w-xl sm:mx-auto bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/sign-up"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Books
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot Password
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleForgot} // Form submission event
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Display error if any */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit" // Use "submit" type to trigger onSubmit
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-blue-800"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
