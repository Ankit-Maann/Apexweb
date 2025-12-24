import React from "react";                  
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050018] to-black text-white font-[Poppins] px-6 py-16">                          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.25)]">                                   <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-300 mb-4">
           We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how information is
          collected, used, and safeguarded when you visit this website.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Google AdSense
        </h2>
        <p className="text-gray-300 mb-4">
          We use Google AdSense to display advertisements. Google may use cookies
          and web beacons to show ads based on your visits to this and other
          websites.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Cookies
        </h2>
        <p className="text-gray-300 mb-4">
          Cookies are used to enhance user experience. You can choose to disable
          cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          Third-Party Privacy Policies
        </h2>
        <p className="text-gray-300">
          Apex University’s Privacy Policy does not apply to other advertisers or
          websites. We advise you to consult their respective privacy policies.
        </p>
      </div>
    </div>
  );
}
