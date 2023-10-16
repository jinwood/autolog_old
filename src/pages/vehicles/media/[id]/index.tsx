import Link from "next/link";
import { useRouter } from "next/router";
import Container from "~/components/container";

export default function EditVehicleMediaPage() {
  const { id } = useRouter().query;
  if (typeof id !== "string" && id?.length !== 1) {
    return <div>404</div>;
  }
  return (
    <Container>
      <h2>Gallery</h2>
      <p>You don&apos;t have any images yet</p>
      <Link
        className="text-blue-400 underline"
        href={`/vehicles/media/${String(id)}/add`}
      >
        Add Image
      </Link>
    </Container>
  );
}
