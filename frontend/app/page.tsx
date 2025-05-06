import { GoogleOAuthProvider } from "@react-oauth/google";
import OAuthLogin from "./components/OAuthLogin";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      
    <OAuthLogin/>
    </GoogleOAuthProvider>
  );
}
