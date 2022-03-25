let drawing = (Math.random() * (99999 - 0)) + 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(240*(1-mouseX/700), 230*(1-mouseX/700), 220*(1-mouseX/700));
  scheme(); 
}


//------------FUNCTION : CHECK IF WE DO NOT DRAW OUT OF THE FRAME--------------//
function verif(x,y){
  if(x<50 || x>650 || y<50 || y>650  ){
    return false ; 
  }
  return true ; 
}


//---------------------------FUNCTION : DRAW SCHEME--------------------------//
function scheme(){
  randomSeed(drawing) 
  let oldX ;
  let oldY ; 
  let x = floor(random(0, 1) * (650 - 50)) + 50;
  let y = floor(random(0, 1) * (650 - 50)) + 50;
  let randomThickness ; 
  let thickness;
  let randModel; 
  let model = 0 ; 
  let nbMovement = 0 ; 
  let deplacement;
  let sign ; 
  let height ; 
  let width ; 
  
  
//-------------------------------MODEL LOOP------------------------------//
  while(nbMovement<60){
    
    oldX = x;    
    oldY = y; 

//-----------------------------RANDOM PARAMS-----------------------------//
    //Choose model
    randModel = random() * (26 - 0) + 0;
    
    //choose model's width
    deplacement = floor(random() * (10 - 5)) + 5;  
    deplacement = deplacement*20 ;  
    
    //choose model's thickness
    randomThickness = floor(random() * (100 - 0)) + 0;   
    if(randomThickness>0 && randomThickness<=85){   //H                 
        thickness = 1; 
      }
    if(randomThickness>85 && randomThickness<=90){                   
        thickness = 3;
      }
    if(randomThickness>90 && randomThickness<=95){   //I                
        thickness = 5;
      }
    if(randomThickness>95 && randomThickness<=100){   //J               
        thickness = 7;
      }
    
    //choose deplacement's sign (1 or -1)
    sign =  floor(random() * (2 - 0)) + 0; 
    if(sign==0){
        sign = -1 ; 
     } 
    
    
//---------------------MODEL 1 : DRAW HORIZONTAL LINE--------------------//
      if(randModel<=10 ){ 
     
        x += deplacement*sign;
        
        if(verif(x,y) && model != 1 ){
          line(oldX, oldY, x, y);
          model = 1 ;
          nbMovement ++;  
        }else{
           x = oldX;
           y = oldY;
        }
        
      }
    
//---------------------MODEL 2 : DRAW VERTICAL LINE---------------------//
      if(randModel>10 && randModel<=20 ){ 
        
        y += deplacement*sign;
        
        if(verif(x,y) && model != 2){
          line(oldX, oldY, x, y);
          model = 2 ;           
          nbMovement ++; 
        }else{
           x = oldX;
           y = oldY;
        } 
        
      }

//---------------------MODEL 3 : DRAW DIAGONAL LINE--------------------//
      if(randModel>20 && randModel<=25 ){

        x += deplacement*sign; 
        y += deplacement*sign;
        
        if(verif(x,y) && model != 3){
          line(oldX, oldY, x, y);
          model = 3 ; 
          nbMovement ++;           
        }else{
           x = oldX;
           y = oldY;
        } 
        
      }

//----------------MODEL 4 : DRAW HORIZONTAL TRIANGLE PATTERN--------------//
      if(randModel>25 && randModel<=25.25){  
                
        if(verif(x,y+90*sign) && model != 4){
          x += 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x -= 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x -= 20 ;         
          y += 20*sign;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x -= 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x -= 20 ;         
          y += 20*sign ;
          line(oldX, oldY, x, y);
         
          model = 4 ; 
          nbMovement ++; 
        }
        
      }

//----------------MODEL 5 : DRAW VERTICAL TRIANGLE PATTERN-------------//
     if(randModel>25.25 && randModel<=25.50){
       
       if(verif(x+90*sign,y) && model != 5){         
          x += 20*sign ;         
          y -= 20 ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20*sign ;          
          y += 20 ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20*sign ;          
          y -= 20 ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20*sign ;          
          y += 20 ;        
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20*sign ;          
          y -= 20 ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20*sign ;          
          y += 20 ;
         line(oldX, oldY, x, y);
         oldX = x;
          oldY = y;
          x += 20*sign ;          
          y -= 20 ;
          line(oldX, oldY, x, y);
          oldX = x;
          oldY = y;
          x += 20*sign ;          
          y += 20 ;
         line(oldX, oldY, x, y);
         
         model = 5 ; 
         nbMovement ++; 
        }   
       
     }
    
//---------------MODEL 6 : DRAW HORIZONTAL SQUARE SIGNAL PATTERN -------------//
    if(randModel>25.50 && randModel<=25.75){  
      
      height = 40 ; 
      width = 50 ; 

      if(verif(x+width*5*sign,y) && model != 6){
        
        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        y -= height ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        x += (floor(random() * (width - 5)) + 5 )*sign;      
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        y += height ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        x += (floor(random() * (width - 5)) + 5 )*sign;  
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        y -= height ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        x += (floor(random() * (width - 5)) + 5 )*sign;  
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        y += height ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        x += (floor(random() * (width - 5)) + 5 )*sign;   
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        y -= height ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        x += (floor(random() * (width - 5)) + 5 )*sign;   
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        y += height ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y); 
         
         model = 6 ; 
         nbMovement ++; 
      }
      
    }   
    

//---------------MODEL 7 : DRAW VERTICAL SQUARE SIGNAL PATTERN --------------//
    if(randModel>25.75 && randModel<=26){ 
      
      height = 50 ; 
      width = 30 ;

      if(verif(x,y+height*5*sign) && model != 7){

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        x -= width ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        y += (floor(random() * (height - 5)) + 5)*sign;       
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        x += width ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        y += (floor(random() * (height - 5)) + 5)*sign;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        x -= width ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        y += (floor(random() * (height - 5)) + 5)*sign;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        x += width ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        y += (floor(random() * (height - 5)) + 5)*sign;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        x -= width ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 4*mouseY/500; 
        oldX = x;
        oldY = y;
        y += (floor(random() * (height - 5)) + 5)*sign;
        strokeWeight(thickness);
        line(oldX, oldY, x, y);

        thickness = 1*mouseY/500 ; 
        oldX = x;
        oldY = y;
        x += width ;
        strokeWeight(thickness);
        line(oldX, oldY, x, y); 

        model = 7 ; 
        nbMovement ++; 
      }

  }
   
    //Color according to mouseX
    stroke(240*mouseX/700, 230*mouseX/700, 220*mouseX/700);
    
    //Thickness according to mouseY
    strokeWeight(thickness*mouseY/500);
    
  }
}
