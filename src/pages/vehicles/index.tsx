import { useUser } from "@clerk/nextjs";
import Container from "~/components/container";
import VehicleCard from "~/components/vehicle/vehicle-card";
import { api } from "~/utils/api";

export default function Page() {
  const user = useUser();
  const userId = String(user.user?.id);
  const { data } = api.vehicles.getVehiclesByUser.useQuery(userId);
  return (
    <Container>
      <h2>Your vehicles</h2>
      {data && data.length === 0 && <p>You don&apos;t have a vehicle.</p>}
      {data?.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </Container>
  );
}
