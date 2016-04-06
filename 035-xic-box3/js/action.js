var Action = function(container) {
    var x = Math.floor(Math.random() * Config.column);
    var y = Math.floor(Math.random() * Config.row);
    var rotation = Math.floor(Math.random() * 4) * 90;
    var square = create();
    update();

    function create() {
        var div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        return div;
    }

    function update() {
        square.style.left = x * Config.width + 'px';
        square.style.top = y * Config.height + 'px';
        square.style.transform = 'rotate(' + rotation + 'deg)';
    }

    function move(step) {
        switch(rotation / 90) {
        case 0: y = step > y ? 0 : y - step; break; // up
        case 1: x = x + step >= Config.column ? Config.column-1 : x + step; break; // right
        case 2: y = y + step >= Config.row ? Config.row-1 : y + step; break;
        case 3: x = step > x ? 0 : x - step; break;
        default: break;
        }
        update();
    }

    function rotate(angle) {
        rotation += angle;
        while (rotation < 0)
            rotation += 360;
        while (rotation >= 360)
            rotation -= 360;
        update();
    }

    return {
        position: {x: x, y: y},
        move: move,
        rotate: rotate
    }
}
