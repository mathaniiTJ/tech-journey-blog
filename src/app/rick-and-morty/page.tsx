import RickAndMortyTable from "@/components/RickAndMortyTable";
import {Suspense} from "react";

export default async function TotalDramaIslandPage() {
  return (
      <div className={'w-full'}>
        <Suspense>
          <TotalDramaIslandTable/>
        </Suspense>
      </div>
  )
}
