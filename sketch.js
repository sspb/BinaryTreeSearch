var tree;
var PHI = 1.61803;
var traveller;

function setup() {
    createCanvas(500, 500);
    background(47);
    // frameRate(30);
buildNewTree();
    traveller = new Traveller();
}

function draw() {
    background(29,11,7);
    tree.traverse();
    traveller.update();
    traveller.display();
}

function buildNewTree(){
    tree = new Tree();
    for (var i = 0; i < 322; i++) {
        tree.addValue(floor(random(0, 100000)));
    }

    console.log(tree);
}

function keyTyped(){
    if(key=='r'){
        buildNewTree();
    }
}
