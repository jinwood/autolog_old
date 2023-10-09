import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import Container from "~/components/container";

import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();
  const userId = String(user.user?.id);

  const { data } = api.vehicles.getVehiclesByUser.useQuery(userId);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Container>
          {!!user.isSignedIn && <p>Hello {user.user.fullName}</p>}
          {data && data.length === 0 && (
            <p>
              You don&apos;t have a vehicle.{" "}
              <Link href="/vehicles/add" className="text-blue-400 underline">
                Add one
              </Link>
            </p>
          )}
        </Container>
      </main>
    </>
  );
}
