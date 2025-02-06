/**
 * Redux slice for managing UI state, including cart visibility and notifications.
 */
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { 
    cartIsVisible: false, // Determines if the shopping cart is visible
    notification: null // Stores notification details
  },
  reducers: {
    /**
     * Toggles the cart visibility and adjusts the body's overflow style.
     * Prevents scrolling when the cart is open.
     * 
     * @param {Object} state - Current UI state.
     */
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
      if (state.cartIsVisible) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    },
    /**
     * Displays a notification with the given title, status, and message.
     * 
     * @param {Object} state - Current UI state.
     * @param {Object} action - Redux action containing the notification payload.
     * @param {string} action.payload.title - Notification title.
     * @param {string} action.payload.status - Notification status (e.g., success, error).
     * @param {string} action.payload.message - Notification message content.
     */
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    /**
     * Hides the currently displayed notification.
     * 
     * @param {Object} state - Current UI state.
     */
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
