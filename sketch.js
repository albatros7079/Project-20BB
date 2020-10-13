/*
------PROJECT C - 24 (GCSO SIMULATOR)------
THIS PROJECT IS CREATED BY SAMEER KARNA, STUDENT OF WHITE HAT JR.

*/



//Variables of the game.
//Variables of cars.
    var car, car_image, car_weight, car_speed, car_calculation;
    var car3, car3_image, car3_weight, car3_speed, car3_calculation;
    var car2, car2_image, car2_weight, car2_speed, car2_calculation;

//Variable for wall.
    var wall, wall_image;

//Title image.
    var Title_image, title;
   
//buttons.
    var button1, button1_image;
    var button2, button2_image;
    var button3, button3_image;

//Varianles for the simulator's state;
    var simulator_state;
    var START, ZENIA, TORUS, CYCLAP, END1, END2, END3;

//Sound for button click.
    var button;

//Sound for crashing of car.
    var hit;

//Road.
    var road, road_image;

//Back button.
    var back, back_image;
    
//Function for loading images, sounds, animations etc.
    function preload() {
    
        //Image for car.
            car_image = loadImage("car.png");

        //Image for second car.
            car2_image = loadImage("car2.png");

        //Image for thwe third car.
            car3_image = loadImage("car3.png");

        //Logo.
            Title_image = loadImage("title.png");

        //Buttons.
            button1_image = loadImage("button1.png");
            button2_image = loadImage("button2.png");
            button3_image = loadImage("button3.png");

        //Sound for button click.
            button = loadSound("button.mp3");


            hit = loadSound("hit.mp3");
        //Road Image.
            road_image = loadImage("road.jpg");

        //Values of the simulator state;
            START = 0;
            ZENIA = 1;
            TORUS = 2;
            CYCLAP = 3;
            END1 = 4;
            END2 = 5;
            END3 = 6;

            simulator_state = START;

        //Back button image.
            back_image = loadImage("back.png");
    }

//This function creates the objects.
    function setup() {

        //Canvas.
            createCanvas(1100,500);

        //Road.
            road = createSprite(550,250);
                road.addImage(road_image);
                road.scale = 1.8;
        
        //Cars of the game.
            car = createSprite(150,220);
                car.addImage(car_image);
                car.scale = 0.32;
                car.pointTo(0,220);

            car2 = createSprite(150,230);
                car2.addImage(car2_image);
                car2.scale = 0.32;

            car3 = createSprite(150,230);
                car3.addImage(car3_image);
                car3.scale = 0.17;
            
        //Simulator title Image.
            title = createSprite(550,100);
                title.addImage(Title_image);
                title.scale = 0.5;

        //Buttons of the game.
            button1 = createSprite(200,350);
                button1.addImage(button1_image);
                button1.scale = 0.3;

            button2 = createSprite(550,350);
                button2.addImage(button2_image);
                button2.scale = 0.3;

            button3 = createSprite(900,350);
                button3.addImage(button3_image);
                button3.scale = 0.3;

            back = createSprite(50,50,10,10);
                back.addImage(back_image);
                back.scale = 0.2;

        //Wall.
            wall = createSprite(1045,250,20,500);
                wall.shapeColor = rgb(210,105,0);

        //This calculates the damge of each car.
            car2_weight = random(400-1500);
            car2_speed = random(55-90);
            car2_calculation = 0.5*car2_speed*car2_weight*car2_speed/22500;

            car_speed = random(55-90);
            car_weight = random(400-1500);
            car_calculation = 0.5*car_speed*car_weight*car_speed/22500;

            car3_speed = random(55-90);
            car3_weight = random(400-1500);
            car3_calculation = 0.5*car3_speed*car3_weight*car3_speed/22500;
            
    }

//This function draws the objects.
    function draw() {

        //This makes the title invisible.
            title.visible = false;

        //simulator state START.
            if(simulator_state === START) {
                back.visible = false;
                background("white");
                reset();
                road.visible = false;
                title.visible = true;
                button1.visible = true;
                button2.visible = true;
                button3.visible = true;
            
                wall.visible = false;
                car.visible = false;
                car2.visible = false;
                car3.visible = false;

                if(mousePressedOver(button2)) {
                    button.play();
                    simulator_state = TORUS;
                }
                if(mousePressedOver(button3)) {
                    button.play();
                    simulator_state = ZENIA;
                }
                if(mousePressedOver(button1)) {
                    button.play();
                    simulator_state = CYCLAP;
                }
            }
        //Simulator state TORUS
            if(simulator_state === TORUS) {

                //This makes the other objects invisible.
                    back.visible = false;
                    title.visible = false;
                    button1.visible = false;
                    button2.visible = false;
                    button3.visible = false;

                //This makes the necessary objects visible.
                    road.visible = true;  
                    wall.visible = true;
                    car2.visible = true;

                //Key function to move the car.
                    if(keyDown("right")) {
                        car2.velocityX = 60;
                    }
        
                //isTouching Algorithm
                    if(car2.x - wall.x <= car2.width/2 + wall.width/2 && wall.x - car2.x <= wall.width/2 + car2.width/2 
                        && car2.y - wall.y <= car2.height/2 + wall.height/2 &&  wall.y - car2.y <= wall.height/2 + car2.height/2) {
                            simulator_state = END1;
                            hit.play();
                            
                     }
             }
       
        //Simulator state ZENIA
            if(simulator_state === ZENIA) {

                //This makes the other objects invisible.
                    title.visible = false;
                    button1.visible = false;
                    button2.visible = false;
                    button3.visible = false;

                 //This makes the necessary objects visible.
                    car.visible = true;
                    road.visible = true;
                    wall.visible = true;

                //Key function to move the car.
                    if(keyDown("right")) {
                        car.velocityX = 50; 
                    }

                //isTouching Algorithm
                    if(car.x - wall.x <= car.width/2 + wall.width/2 && wall.x - car.x <= wall.width/2 + car.width/2 
                        && car.y - wall.y <= car.height/2 + wall.height/2 &&  wall.y - car.y <= wall.height/2 + car.height/2) {
                            simulator_state = END2;
                            hit.play();
                            
                    }
            }

        //Simulator state CYCLAP.
            if(simulator_state === CYCLAP) {

                //This makes the other objects invisible.
                    title.visible = false;
                    button1.visible = false;
                    button2.visible = false;
                    button3.visible = false;

                //This makes the necessary objects visible.
                    car3.visible = true;
                    road.visible = true;
                    wall.visible = true;

                //Key function to move the car.
                    if(keyDown("right")) {
                        car3.velocityX = 90;  
                    }

                 //isTouching Algorithm
                    if(car3.x - wall.x <= car3.width/2 + wall.width/2 && wall.x - car3.x <= wall.width/2 + car3.width/2 
                        && car3.y - wall.y <= car3.height/2 + wall.height/2 &&  wall.y - car3.y <= wall.height/2 + car3.height/2) {
                            simulator_state = END3;
                            hit.play();  
                    }
             }

        //This draws the sprites.
            drawSprites();

        //simulator state END1.
        if(simulator_state === END1) {
            back.visible = true;

            if(mousePressedOver(back)) {
                simulator_state = START;
                button.play();

            }

                car2.collide(wall);
                textSize(40);
                fill("255");
                textFont("Impact");
                text("DEFORMATION: " + car2_calculation,417,310);

                if(car2_calculation > 180)  {
                    fill(250);
                    textSize(80);
                    textStyle(BOLD);
                    textFont("Calibri")
                    fill("red");
                    textFont("Arial");
                    text("NOT SAFE!",360,170);
                }
          }

         //simulator state END2.
        if(simulator_state === END2) {
            back.visible = true;

            if(mousePressedOver(back)) {
                simulator_state = START;
                button.play();

            }
            car.collide(wall);
            textSize(40);
            fill("255");
            textFont("Impact");
            text("DEFORMATION: " + Math.round(car_calculation),417,310);

            if(car_calculation > 180)  {
                fill(250);
                textSize(80);
                textStyle(BOLD);
                textFont("Calibri")
                fill("red");
                textFont("Arial");
                text("NOT SAFE!",360,170);

            } else {
                fill(250);
                textSize(80);
                textStyle(BOLD);
                textFont("Calibri")
                fill("green");
                textFont("Arial");
                text("SAFE!",440,170);
            }
         }

        //simulator state END3.
            if(simulator_state === END3) {
                back.visible = true;

                if(mousePressedOver(back)) {
                    simulator_state = START;
                    button.play();

                }
                car3.collide(wall);
                textSize(40);
                fill("255");
                textFont("Impact");
                text("DEFORMATION: " + Math.round(car3_calculation),417,310);
                if(car3_calculation > 180)  {
                    fill(250);
                    textSize(80);
                    textStyle(BOLD);
                    textFont("Calibri")
                    fill("red");
                    textFont("Arial");
                    text("NOT SAFE!",360,170);
                } else {
                    fill(250);
                    textSize(80);
                    textStyle(BOLD);
                    textFont("Calibri")
                    fill("green");
                    textFont("Arial");
                    text("SAFE!",440,170);
                }
             }
    }

//This resets everything.
    function reset() {

        //This resets all the car's positions.
            car2.x = 150;
            car2.y = 230;
            car.x = 150;
            car.y = 230;
            car3.x = 150;
            car3.y = 230;
    }
