"use client";
import { useEffect } from "react";

// Extend the global `window` object to include `google`
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (options: {
            client_id: string;
            callback: (response: GoogleCredentialResponse) => void;
            auto_select?: boolean;
          }) => void;
          prompt: () => void;
        };
      };
    };
  }

  interface GoogleCredentialResponse {
    credential: string;
  }
}

export default function GoogleOneTap() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.error("Google Client ID is missing!");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (response: GoogleCredentialResponse) => {
            console.log("Google User Data:", response);
            // Handle authentication (store token, etc.)
          },
          auto_select: false, // Set to true if you want automatic login
        });

        window.google.accounts.id.prompt(); // Show One Tap popup
      } else {
        console.error("Google API not loaded!");
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
