class Pig extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 100, 100);
        this.image = loadImage("sprites/enemy.png");
        this.opacity = 255;
    }

    display()
    {
        if (this.body.speed < 2.5)
        {
            super.display();
            this.opacity = 255;
        }
        else
        {
            World.remove(world, this.body);
            this.opacity-=5;
            push();
            tint(255, this.opacity);
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        if (this.opacity == 250)
        {
            score += 100;
        }
    }
}