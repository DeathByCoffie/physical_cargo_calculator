import { Vector3 } from "./utils/Types";

class CargoGrid
{
    dimentions: Vector3;
    grid: Array<Array<Array<number>>>;

    constructor(length: number, width: number, height: number)
    {
        // Verify none of the values = 0, smallest grid can only by 1x1x1
        if(!length&&!width&&!height) throw "Inputs cannot be 0.";

        this.dimentions = {x: length, y: width, z: height};
        this.grid = new Array();

        // Loop through dimentions and map out matrix
        for(let x=0; x<this.dimentions.x; x++)
        {
            this.grid[x] = new Array();
            for(let y=0; y<this.dimentions.y; y++)
            {
                this.grid[x][y] = new Array();
                for(let z=0; z<this.dimentions.z; z++)
                {
                    this.grid[x][y][z] = 0; // Assign 0 to indicate location is empty
                }
            }
        }
    }

    get area()
    {
        return this.calcArea();
    }

    calcArea()
    {
        return this.dimentions.x * this.dimentions.y * this.dimentions.z;
    }
}


const newGrid = new CargoGrid(10, 2, 3);
console.log(newGrid.grid);