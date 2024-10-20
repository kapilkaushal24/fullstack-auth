import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AxiosInstance from "./AxiosInstances";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleSignUp = async (data) => {
    setLoading(true);
    try {
      // Make your API call here using Axios
      const response = await AxiosInstance.post("users/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log("Sign up successful", response.data);
      // Redirect or handle successful sign-up
      navigate("/");
    } catch (error) {
      console.error("There was an error signing up:", error);
      if (error.response && error.response.status === 400) {
        alert("User already exists. Please try a different email.");
      } else {
        alert("An error occurred during sign-up. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: true })} 
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })} 
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })} 
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white rounded ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
