import React from "react";
import "../../../assets/css/style.css";

const TopBrands = () => {
  const brands = [
    { name: "Nestlé Pakistan", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDnOanrD0heZevj-yHcfBM3TzgqNsiYeDNA&s" },
    { name: "Coca-Cola Pakistan", logo: "https://yt3.googleusercontent.com/x4iIqGSxWjrawrVB-NWC9by9KWinwI9ZDlcsfAipO_OkrUALcg5tOASdFUrYpR530N44TNUyyg=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Unilever Pakistan", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeMDxokEJXwj4FQTRib4__BgEz7FC7QbBAg&s" },
    { name: "Engro Corporation", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMzbU_IjvIx8Rjd_eORQicWrHRfuuQVl6jg&s" },
    { name: "Pak Suzuki Motors", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o7QmrtwsSxi1XYGV84g0OHBu5m5AlQAm3Q&s" },
    { name: "Khaadi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsPpOMYa6XqgBMEFUWpOOIFJOeg3hETp4-w&s" },
    { name: "Sapphire", logo: "https://pk.sapphireonline.pk/cdn/shop/files/new-logo_751bbed4-3698-47e5-81b7-db9ffceed905.png?height=628&pad_color=fff&v=1674561074&width=1200" },
    { name: "Alkaram Studio", logo: "https://www.alkaramstudio.com/cdn/shop/files/700x105.png?height=628&pad_color=fff&v=1713331800&width=1200" },
    { name: "Beaconhouse", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE93IA32pP-uUiRInx3PYpCqyhq2fGXW2qkQ&s" },
    { name: "Mughal Iron & Steel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7o2Z0yMwh-8AI2KwwzkdoEtJg8nA7m0t_Q&s" },
    { name: "Gul Ahmed", logo: "https://banner2.cleanpng.com/20180402/ytw/avhj7zj06.webp" },
    { name: "Jazz", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jazz_logo.svg/1200px-Jazz_logo.svg.png" },
  ];

  return (
    <section className="md:py-10 bg-gray-100 pb-6">
      <div className="md:w-3/3 w-full mx-auto text-center px-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">Top Pakistan Brands</h2>
        {/* Marquee Container */}
        <div className="relative overflow-hidden carousel mb-10">
          {/* Animated Row */}
          <div className="flex brand-group whitespace-nowrap">
            {brands.concat(brands).map((brand, index) => (
              <div key={index} className="brand-card flex-shrink-0 logo-slider-child px-2 w-32 md:w-44">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-auto h-24 md:h-28 mx-auto image object-contain mix-blend-multiply hover:shadow-xl hover:ring-1 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
