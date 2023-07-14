import { AboutController } from "./controllers/AboutController.js";
import { CastleController } from "./controllers/CastleController.js";
import { CommentController } from "./controllers/CommentContoller.js";
import { HomeController } from "./controllers/HomeController.js";
import { PrincessController } from "./controllers/PrincessController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PrincessController, CastleController, CommentController],
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */