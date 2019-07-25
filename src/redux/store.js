import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
  postReducer,
  specialityReducer,
  courseReducer,
  teacherReducer,
  fragmentReducer
} from "./reducers"

export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    courseReducer,
    teacherReducer,
    fragmentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
