import React from "react";

export default function GetPlays(props: any) {
    return (
        <div>
            <p className="text-3xl font-light ml-44">{props.songs.length} plays</p>
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
