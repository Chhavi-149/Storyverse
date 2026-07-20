import AuthLayout from "../../components/Auth/AuthLayout";
import SignupForm from "../../components/Auth/SignupForm";

function SignupPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your writing journey today."
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default SignupPage;