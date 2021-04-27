const create_square = (vertical_boundary, horizontal_boundary, id) => {
    let position_x = Math.floor(Math.random() * vertical_boundary);
    let position_y = Math.floor(Math.random() * horizontal_boundary);
    let velocity_x = Math.floor((Math.random() * 1)+1);
    let velocity_y = Math.floor((Math.random() * 1)+1);
    let direction_x = 1
    let direction_y = -1
    var div = document.createElement('div');
    div.id = id.toString()
    div.classList.add("square")
    div.style.left = position_x + 'px';    
    div.style.top = position_y + 'px';    
    div.style.borderRadius = '50%'; 
    return {
        vertical_boundary: vertical_boundary,
        horizontal_boundary: horizontal_boundary,
      position_x: position_x,
      position_y: position_y,
      velocity_x: velocity_x,
      velocity_y: velocity_y,
        direction_x: direction_x,
        direction_y: direction_y,
      div:div
    };
  };
  const detectCollisionWithVertical = (square) => {
    if (square.position_x > square.vertical_boundary) return true;
    if (square.position_x < 0) return true;
  };
  
  const detectCollisionWithHorizontal = (square) => {
    if (square.position_y > square.horizontal_boundary) return true;
    if (square.position_y < 0) return true;
  };
  
  const move = (square) => {
      console.log('move')
      square.position_x += square.velocity_x * square.direction_x;
      square.position_y += square.velocity_y * square.direction_y;
    square.div.style.left = square.position_x+"px";
    square.div.style.top = square.position_y+"px";

  };
  
const change_direction = (square) => {
      if (detectCollisionWithVertical(square)) {
          square.direction_x *= -1
          return
      }
      if (detectCollisionWithHorizontal(square)) {
          square.direction_y *= -1
          return
      }
  };
  var squares = []
  const create_squares = (number_of_squares) => {
      var animation = document.getElementById('animation')
      for(let i=0;i<number_of_squares; ++i){
          var square = create_square(animation.clientWidth, animation.clientHeight,i)
          squares.push(square)
          animation.appendChild(square.div)
      }


  }
  create_squares(500)
const animate = () => {
    squares.forEach(move)
    squares.forEach(change_direction)
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
exports = {
    create_square,
    detectCollisionWithVertical,
    detectCollisionWithHorizontal,
    move,
    change_direction
  };
  