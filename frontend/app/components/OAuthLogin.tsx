"use client";
import { GoogleLogin } from '@react-oauth/google';

const OAuthLogin = () => {
  const handleSuccess = async (response: any) => {
    const { credential } = response; 
    if (!credential) {
      console.error('OAuth error: No credential received');
      return;
    }
    sessionStorage.setItem('googleIdToken', credential);
    const res = await fetch('/api/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: credential }),
    });

    const data = await res.json();

    if (data.success) {

      console.log('User created or logged in:', data.user);
    
    } else {
      console.error('OAuth error:', data.message);
    }
  };

  const handleFailure = () => {
    console.error('OAuth error: Failed to authenticate');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleFailure}
    />
  );
};

export default OAuthLogin;
