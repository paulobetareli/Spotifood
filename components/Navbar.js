export default function Navbar({ logout }) {
    return (
        <div className="flex h-16 justify-between bg-white fixed top-0 inset-x-0 z-100 items-center">
            <div className=" w-1/5 justify-center flex ">
                <a href="/" alt="Spotifood">
                    <img
                         width="120" height="300"
                        src="https://res.cloudinary.com/paulobetareli/image/upload/q_auto:good/v1601350706/Spotifood/spotifood_uboyy7.png"
                        class="hidden md:block "
                        alt="Spotifood logo"
                    />
                </a>
            </div>

            <div className="flex w-12 h-full justify-center">
                <button onClick={() => logout()}>Sair</button>
            </div>

        </div>
    )
}
