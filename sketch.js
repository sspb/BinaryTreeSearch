var tree


function setup() {
    noCanvas();
    tree = new Tree();
    tree.addValue(5);

    console.log(tree);
}

function Tree(){
	this.root = null;
}

Tree.prototype.addValue = function(val){
    var n = new Node(val);
	if(this.root == null){
		this.root = n;
	}
}

function Node(val) {
	this.value = val;
    this.left = null;
    this.right = null;
}