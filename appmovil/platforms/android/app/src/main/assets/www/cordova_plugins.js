cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.Promise",
    "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
    "pluginId": "cordova-plugin-googlemaps"
  },
  {
    "id": "cordova-plugin-googlemaps.BaseClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.BaseArrayClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLng",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLngBounds",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.VisibleRegion",
    "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Location",
    "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.CameraPosition",
    "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polyline",
    "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polygon",
    "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Marker",
    "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
    "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Circle",
    "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.TileOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.GroundOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Common",
    "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.encoding",
    "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.spherical",
    "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.poly",
    "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Geocoder",
    "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LocationService",
    "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Map",
    "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.event",
    "file": "plugins/cordova-plugin-googlemaps/www/event.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MapTypeId",
    "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlLoader",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Environment",
    "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MarkerCluster",
    "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Cluster",
    "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.geomodel",
    "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.commandQueueExecutor",
    "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.pluginInit",
    "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.StreetViewPanorama",
    "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Overlay",
    "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Thread",
    "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.InlineWorker",
    "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
    "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-android_ios.js",
    "pluginId": "cordova-plugin-googlemaps",
    "clobbers": [
      "plugin.google.maps"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
    "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-android_ios.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-advanced-http.lodash",
    "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
    "pluginId": "cordova-plugin-advanced-http"
  },
  {
    "id": "cordova-plugin-advanced-http.tough-cookie",
    "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
    "pluginId": "cordova-plugin-advanced-http"
  },
  {
    "id": "cordova-plugin-advanced-http.messages",
    "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
    "pluginId": "cordova-plugin-advanced-http"
  },
  {
    "id": "cordova-plugin-advanced-http.local-storage-store",
    "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
    "pluginId": "cordova-plugin-advanced-http"
  },
  {
    "id": "cordova-plugin-advanced-http.cookie-handler",
    "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
    "pluginId": "cordova-plugin-advanced-http"
  },
  {
    "id": "cordova-plugin-advanced-http.helpers",
    "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
    "pluginId": "cordova-plugin-advanced-http"
  },
  {
    "id": "cordova-plugin-advanced-http.http",
    "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
    "pluginId": "cordova-plugin-advanced-http",
    "clobbers": [
      "cordova.plugin.http"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.19",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-googlemaps": "2.4.6",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-advanced-http": "2.0.1"
};
// BOTTOM OF METADATA
});