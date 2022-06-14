class Level extends Phaser.Scene
{
    constructor()
    {
        super({key: "Level"})
    }

    preload()
    {
        //
    }

    create()
    {
        this.cameras.main.setBackgroundColor(0xffffff)

        const square_size = 32;
        let game_map = [ 
            [1,0,0,0],
            [0,1,0,0],
            [0,1,1,0], 
            [0,0,1,0],
            [0,0,0,1],
        ];

        for (let map_y = 0; map_y < game_map.length; map_y++){   
            for (let map_x = 0; map_x < game_map[map_y].length; map_x++){
                let color

                if (game_map[map_y][map_x] == 0) {
                    color = 0x000000
                } else {
                    color = 0x6666ff
                }
                this.add.rectangle(square_size*map_x, square_size*map_y, square_size, square_size, color).setOrigin(0,0)
                
            }
        }
    }

    update(time, delta)
    {
        //
    }
}