# Boilerplate

Boilerplate for a Webpack 4.5, Vue.js 2.5 and Bootstrap 4.1 project using ES6 and SCSS

## Frameworks & Plugins:
- Vue.js 2.5
  - vuex
  - vue-router
- Bootstrap 4.1 (without peer dependencies of jQuery and Popper.js)
- axios 0.18

## Languages
- ECMAScript 6
- SCSS

## Install

- copy this repository (clone, download, …)
- run `npm install` and `./collect.sh`

### `collect.sh`

This script collects packaged / minified assets from `node_modules`. It needs to be updated manually by adding files to the `files` array. It then copies the assets to `www/libs`.

## Usage

There is a simple predefined structure, which you are of course free to change.

### Structure

- `src`
  - `asset`
  - `component`
    - `_tpl`
    - `Activity`
    - `App`
    - `UI`
  - `router`
  - `scss`
  - `main.js`
  - `store.js` 
  
#### `src`

The root directory.

#### `asset`

Directory for images, fonts, and what-not.

#### `component`

`_tpl`: Template for creating a new Vue.js component

`Activity`: Subdirectory for activity components. Activity components would be single pages that can be found in the router, for example: `Index`, `Login`, `Register`, …

`App`: Main Vue.js component that is being mounted into `www/index.html`

`UI`: Collection of Vue.js component. There are three predefinded components, that your are free to use, extend or remove.

#### `router`

Vue.js router

#### `scss`

Collection of global SCSS, for example animations and variables.

#### `main.js`

The webpack entry point and script, that mounts the Vue.js app.

#### `store.js`

Creates the Vuex store.

##### UI Components

**Icon**: Icons using svg. The name attribute decides which icon, the color attribute the color. Colors can be transitioned using statements like `:color="isActive ? 'primary' : 'reverse'"`

**LoadingDialog**: Modal that displays a spinner. It can be activated and deactivated by commiting the `startLoading` and `stopLoading` mutations to the store.

**Snackbar**: Android/Material style alerts. You can set messages and error by commiting the `setMessage` and `setError` mutations to the store. Messages will disappear after 3 secons, errors after 5 seconds, or when the user presses 'OK'

## Author and contributors

- (Author) Barthélémy Bonhomme, @BarthyB: post@barthy.koeln
