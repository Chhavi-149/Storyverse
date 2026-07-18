import AuthLayout from "../../components/Auth/AuthLayout";
import LoginForm from "../../components/Auth/LoginForm";

function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your writing journey."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;