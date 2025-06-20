import React from "react";

export default function GetPlays(props: any) {
    return (
        <div>
            <p className="text-3xl font-medium ml-100 text-blue-300">{props.songs.length} plays</p>
        </div>
    );
}


/* export default function getPlays() {
    const songs = useSongs();
    const plays = songs.length;
    return (
        <p>{plays}plays</p>
        );

}
*/
