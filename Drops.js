class Drops{
    constructor(x, y){
        var drops = Matter.Bodies.circle(x, y, 10, 10)
        var maxDrops = 100
        var options = {
            'friction': 0.1,
            'restitution': 1,
            'density': 1
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);

        if (this.body.position.y > height){
            Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)})
        }

        for (var i = 0; i < maxDrops; i++){
            drops.push(new createDrop(random(0, 400), random(0, 400)))
        }
    }
   
    display(){
        drops.display()
    }
}