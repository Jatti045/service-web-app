import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const GetInTouch = () => {
  const contacts = [
    { icon: Phone, label: "Phone", info: "(613) 123-4567" },
    { icon: Mail, label: "Email", info: "info@bullseyeadvisors.com" },
    { icon: MapPin, label: "Office", info: "123 Bank Street, Ottawa, ON A1B 2C3"}
  ];
  return (
    <section className="bg-white py-36">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        <h1 className={"text-primary-navy text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"}>Get In Touch</h1>
        <p className="mt-2 text-base sm:text-xl text-charcoal text-wrap max-w-3xl mx-auto">
          Ready to start your investment journey? Contact us today.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contacts.map(({ icon, label, info }) => {
            const Icon = icon;
            return (
              <div key={label}>
                <div className="w-16 h-16 text-primary-red bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="mx-auto h-8 w-8 text-primary-red" />
                </div>
                <h4 className="mt-4 font-semibold text-primary-navy">
                  {label}
                </h4>
                <p className="mt-0 text-base text-charcoal">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
