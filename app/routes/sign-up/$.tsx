import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div className="mx-auto mt-8 max-w-sm">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
