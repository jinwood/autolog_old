import { useRouter } from "next/router";
import Container from "~/components/container";

export default function EditVehiclePage() {
  const { id } = useRouter().query;
  return <Container>EditVehiclePage {id}</Container>;
}
