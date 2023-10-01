import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormData {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  zipcode: number;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmitHandler: SubmitHandler<FormData> = async (data) => {
    console.log("Sign-up data:", data);
    axios.post("http://localhost:5000/signup", data)
    .then((res) => {
        console.log(res.data.status)
    })
    .catch((err) => console.error(err.message))
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src="https://i.pinimg.com/236x/13/8a/e9/138ae953c165b97cbee609093985dda2.jpg"
            alt="Your Company"
          ></img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action=""
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="  Email Address"
                  {...register("email", {
                    required: "Email is required",
                    minLength: {
                      value: 4,
                      message: "Email must be at least 4 characters long",
                    },
                    maxLength: {
                      value: 30,
                      message: "Email cannot exceed 30 characters",
                    },
                    pattern: {
                      value: /@/,
                      message: "Email must contain the @ character",
                    },
                  })}
                  style={{ borderColor: errors.email ? "red" : "" }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Create Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="  Create Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password needs to be at least 4 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Password can only be 15 characters",
                    },
                  })}
                  style={{ borderColor: errors.password ? "red" : "" }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="  First Name"
                  {...register("firstName", {
                    required: "First Name is required",
                    minLength: {
                      value: 3,
                      message: "First Name must be at least 3 characters long",
                    },
                    maxLength: {
                      value: 30,
                      message: "First Name cannot exceed 30 characters",
                    },
                  })}
                  style={{ borderColor: errors.firstName ? "red" : "" }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="  Last Name"
                  {...register("lastName", {
                    required: "Last Name is required",
                    minLength: {
                      value: 3,
                      message: "Last Name must be at least 3 characters long",
                    },
                    maxLength: {
                      value: 30,
                      message: "Last Name cannot exceed 30 characters",
                    },
                  })}
                  style={{ borderColor: errors.lastName ? "red" : "" }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Zipcode
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="  Zipcode"
                  {...register("zipcode", {
                    required: "Zipcode is required",
                    minLength: {
                      value: 5,
                      message: "Zipcode must be 5 numbers",
                    },
                    maxLength: {
                      value: 5,
                      message: "Zipcode must be 5 numbers",
                    },
                  })}
                  style={{ borderColor: errors.zipcode ? "red" : "" }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.zipcode && <p>{errors.zipcode.message}</p>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
