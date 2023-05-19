import bcrypt from "bcryptjs";
import { Form, Link } from "@remix-run/react";
import { prisma } from "~/utils/prisma.server";
import { type LoaderArgs, json } from "@remix-run/node";
import { createUserSession } from "~/utils/auth.server";

export async function action({ request }: LoaderArgs) {
  const formData = await request.formData();
  const { ...values } = Object.fromEntries(formData);
  const exists = await prisma.user.count({
    where: { email: values.email as string },
  });
  if (exists) {
    return json({ message: "Email already exists" }, { status: 400 });
  }
  const passwordHash = await bcrypt.hash(values.password as string, 10);
  const newUser = await prisma.user.create({
    data: {
      email: values.email as string,
      password: passwordHash,
      profile: {
        firstName: values.firstName as string,
        lastName: values.lastName as string,
      },
    },
  });

  if (!newUser) {
    return json(
      {
        error: `Something went wrong trying to create a new user.`,
        fields: { email: values.email as string, password: values.password as string },
      },
      { status: 400 }
    );
  }

  return createUserSession(newUser.id, '/');
}

export default function Register() {
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register for your account
            </h2>
          </div>
          <Form className="space-y-6" method="POST">
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />

              <div>
                <label htmlFor="first-name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="text"
                  required
                  className="relative block w-full rounded-t-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="text"
                  required
                  className="relative block w-full rounded-t-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link
                  to="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </Form>

          <p className="text-center text-sm leading-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
