# RNUserList

## Overview

Shows a list of users

### Building the overlay

- An overlay `Context` was created which holds the visibility state, element to be rendered in the overlay and the callback to be executed when pressing on the overlay backdrop
- Overlay UI was made by adding a View in the root most node and this view had a press event handler for handling the backdrop press
- `useOverlay` hook exposes the properties of the overlay context and also handles the backdrop press callback
- The blur effect was achieved by using an `ImageBackground` and its `opacity` style
