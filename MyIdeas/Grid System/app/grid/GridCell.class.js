import { generatorQueryConstructor } from "../utils/object.utils.js";

export default class GridCell
{
    constructor()
    {
        generatorQueryConstructor.call(this , ...arguments);
    }

    get postion()
    {
        return`${this.row}-${this.col}`;
    }

    get gridcellElement()
    {

        return document.querySelector(`.gridcell[postion="${this.postion}"]`)
    }

    render(){
        this.#renderElement()
        this.#renderGridcell()
        this.#renderHtml()
        this.renderOutInCells()
        this.#renderEvents()
    }
    // create an element each time
    #renderElement(){
        const {grid:{gridElement}} = this;

        const gridcellElement = document.createElement("div");
        gridcellElement.classList.add('gridcell');
        gridcellElement.setAttribute("postion",this.postion)

        gridElement.append(gridcellElement)
    }

    #renderGridcell(){
        const{grid:{numCols , numRows}} = this

        this.Blocked = false ;
        this.isOutCell = this.postion === "0-0";
        this.isInCell = this.postion === `${numRows -1}-${numCols-1}`

    }

    #renderHtml(){
        const{gridcellElement , grid:{settings:{cellSize , borderSize , borderColor}}} = this;

        Object.assign(gridcellElement.style , {
            width:`${cellSize}px`,
            height:`${cellSize}px`,
            border:`${borderSize}px solid ${borderColor}`
        })

        gridcellElement.setAttribute("draggable" , true)
    }

    renderOutInCells(){
        this.gridcellElement.classList[this.isOutCell ? 'add' :'remove' ]("out-cell")
        this.gridcellElement.classList[this.isInCell ? 'add' :'remove' ]("in-cell")

    }

////////////////////////////////
    #renderEvents(){
        this.#renderClickEvent()
        this.#renderHoverEvent()
        this.#renderDragDropEvents()
    }

    #renderClickEvent(){
        const{gridcellElement} = this

        gridcellElement.addEventListener("click",()=>{
            if(this.isOutCell || this.isInCell) return

            this.Blocked = !this.Blocked;
            this.gridcellElement.classList.toggle("blocked")
        })

    }

    #renderHoverEvent(){
        const{gridcellElement} = this

        gridcellElement.addEventListener("mouseover",()=>{
            if(this.isOutCell || this.isInCell)
            {
                gridcellElement.style.cursor='grab';
            }
            else if(!this.Blocked)
            {
                gridcellElement.style.cursor='pointer';   
            }
            else
            {
                gridcellElement.style.cursor='crosshair';
            }
        })        
    }

    #renderDragDropEvents(){
        const {gridcellElement , grid} = this

        gridcellElement.addEventListener("dragover" , (e)=>{
            if(dontAllowDrop.call(this)) return
            e.preventDefault();
        })

        gridcellElement.addEventListener("dragstart" , (e)=>{
            if(dontAllowDrag.call(this)) {
                e.preventDefault();
                return
            }

            grid.draggedGridcell = this
        })

        gridcellElement.addEventListener("drop" , ()=>{
            this.resetCell();

            this.isInCell = grid.draggedGridcell.isInCell
            this.isOutCell = grid.draggedGridcell.isOutCell

            this.renderOutInCells()

            grid.draggedGridcell.resetCell()
        })

        function dontAllowDrop(){
            const {gridcellElement , grid } = this

            if(grid.draggedGridcell.gridcellElement === gridcellElement) return true
            if(grid.draggedGridcell.isOutCell && this.isInCell) return true
            if(grid.draggedGridcell.isInCell && this.isOutCell) return true

        }
        function dontAllowDrag(){
            
            return ( !this.isInCell && !this.isOutCell )
        }

        // grid.draw();

    }

    resetCell(){
        this.isInCell = false
        this.isOutCell = false
        this.Blocked =false

        this.renderOutInCells();
    }

}