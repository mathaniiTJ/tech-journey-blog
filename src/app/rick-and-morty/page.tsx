import RickAndMortyTable from "@/components/RickAndMortyTable";
import {Suspense} from "react";

export default async function RickAndMortyPage() {
  return (
      <div className={'w-full'}>
        <Suspense>
          <RickAndMortyTable/>
        </Suspense>
      </div>
  )
}
