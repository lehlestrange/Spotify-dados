import React from "react";

export default function GetPlays(props: any) {
    return (
        <div>
            <p className="">{props.songs.length} plays</p>
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
