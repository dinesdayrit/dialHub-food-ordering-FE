import { useParams } from "react-router-dom";

export default function SearPage() {
  const { city } = useParams();
  return <div>User search for {city}</div>;
}
