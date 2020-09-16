class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX = offsetX
      this.offsetY = offsetY

     var option = {
          bodyA : bodyA,
          bodyB : bodyB,           
      stiffness : 0.04,
         length : 10,
         pointB :{x:this.offsetX, y:this.offsetY}           
        }
     
     this.rope = Constraint.create(option);
     World.add(world,this.rope);


    }
  display(){
      
    var pointA = this.rope.bodyA.position; 
    var pointB = this.rope.bodyB.position;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

  }}