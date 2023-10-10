import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { type Vehicle } from "~/server/api/routers/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const placeholderImage = "https://via.placeholder.com/500";
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-lg">
      <Image
        src={placeholderImage}
        width={500}
        height={200}
        alt="Vehicle"
        className="mb-4 h-32 w-full object-cover object-center"
      />
      <h2 className="text-xl font-semibold text-gray-800">
        {vehicle.id}
        {vehicle.manufacturer} {vehicle.model}{" "}
        <FontAwesomeIcon color="gray" icon={faPenToSquare} />
      </h2>
      <p className="text-sm text-gray-600">
        <strong>Year:</strong> {vehicle.year}{" "}
      </p>
      <p className="text-sm text-gray-600">
        {" "}
        <strong>Engine Size:</strong> {vehicle.engineSize} cc
      </p>
      <p className="text-sm text-gray-600">
        <strong>Registration:</strong> {vehicle.registration}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Colour:</strong> {vehicle.colour}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Fuel Type:</strong> {vehicle.fuelType}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Body Type:</strong> {vehicle.bodyType}
      </p>
    </div>
  );
}
