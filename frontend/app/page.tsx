"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import OAuthLogin from "./components/OAuthLogin";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      
    <OAuthLogin/>
    <button className="bg-blue-500 text-white p-2 rounded"
    onClick={async()=>{
      try{
        await fetch("http://localhost:8000/api/users/getUserByEmail?email=chauhansujal1107@gmail.com", 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("googleIdToken")}`,
          },
        }
        )
      }catch(e){

      }
    }}
    >Hello</button>
    </GoogleOAuthProvider>
  );
}
