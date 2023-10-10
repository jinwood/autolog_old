import { useRouter } from "next/router";
import Container from "~/components/container";

export default function EditVehicleMediaPage() {
  const { id } = useRouter().query;
  return (
    <Container>
      <h2>Gallery</h2>
    </Container>
  );
}
