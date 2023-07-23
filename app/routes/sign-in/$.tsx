import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-sm mt-8">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
