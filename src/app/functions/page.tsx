import React from "react";
import Image from "next/image";

const initiatives = [
  {
    title: "कोरोना Covid 2019",
    image: "/initiatives/covid.jpg",
    desc: "खडकसुकणे गावात मा. श्री भास्करजी भांगरे सर खासदार साहेब केंद्र सरकार दिल्ली व मा. श्री नरहरी झिरवाळ आमदार साहेब विजयी मतदार संघ गावातील स्थानिक लोकप्रतिनिधी यांच्या समवेत गावाची पाहणी करताना.",
    date: "24/04/2025, 08:59 pm",
  },
  {
    title: "आसन व्यवस्था",
    image: "/initiatives/asana.jpg",
    desc: "गावात चौकाचौकात बसण्यासाठी ग्रामपंचायत कडून बाके आसन व्यवस्था करण्यात आले आहे.",
    date: "26/04/2025, 03:13 pm",
  },
  {
    title: "खडकसुकणे आयुष्मान गोल्डन कार्ड शिबीर",
    image: "/initiatives/ayushman.jpg",
    desc: "ग्रामपंचायत खडकसुकणे व उपसरपंच खडकसुकणे यांच्या संयुक्त विद्यमाने आयुष्मान गोल्डन कार्ड शिबीराचे आयोजन.",
    date: "25/08/2025, 06:44 pm",
  },
  {
    title: "मुख्यमंत्री पंचायत राज अभियान",
    image: "/initiatives/panchayat.jpg",
    desc: "मुख्यमंत्री पंचायत राज अभियान कालावधी : दिनांक 17 सप्टेंबर 2025 ते 31 डिसेंबर 2025.",
    date: "11/09/2025, 10:56 pm",
  },
];

export default function InitiativesPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        🏛️ राबविलेले शासकीय उपक्रम
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">@ {item.title} @</h2>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
