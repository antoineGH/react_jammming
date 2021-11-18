# React Jamming (Spotify)

# Table of contents

1. [Project Goals](#description)
2. [Technologies](#tech)
3. [System Features](#sys-features)
4. [Installation instructions](#installation)
5. [Screenshots](#screenshots)

## 1. Project description<a name="description"></a>

In this project, I use functional React components to create an app that manages Spotify playlists and appointments. The app consists of two pages: one to view existing Spotify playlists and one to add tracks to new playlists.

## 2. Technologies<a name="tech"></a>

This system is provisioned to be built in JavaScript using React library which is highly flexible.

The browser will be in charge of rendering this application in its final form, HTML. Some of the logic involved in creating the web page, especially the one in charge of dealing with presentation logic is handled on the client-side.

List of frontend dependencies and version used:

-   bootstrap: v4.6.0
-   formik: v2.2.6
-   react: v17.0.2
-   react-bootstrap: v1.5.2
-   react-dom: v17.0.2
-   react-router-dom: v5.2.0
-   react-scripts: 4.0.3
-   react-spinners: v0.10.6
-   react-toastify: v7.0.3
-   serve: v11.3.2
-   web-vitals: v1.0.1
-   yup: v0.32.9

## 3. System Features<a name="sys-features"></a>

### View Playlist

-   Consult existing spotify Playlist (Spotify API calls)

### Create Playlist

-   Search Tracks (Spotify API calls)
-   Preview Tracks (Spotify API calls)
-   Create new playlist (Spotify API calls)
-   Add Tracks to playlist (Spotify API calls)

## 4. Installation instructions<a name="installation"></a>

Versions:

-   Node: 12.19.0
-   Npm: 7.6.3
-   React: 17.0.2

Download code from Github:

```shell
git clone https://github.com/antoineratat/react_jammming.git
```

Navigate to project directory.

```shell
cd react_jammming
```

Install node modules.

```shell
yarn install
```

Run the app in development mode. Open http://localhost:3000 to view it in the browser.

```shell
yarn start
```

## 5. Screenshots<a name="screenshots"></a>

Browse tracks ![Components Screenshot](https://github.com/antoineratat/github_docs/blob/main/react_jamming/jamming_create_playlist.PNG?raw=true)

View existing playlists ![Components Screenshot](https://github.com/antoineratat/github_docs/blob/main/react_jamming/jamming_view_playlist.PNG?raw=true)
