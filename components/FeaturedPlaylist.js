export default function FeaturedPlaylist({ playlists }) {
    return (
        <div>
            {playlists.items.map(playlist => (
                <div>{playlist.name}</div>
            ))}
        </div>
    )

}