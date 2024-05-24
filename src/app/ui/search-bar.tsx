export default function SearchBar() {
    return (
        <form className=" mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
                <button className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
            </div>
        </form>
    )
}