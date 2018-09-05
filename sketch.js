var tree


function setup() {
    createCanvas(900,700);
    background(47);

    tree = new Tree();
    for (var i = 0; i < 5000; i++) {
        tree.addValue(floor(random(0, 1000)));
    }

    console.log(tree);
    tree.traverse();
}
