import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <h1 class="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
          Trusted by 5200+, built by 17
        </h1>
        <p class="mb-16 text-lg text-center text-gray-600">
          Organizations of all sizes trust Start Tech to manage customer
          feedback
        </p>
        <div class="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
          <div class="flex items-center justify-center image-container bg-transparent">
            <img
              src="https://i.ibb.co/GQK21Gb/vans.png"
              alt="Todoist Logo"
              class="block object-contain bg-transparent h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="https://i.ibb.co/V3TLCRj/subway.png"
              alt="Slack Logo"
              class="block object-contain bg-transparent h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="https://i.ibb.co/6yVyH7p/loco.png"
              alt="Typeform Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="https://i.ibb.co/yk34tkG/shop.png"
              alt="Algolia Logo"
              class="block object-contain h-16"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="https://i.ibb.co/sq8YLN5/shell.png"
              alt="Postcss Logo"
              class="block object-contain h-16 w-20"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              src="https://i.ibb.co/wKNNC3z/cwt.png"
              alt="Yahoo Logo"
              class="block object-contain bg-transparent h-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
