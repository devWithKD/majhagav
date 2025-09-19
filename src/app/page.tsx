import React from "react";
import {
  MapPin,
  Users,
  Award,
  Building,
  Phone,
  Mail,
  Globe,
  Camera,
  Home,
  Factory,
  Droplets,
} from "lucide-react";
import Image from "next/image";
const VillageWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}

      <section className="relative h-96 text-white overflow-hidden">
        <Image
          src="/images/1.jpg"
          alt="Khadak Sukene Village"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Add an overlay div to make the text more readable */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          {/* Your existing text content */}
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              खडक सुकेणे
            </h1>
            <p className="text-xl mb-6 drop-shadow-md">ग्रामपंचायत कार्यालय</p>
            <div className="flex items-center text-lg drop-shadow-md">
              <MapPin className="w-6 h-6 mr-2" />
              <span>ता. दिंडोरी, जि. नाशिक, महाराष्ट्र, India</span>
            </div>
          </div>
        </div>
        {/* The ISO certificate badge should be on top of the image */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 z-20 border border-white border-opacity-30">
          <div className="flex items-center space-x-4 text-sm font-medium text-black">
            <span>🏆 ISO Certificate प्राप्त</span>
          </div>
        </div>
      </section>
      {/* Village Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Home className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                माझ्या गावा बद्दल...
              </h2>
            </div>
            <div className="prose text-gray-600 text-lg leading-relaxed">
              <p>
                खडकसुकेणे ग्रामपंचायत ही नाशिक जिल्हापरिषद, दिंडोरी पंचायत समिती
                अंतर्गत येणारी एक ग्रामीण स्वराज्य संस्था आहे. गावाची लोकसंख्या
                1588 असून, खडकसुकेणे हे मूळ गाव आणि वेताळवाडी वस्ती स्वतंत्र असे
                वसलेली आहे.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Cards */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">1588</div>
                  <div className="text-blue-100">एकूण लोकसंख्या</div>
                </div>
                <Users className="w-12 h-12 text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">798</div>
                  <div className="text-green-100">पुरुष संख्या</div>
                </div>
                <Users className="w-12 h-12 text-green-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">790</div>
                  <div className="text-pink-100">स्त्री संख्या</div>
                </div>
                <Users className="w-12 h-12 text-pink-200" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">272</div>
                  <div className="text-purple-100">कुटुंब संख्या</div>
                </div>
                <Home className="w-12 h-12 text-purple-200" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Village Details */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Village Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Building className="w-7 h-7 text-blue-600 mr-3" />
                गावात
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-black">
                    <strong>जि. प.मराठी शाळा:</strong> 01 (वर्गत 1 ते 4)
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-black">
                    <strong>आरोग्य उपकेंद्र:</strong> 01
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-black">
                    <strong>अंगणवाडी केंद्र:</strong> 2 (% खडकसुकेणे व
                    वेताळवाडी)
                  </div>
                </div>
              </div>
            </div>

            {/* Distance Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-7 h-7 text-green-600 mr-3" />
                अंतर
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 text-black">
                  <span>नाशिकपासून:</span>
                  <span className="font-semibold">30 किमी</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 text-black">
                  <span>दिंडोरीपासून:</span>
                  <span className="font-semibold">11 किमी</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 text-black">
                  <span>जवळचे रेल्वे स्टेशन:</span>
                  <span className="font-semibold">
                    सेराडी (15 किमी), नाशिकरोड (35 किमी)
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-black">
                  <span>आधार विभागाळ:</span>
                  <span className="font-semibold">
                    विशेष सहकार कृषी 8 किमी अंतरावर
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Area Information */}
          <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Globe className="w-7 h-7 mr-3" />
              जमीन क्षेत्र
            </h3>
            <div className="text-xl">
              गावाचे एकूण क्षेत्र:{" "}
              <span className="font-bold text-yellow-300">448.14 हे. आर</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            🌾 मुख्य पिके
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                <div className="text-3xl mb-2">🍇</div>
                <h4 className="font-bold text-purple-800">द्राक्ष</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                <div className="text-3xl mb-2">🌾</div>
                <h4 className="font-bold text-green-800">ऊस</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-xl">
                <div className="text-3xl mb-2">🥭</div>
                <h4 className="font-bold text-red-800">डाळिंब</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl">
                <div className="text-3xl mb-2">🧅</div>
                <h4 className="font-bold text-yellow-800">कांदा</h4>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>भाजीपालावर्गीय</strong> - गावात मोठ्या प्रमाणात द्राक्ष
                बागा असून, <strong>साठवण युनिट – 2</strong>. बी के इंटरनॅशनल-
                तसेच एक शेती यांत्रिक औजारे बनविणारी{" "}
                <strong>विश्वकर्मा वेल्डिंग वर्क्स</strong> कंपनी कार्यरत असुन,
                जी विविध राज्यांत औजारे विक्री व पुरवठा करते.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Special Features Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            विशेष वैशिष्ट्ये
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                🏛️ ऐतिहासिक वारसा
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                गावालगत <strong>पालखेड धरण</strong> आणि{" "}
                <strong>ब्रिटिशकालीन उजवा कॅनाल</strong> जवळ वसलेले आहे.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>सह्याद्री फार्म मोहाडी</strong> - कादवा नदी काठावर
                असलेले <strong>श्री म्हसोबा महाराज मंदिर</strong>ाचे हे एक
                प्राचीन व इच्छाशक्ती जागृत देवस्थान आहे.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                🎭 सांस्कृतिक परंपरा
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                या तीर्थ क्षेत्राची दरवर्षी{" "}
                <strong>दीप अमावास्येला यात्रोत्सव</strong> असतो व त्यात{" "}
                <strong>कुस्ती स्पर्धा</strong> आयोजित केल्या जात असून
                कुस्त्यासाठी प्रसिद्ध आहे.
              </p>
              <p className="text-gray-700 leading-relaxed">
                गावात मागच्या <strong>50 वर्षांपासून अखंड हरीनाम सप्ताह</strong>{" "}
                सुरू असून त्यास या वर्षी फेब्रुवारी 2025 मध्ये सतत ५० वर्ष पूर्ण
                झाल्याने <strong>50 वा सुवर्ण महोत्सव</strong> साजरा केला.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-2"> खडकसुकेणे</h3>
              <p className="text-lg">
                छोटंसं पण आदर्श, संपन्न, आणि ऐतिहासिक वारसा जपणारं गाव!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Village Facilities */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            गावातील सुविधा
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-black">पाणी पुरवठा</h4>
              </div>
              <p className="text-sm text-gray-600">
                "हर घर जल हर घर नल" अन्वये कुडवाना स्वतंत्र नळ कनेक्शन
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-black">आरोग्य</h4>
              </div>
              <p className="text-sm text-gray-600">आरोग्य उपकेंद्र</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-black">विषयाचे पाणी</h4>
              </div>
              <p className="text-sm text-gray-600">आर. ओ. ATM सुविधा</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-black">हवामान केंद्र</h4>
              </div>
              <p className="text-sm text-gray-600">
                हवामान विषयक माहिती गावात मोबाईलवर उपलब्ध
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-black">शिक्षण</h4>
              </div>
              <p className="text-sm text-gray-600">
                प्राथमिक शाळा 1 ते 4 जि. प. शाळा
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-black">महिला व बाल कल्याण</h4>
              </div>
              <p className="text-sm text-gray-600">अंगणवाडी केंद्र - 2 आहेत</p>
            </div>
          </div>
        </div>
      </section>
      {/* Photo Gallery Placeholder */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <Camera className="w-8 h-8 mr-3" />
            प्रदेशीय स्थळे
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Palkhed Dam Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/dam.jpg"
                alt="पालखेड धरण"
                width={500}
                height={500}
                objectFit="cover"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  पालखेड धरण
                </h3>
                <p className="text-gray-600">
                  पालखेड धरण हे मातीने बांधलेले धरण असून ते कादवा नदीवर आहे. हे
                  धरण महाराष्ट्र राज्यातील नाशिक जिल्ह्यातील दिंडोरी तालुक्यातील
                  खडकसुकेणे येथे स्थित आहे.
                </p>
              </div>
            </div>

            {/* Sahyadri Farms Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/farm.png"
                alt="सहादी फार्म - मोहाडी"
                width={500}
                height={300}
                objectFit="cover"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  सहादी फार्म - मोहाडी
                </h3>
                <p className="text-gray-600">
                  सहादी फार्म्स (Sahyadri Farms) ही नाशिक, महाराष्ट्रातील एक
                  शेतकरी उत्पादक कंपनी आहे. ही कंपनी 100% शेतकऱ्यांच्या मालकीची
                  असून, ती विविध प्रकारच्या फळीपिकांपुरीत (Horticulture) आणि
                  निर्यातीत (Export) सक्रिय आहे.
                </p>
              </div>
            </div>

            {/* Kadwa River Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/river.png"
                alt="कादवा नदी - खडकसुकेणे"
                width={500}
                height={300}
                objectFit="cover"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-700 mb-2">
                  कादवा नदी - खडकसुकेणे
                </h3>
                <p className="text-gray-600">
                  खडकसुकेणे गावाला लागलेले कादवा नदी
                </p>
              </div>
            </div>

            {/* Other Images Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/images/other.jpg"
                alt="Additional village photos"
                width={500}
                height={300}
                objectFit="cover"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-2">
                  अन्य छायाचित्रे
                </h3>
                <p className="text-gray-600">
                  येथे गावातील अन्य सुंदर छायाचित्रे पहा.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information Placeholder */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">संपर्क माहिती</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <span>खडक सुकेणे, ता. दिंडोरी, जि. नाशिक</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <span>संपर्क क्रमांक येथे जोडा</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <span>ईमेल पत्ता येथे जोडा</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VillageWebsite;
