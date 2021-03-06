import * as types from '../constants/HomeActionTypes';

export function loadedHomeInfo(name, surveysCompleted, activeHours) {
  return {
    type: types.LOADED_HOME_INFO,
    name,
    surveysCompleted,
    activeHours
  }
}

export function loadHomeInfo() {
  return {
    type: types.LOAD_HOME_INFO
  }
}

export function createNotification(notificationText) {
  return {
    type: types.CREATE_NOTIFICATION,
    notificationText
  }
}

export function clearNotification() {
  return {
    type: types.CLEAR_NOTIFICATION
  }
}
