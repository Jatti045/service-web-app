import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const GetInTouch = () => {
  const contacts = [
    { icon: Phone, label: "Phone", info: "(613) 123-4567" },
    { icon: Mail, label: "Email", info: "info@bullseyeadvisors.com" },
    {
      icon: MapPin,
      label: "Office",
      info: "123 Bank Street, Ottawa, ON A1B 2C3",
    },
  ];
  return (
    <section className="bg-white py-36">
      <div className="container mx-auto px-6 lg:px-32 text-center">
        <h2 className="text-3xl font-bold text-primary-navy">Get In Touch</h2>
        <p className="mt-2 text-sm text-gray-600">
          Ready to start your investment journey? Contact us today.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contacts.map(({ icon, label, info }) => {
            const Icon = icon;
            return (
              <div key={label}>
                <Icon size={48} className="mx-auto text-primary-red" />
                <h4 className="mt-4 font-semibold text-primary-navy">
                  {label}
                </h4>
                <p className="mt-1 text-sm text-gray-700">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
