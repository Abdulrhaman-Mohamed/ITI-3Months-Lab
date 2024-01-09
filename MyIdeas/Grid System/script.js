// main javaScript file 

import Grid from "./app/grid/Grid.class.js";
import gridSettings from "./app/config/Grid.config.js"


const grid = new Grid(gridSettings);
//console.log(grid.settings)
grid.build();
grid.draw();