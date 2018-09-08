function Node(val, x, y) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
}

Node.prototype.search = function(val) {
    if (this.value == val) {
        // console.log("found: " + val);
        return this;
    } else if (val < this.value && this.left != null) {
        return this.left.search(val);
    } else if (val < this.value && this.right != null) {
        return this.right.search(val);
    }
    return null;
}

Node.prototype.visit = function(parent) {
    if (this.left != null) {
        this.left.visit(this);
    }
    // console.log(this.value);
    var clrSclr = map(this.value,0, 100000,0,200);
    stroke(clrSclr+55, 76, 255-clrSclr, 18);
    noFill();
    var ndCircDia = map(dist(traveller.v.x,traveller.v.y,this.x,this.y),47,0,10,100);
    ellipse(this.x, this.y, ndCircDia, ndCircDia);

    noStroke();
    fill(250,47);
    textSize(8);
    textAlign(CENTER);
    text(this.value, this.x, this.y);

    stroke(100);
    line(parent.x, parent.y, this.x, this.y);

    if (this.right != null) {
        this.right.visit(this);
    }
}

Node.prototype.addNode = function(n) {
    // stroke(100);
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
            this.left.x = this.x - 29;
            this.left.y = this.y + 18;
            // line(this.x, this.y, this.left.x, this.left.y);
        } else {
            this.left.addNode(n);
        }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x = this.x + 29;
            this.right.y = this.y + 18;
            // line(this.x, this.y, this.right.x, this.right.y);
        } else {
            this.right.addNode(n);
        }
    }
}
