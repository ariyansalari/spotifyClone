import { getSongs } from "@/actions";
import { Header, ListItemHome } from "@/ui";
import Image from "next/image";
import { PageContent } from "./_components";
const revalidate = 0;
export default async function Home() {
  const songs = await getSongs();
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div>
          <h1 className="text-white text-3xl font-semibold">Welecome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItemHome
              image={"/images/liked.png"}
              name={"Liked Songs"}
              href={"liked"}
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <PageContent songs={songs}/>
      </div>
    </div>
  );
}
