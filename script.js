// Your array of music data
const music = [
    {
        id: 1,
        title: "Song 1",
        album: "Album 1",
        dateAdded: "2023-09-18",
        audioSrc: "C:\\Users\\user\\OneDrive\\Documents\\Dhwani\\[iSongs.info] 01 - Emai Pothane.mp3"
    },
    // Add more music data objects here
];

// Get the tbody element by its ID
const songListTableBody = document.getElementById('song-list');

// Initialize an empty string to accumulate table rows
let tableHTML = "";

// Loop through the music array and generate table rows
for (let i = 0; i < music.length; i++) {
    tableHTML += `
        <tr>
            <td>${music[i].id}</td>
            <td>${music[i].title}</td>
            <td></td>
            <td>${music[i].album}</td>
            <td>${music[i].album}</td>
            <td>${music[i].dateAdded}</td>
            <td>
                <audio controls>
                    <source src="${music[i].audioSrc}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </td>
            <td></td>
        </tr>
    `;
}

// Set the accumulated HTML string to the songListTableBody
songListTableBody.innerHTML = tableHTML;
