import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl px-4 section"> {/* Added responsive max-w and padding */}
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold mb-4 md:mb-8">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-lg sm:text-xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold py-2 md:py-6 break-all"> {/* Reduced base size, added break-all for wrapping long emails */}
        <a href={`mailto:${email}`} className="block"> {/* Added block to ensure full width for wrapping */}
          {email}
        </a>
      </h3>
      <span className="text-center text-content text-lg sm:text-xl font-light block my-2"> {/* Reduced base size, added margins */}
        or
      </span>
      <h3 className="text-center text-lg sm:text-xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold py-2 md:py-6 break-all">
        <a href={`tel:${phone}`} className="block">
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;
