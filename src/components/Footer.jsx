
export default function Footer() {
    return(
<footer className="flex shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-2  sm:flex sm:items-center sm:justify-between">
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shalom <span><img src="/fav.svg" className="h-10 inline" alt="Logo" /></span></span>
        
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://github.com/GuiomArt7" className="hover:underline">GuioMart </a>© 2024 . Todos los derechos reservados.</span>
    </div>
</footer>
    )
}