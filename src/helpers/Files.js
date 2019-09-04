/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/helpers/Files.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Wednesday, September 4th 2019, 11:56:12 am
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import RNFS from "react-native-fs";
import { Platform } from "react-native";
class Files {
  static readFiles = (folderName = "") => {
    return new Promise((resolve, reject) => {
      let path =
        Platform.OS === "ios"
          ? `${RNFS.MainBundlePath}/${folderName}/`
          : `${RNFS.DocumentDirectoryPath}/${folderName}/`;
      console.log("path ===>", path);
      RNFS.readDir(path) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then(result => {
          console.log("GOT RESULT", result);
          // stat the first file
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  static createFolder = (folderName = "") => {
    // mkdir(filepath: string, options?: MkdirOptions): Promise<void>
    console.log("response file read", RNFS);
    return new Promise((resolve, reject) => {
      try {
        this.readFiles()
          .then(resp => {
            console.log("response file read====>inner", resp);
            let filter = resp.filter(
              item => item.isDirectory() && item.name === folderName
            );
            console.log("checking ===>", filter, filter.length);

            if (!filter.length) {
              let path =
                Platform.OS === "ios"
                  ? `${RNFS.MainBundlePath}/${folderName}/`
                  : `${RNFS.DocumentDirectoryPath}/${folderName}/`;
              console.log("path ===>", path);
              RNFS.mkdir(path)
                .then(result => resolve(result))
                .catch(e => reject(e));
            } else {
              reject({ message: "Already Exits" });
            }
          })
          .catch(e => console.log("err in read", e));
      } catch (e) {
        reject(e);
      }
    });
  };

  static downloadFile = (path, onDownloadStart, onprogress, resumable) => {
    //eslint-disable-next-line
    let fileName =
      Platform.OS === "ios"
        ? `${RNFS.MainBundlePath}/download/${
            path.split("/")[path.split("/").length - 1]
          }`
        : `${RNFS.DocumentDirectoryPath}/download/${
            path.split("/")[path.split("/").length - 1]
          }`;
    return new Promise((resolve, reject) => {
      let DownloadFileOptions = {
        fromUrl: path, // URL to download file from
        toFile: fileName, // Local filesystem path to save the file to
        headers: {}, // An object of headers to be passed to the server
        background: true, // Continue the download in the background after the app terminates (iOS only)
        discretionary: true, // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
        cacheable: true, // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
        progressDivider: 1,
        begin: onDownloadStart,
        progress: onprogress,
        resumable: resumable, // only supported on iOS yet
        connectionTimeout: 10000, // only supported on Android yet
        readTimeout: 10000 // supported on Android and iOS
      };
      console.log("downlaod options", DownloadFileOptions);

      try {
        RNFS.downloadFile(DownloadFileOptions);
        resolve({ success: true });
      } catch (e) {
        reject(e);
      }
    });
  };

  static uploadFile = (uploadUrl, files, uploadBegin, uploadProgress) => {
    // upload files

    return new Promise((resolve, reject) => {
      RNFS.uploadFiles({
        toUrl: uploadUrl,
        files: files,
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        fields: {
          hello: "world"
        },
        begin: uploadBegin,
        progress: uploadProgress
      })
        .promise.then(response => {
          if (response.statusCode == 200) {
            console.log("FILES UPLOADED!"); // response.statusCode, response.headers, response.body
            resolve(response);
          } else {
            console.log("SERVER ERROR");
            reject(response);
          }
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  };
}

export default Files;
