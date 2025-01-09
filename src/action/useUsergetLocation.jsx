import { useEffect, useState } from "react";

const useUserLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
        try {
          const response = await fetch("https://geolocation-db.com/json/");
          const data = await response.json();
          console.log(data)
          setLocation({
            city: data.city,
            country: data.country_name,
          });
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      };
      
    fetchLocation();
  }, []);

  return location;
};

export default useUserLocation;
