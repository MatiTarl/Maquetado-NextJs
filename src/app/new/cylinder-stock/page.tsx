import SearchBar from "@/app/ui/search-bar";
import TableInfoCylinder from "@/app/ui/table-info-new-cylinder";

export default function Orders() {
   return (
      <main className="pt-20 md:p-10 md:pr-10 flex w-full flex-col ">
         <div className="w-full flex flex-col justify-center">
            <h1 className=" font-semibold text-4xl">Cylinder Stock</h1>
            <span className=" font-light text-gray-500 pt-5">Showing results </span>
         </div>
         <div className="flex-auto pt-7">
            <SearchBar/>
         </div>
         <div className="w-full flex flex-col pt-7">
            <TableInfoCylinder/>
         </div>
      </main>
   )
}