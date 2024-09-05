import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

export default function SearPage() {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <div>
      User search for {city}{" "}
      <span>
        {results?.data.map((restaurant) => (
          <span>
            found = {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </div>
  );
}
