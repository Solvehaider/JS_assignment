const make_album = (artist_name, album_title, noOfTracks) => {
  if (noOfTracks) {
    let obj_optional = {
      artistname: artist_name,
      albumtitle: album_title,
      totaltrack: noOfTracks,
    };
    return obj_optional;
  } else {
    let obj = {
      artistname: artist_name,
      albumtitle: album_title,
    };
    return obj;
  }
};

// making three different albums ,
// track no us optional parameter
const album1 = make_album("atif", "deewany");
console.log(`Album 1: ${JSON.stringify(album1)} \n`);

// album with track number
const album2 = make_album("sidhu", "lovesick", 5);
console.log(`Album 2: ${JSON.stringify(album2)} \n`);

const album3 = make_album("karan", "STFU");
console.log(`Album 3: ${JSON.stringify(album3)} \n`);

// const album1 = make_album("atif", "deewany");
// console.log(JSON.stringify(album1));
// console.log(`Album 1: ${Object.entries(album1)} \n`);
// const album2 = make_album("sidhu", "lovesick");
// console.log(`Album 2: ${Object.entries(album2)} \n`);

// const album3 = make_album("karan", "STFU");
// console.log(`Album 3: ${Object.entries(album3)} \n`);
