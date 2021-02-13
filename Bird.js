class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 100, 100);
        this.image = loadImage("sprites/bird.png");
    }

    move()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}