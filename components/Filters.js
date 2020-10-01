export const Filter = () => {
    return (
        <div id="sidebar" class="fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16">
            <nav className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
            <div className="mb-8">
                <input type="search" className="bg-purple-white shadow rounded border-0 p-3" placeholder="Buscar por nome..." />
                <div className="absolute right-0 top-0 mt-3 mr-4 text-purple-lighter">
                </div>
            </div>
            <div className="mb-8">
                <input type="search" className="bg-purple-white shadow rounded border-0 p-3" placeholder="Buscar por nome..." />
                <div className="absolute right-0 top-0 mt-3 mr-4 text-purple-lighter">
                </div>
            </div>
            <div className="mb-8">
                <h5 className="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs text-gray-500">Teste</h5>
            </div>
            </nav>
        </div>
    )
}

export default Filter