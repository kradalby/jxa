#!/usr/bin/env osascript -l JavaScript

var se = Application("System Events");

var photos = Application("Photos");
photos.activate();
photos.includeStandardAdditions = true;

var p = se.processes.byName("Photos");

function confirm(text) {
  try {
    contacts.displayDialog(text);
    return true;
  } catch (e) {
    return false;
  }
}

// function sortAlbum(album) {
//   console.log("Album:", album.name());
//   for (key in Object.keys(album)) {
//     console.log(key);
//   }
// }
//
// function getAlbums(folder) {
//   console.log("Getting albums from folder: ", folder.name());
//   albums = folder.albums();
//
//   for (var i = 0; i < folder.folders.length; i++) {
//     temp_folder = folder.folders[i];
//     temp_albums = getAlbums(temp_folder);
//     albums = albums.concat(temp_albums);
//   }
//
//   return albums;
// }

albums = photos.albums;

menuBars = p.menuBars;
debugger;

// console.log("No. Albums: ", albums.length);
// console.log("No. Folder:", photos.folders.length);
// for (var index = 0; index < photos.folders.length; index++) {
//   folder = photos.folders[index];
//   temp_albums = getAlbums(folder);
//   console.log("No temp albums:", temp_albums.length);
//   albums = albums.concat(temp_albums);
// }

console.log("No. Albums: ", albums.length);
for (var index = 0; index < albums.length; index++) {
  var album = albums[index];
  // sortAlbum(album);
  album.open();
}

// contacts.save();
