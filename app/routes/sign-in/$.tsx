import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="mx-auto mt-8 max-w-sm">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
