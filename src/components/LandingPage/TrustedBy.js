import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <h1 class="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
          Trusted by 5200+, built by 17
        </h1>
        <p class="mb-16 text-lg text-center text-gray-600">
          Organizations of all sizes trust Hellonext to manage customer feedback
        </p>
        <div class="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
          <div class="flex items-center justify-center">
            <img
              src="/logos/todoist.svg"
              alt="Todoist Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="/logos/slack-icon.svg"
              alt="Slack Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="/logos/typeform.svg"
              alt="Typeform Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="/logos/algolia.svg"
              alt="Algolia Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="/logos/postcss.svg"
              alt="Postcss Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="/logos/yahoo.svg"
              alt="Yahoo Logo"
              class="block object-contain h-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
