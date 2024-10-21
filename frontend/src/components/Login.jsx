import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstances";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [err, setErr] = useState("");

  const handleLogin = async (data) => {
    // console.log("Logged in", data);
    try {
      const response = await AxiosInstance.post("users/login",{
        email:data.email,
        password:data.password
      });
      if(response.status === 200){
        const {access, refresh} = response.data
        localStorage.setItem("access_tooken", access)
        localStorage.setItem("refresh_token", refresh)

        navigate("/Home")
      }
      else
      {
        setErr("Invalid Email or Password")
        alert("Invalid email or password. Please try again."); 
      }
    } catch (error) {
      setErr("Invalid email or password. Please try again.")
      alert("Login error: Invalid email or password."); 
      console.error("Login error", error)
      
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })} // Register the email input
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })} // Register the password input
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline"
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
