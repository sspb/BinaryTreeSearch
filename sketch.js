var tree


function setup() {
    createCanvas(1550, 1000);
    background(47);

    tree = new Tree();
    for (var i = 0; i < 5000; i++) {
        tree.addValue(floor(random(0, 10000)));
    }

    console.log(tree);
}

function draw() {
    background(47,29,11);
    tree.traverse();

}
