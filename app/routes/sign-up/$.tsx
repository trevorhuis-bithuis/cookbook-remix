import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-sm mt-8">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
