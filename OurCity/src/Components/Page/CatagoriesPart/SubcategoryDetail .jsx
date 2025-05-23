import React from 'react';

const SubcategoryDetail = () => {
  const data = {
    title: "Crunch The Gym",
    name: "Crunch The Gym",
    description: "Iron Temple is a premium fitness club offering top-tier equipment, certified trainers, and personalized workout programs.",
    address: "Raver road, Indira Colony, Burhanpur, Madhya Pradesh 450331",
    contact: {
      phone: "+91-9876543210",
      email: "contact@crunchthegym.com",
    },
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNIJvY8PFMsexLBiGxefLM_KQYKmw8P5zP033a2=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO6TChjCfHoeuL946s8zzLJBEqQ_XCcpedgU5RO=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noQN-GfV4oBSAENUgnJ03qUQ6qqS4Z4CI0liIEe7z5aCAUmdZXbk84rix748tkZLzTyBRMufzp7puEmjmPHOD8lLAb08cSCH7ZEVJJSQYZ6KCmQ-5jjZV-i36_SdNwRSxJQOxRJ=s1360-w1360-h1020-rw",
    ],
    timings: {
      weekday: "5:00 AM - 10:00 PM",
      weekend: "6:00 AM - 8:00 PM",
    },
    facilities: [
      "Cardio Zone",
      "Strength Training",
      "CrossFit",
      "Zumba Classes",
      "Personal Training",
      "Steam & Sauna",
      "Locker Rooms",
    ],
    membershipPlans: [
      {
        planName: "Monthly",
        price: 1500,
        benefits: ["Unlimited Gym Access", "One Free Trainer Session"],
      },
      {
        planName: "Quarterly",
        price: 4000,
        benefits: ["Unlimited Access", "3 Personal Training Sessions", "Free Diet Consultation"],
      },
      {
        planName: "Yearly",
        price: 14000,
        benefits: ["Unlimited Access", "Monthly Personal Training", "Free Supplements Starter Pack"],
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-gray-600">{data.description}</p>
      <p className="text-gray-500">📍 {data.address}</p>
      <p className="text-gray-500">📞 {data.contact.phone} | ✉️ {data.contact.email}</p>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {data.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gym Image ${index + 1}`}
            className="w-full h-48 object-cover rounded shadow"
          />
        ))}
      </div>

      {/* Timings */}
      <div>
        <h2 className="text-xl font-semibold mt-6">Timings</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Weekdays: {data.timings.weekday}</li>
          <li>Weekends: {data.timings.weekend}</li>
        </ul>
      </div>

      {/* Facilities */}
      <div>
        <h2 className="text-xl font-semibold mt-6">Facilities</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {data.facilities.map((facility, idx) => (
            <li key={idx}>{facility}</li>
          ))}
        </ul>
      </div>

      {/* Membership Plans */}
      <div>
        <h2 className="text-xl font-semibold mt-6">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.membershipPlans.map((plan, idx) => (
            <div key={idx} className="border rounded p-4 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{plan.planName} - ₹{plan.price}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryDetail;
