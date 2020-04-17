// a common function to handle all notifications like popup toaster
const handleErrors = (actionType, notification, dispatch) => {
  dispatch(actionType, notification, { root: true });
};

export default handleErrors;
