const create_square = (vertical_boundary, horizontal_boundary) => {
    let position_x = Math.floor(Math.random() * vertical_boundary);
    let position_y = Math.floor(Math.random() * horizontal_boundary);
    let velocity_x = Math.floor(Math.random() * 5);
    let velocity_y = Math.floor(Math.random() * 5);
    let direction = 1
    var div = document.createElement('div');
    div.classList.add("square")
    div.style.left = position_x + 'px';    
    div.style.top = position_y + 'px';    
    div.style.borderRadius = '50%'; 
    return {
      position_x: position_x,
      position_y: position_y,
      velocity_x: velocity_x,
      velocity_y: velocity_y,
      direction: direction,
      div:div
    };
  };
  const detectCollisionWithVertical = (vertical_boundary, square) => {
    if (square.position_x > vertical_boundary) return true;
    if (square.position_x < 0) return false;
  };
  
  const detectCollisionWithHorizontal = (horizontal_boundary, square) => {
    if (square.position_y > horizontal_boundary) return true;
    if (square.position_y < 0) return false;
  };
  
  const move = (square) => {
    square.position_x += square.velocity_x;
    square.position_y += square.velocity_y;
  };
  
  const change_direction = (vertical_boundary, square) => {
    if(detectCollisionWithVertical(horizontal_boundary, square))
      square.direction = 0
  };
  var squares = []
  const create_squares = (number_of_squares) => {
      var animation = document.getElementById('animation')
      for(let i=0;i<number_of_squares; ++i){
          console.log(document.body.clientWidth, document.body.offsetHeight)
          var square = create_square(document.body.clientWidth, document.clientHeight)
          squares.push()
          animation.appendChild(square.div)
      }


  }
  create_squares(100)
  const animate = () => {

  }
exports = {
    create_square,
    detectCollisionWithVertical,
    detectCollisionWithHorizontal,
    move,
    change_direction
  };
  