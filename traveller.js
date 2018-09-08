function Traveller() {
    this.v = createVector(width / 2, height / 5);
    this.angle=0;
    this.offsetX = width/3;
    this.offsetY=height/3;
}

Traveller.prototype.update =function(){
    var ang1 = radians(this.angle);

    this.v.x=(width/2)  + (this.offsetX * cos(ang1));
    this.v.y=(height/2)  + (this.offsetY * sin(ang1));
    this.angle += PHI*PHI;
}

Traveller.prototype.display =function(){
    fill(255,50);
    noStroke();
    // ellipse(this.v.x,this.v.y,7,7);
}
