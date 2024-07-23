
export default function Footer() {
    return(
<footer className="shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shalom</span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/GuiomArt7" className="hover:underline">GuioMart</a>. Todos los derechos reservados.</span>
    </div>
</footer>
    )
}