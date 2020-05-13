import calendarApi from './calendar_api';

function xSuccess(data) {
  return { type: 'x', data };
}

function x() {
  return async function getNewsThunk(dispatch) {
    try {
      const { data } = await calendarApi.x();
      return dispatch(xSuccess(data));
    } catch (err) {
      throw err;
    }
  };
}

export default {
  x,
};
