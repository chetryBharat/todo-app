import { connectRoutes } from 'redux-first-router';
import { GO_BACK, INITIAL_STATE, VIEW_EDIT_TODO, VIEW_SINGLE_TODO } from "../helpers/action_types";


const routesMap = {
  [INITIAL_STATE]: '/:todos',
  [VIEW_EDIT_TODO]: '/todos/:id',
  [GO_BACK]: '/:todos',
  [VIEW_SINGLE_TODO]: '/todos/:id'
};

export default connectRoutes(routesMap);