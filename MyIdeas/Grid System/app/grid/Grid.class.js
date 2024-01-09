import { generatorQueryConstructor } from "../utils/object.utils.js";
import GridCell from "./GridCell.class.js";

export default class Grid
{
    constructor()
    {
        generatorQueryConstructor.call(this , ...arguments);
    }
    // Get element with query selector to can assign to it some property
    get gridElement()
    {
        return document.querySelector("#grid")
    }
    build(){
        this.#buildGridLayout();
        this.#buildGridCells();
        this.#buildGridSvg();
    }
    // make ja layout for grid system 
    #buildGridLayout(){
        // destructure to my object to get some proprety
        const{settings , gridElement} = this;
        const {cellSize , borderSize , borderColor} = settings;
        const{innerWidth , innerHeight} = window;

        // size of full Cell
        const fullCellSize = cellSize + borderSize *2;
        // numbers of rows and columns
        this.numCols = Math.floor(innerWidth  / fullCellSize);
        this.numRows = Math.floor(innerHeight / fullCellSize);

        // make an grid width and height of it 
        this.gridWidth = fullCellSize * this.numCols;
        this.gridHeight = fullCellSize  * this.numRows;
        // make and grid in middle of page 
        this.gridMarginX = (innerWidth - this.gridWidth -borderSize * 2) /2;
        this.gridMarginY = (innerHeight - this.gridHeight -borderSize * 2) /2;

        Object.assign(gridElement.style , {
            width : `${this.gridWidth}px`,
            height:`${this.gridHeight}px`,
            marginLeft:`${this.gridMarginX}px`,
            marginTop :`${this.gridMarginY}px`,
            border :`${borderSize}px solid ${borderColor}`

        })

        
    }
    #buildGridCells(){
        const {numRows , numCols} = this;
        this.gridcells={};

        for(let row = 0 ; row< numRows ; row++)
        {
            for(let col = 0; col< numCols ; col++)
            {
                // create each cell for grid
                const gridcell = new GridCell({grid : this , row , col})
                gridcell.render();
                this.gridcells[gridcell.postion] = gridcell
            }
        }




    }
    #buildGridSvg(){}
    draw(){}
    
}