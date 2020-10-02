export default function FeaturedPlaylist({ playlists }) {
    console.log('playlists', playlists)

    return (
        <div className='flex justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {playlists.items.map(playlist => (
                <div className=" shadow" >
                    <a>
                        <img
                            src={playlist.images[0].url}
                        />
                    </a>

                </div>
            ))}
        </div>
    )

}