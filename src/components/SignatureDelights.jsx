import React, { useState } from "react";

const SignatureDelights = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const products = [
    {
      id: 1,
      name: "Royal Falooda",
      image: "/images/products/_DSC2056.JPG",
      description:
        "A royal treat layered with silky vermicelli, creamy kulfi, rose syrup, and crunchy nuts—every spoon a burst of flavor and tradition.",
    },
    {
      id: 2,
      name: "Rabri Lassi",
      image: "/images/products/1.png",
      description:
        "Our signature creamy rabri lassi served chilled with a perfect blend of traditional flavors and modern presentation.",
    },
    {
      id: 3,
      name: "Rose Kulfi",
      image: "/images/products/3.png",
      description:
        "Soft, creamy rose kulfi topped with rose petals for a refreshing, aromatic experience.",
    },
    {
      id: 3,
      name: "Rose Kulfi",
      image: "/images/products/Leonardo_Kino_XL_Closeup_White_Lassi_Glass_tall_transparent_g_0.jpg",
      description:
        "Soft, creamy rose kulfi topped with rose petals for a refreshing, aromatic experience.",
    },
    {
      id: 3,
      name: "Rose Kulfi",
      image: "/images/products/Leonardo_Kino_XL_Luxury_Lassi_Glass_Presentation_crystalclear_2.jpg",
      description:
        "Soft, creamy rose kulfi topped with rose petals for a refreshing, aromatic experience.",
    },
    {
      id: 3,
      name: "Rose Kulfi",
      image: "/images/products/Leonardo_Kino_XL_Traditional_Festive_Rabri_Kulfi_clay_plate_w_0.jpg",
      description:
        "Soft, creamy rose kulfi topped with rose petals for a refreshing, aromatic experience.",
    },
    {
      id: 3,
      name: "Rose Kulfi",
      image: "/images/products/Leonardo_Kino_XL_Traditional_Festive_Rabri_Kulfi_clay_plate_w_1.jpg",
      description:
        "Soft, creamy rose kulfi topped with rose petals for a refreshing, aromatic experience.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-20 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-8 text-center">
        Our Signature Delights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl p-4 text-center cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => setSelectedItem(item)}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover object-center rounded-xl transform hover:scale-105 transition-transform duration-300"

              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
              }}
              className="mt-4 cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-center mb-4">
              {selectedItem.name}
            </h3>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-56 object-contain rounded-xl mb-4"
            />
            <p className="text-gray-700 text-center leading-relaxed">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignatureDelights;
