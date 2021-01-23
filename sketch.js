var canvas, backgroundImage;

var gameState = "start"

var name;
var form, backgroundImage;

var space, spaceImg, harry, harryImg;

var potion,potionImg,potionGroup;

var fire,fireImg;

var wand,ron,ronImg;

var snitchImg

var enemy1,enemy2,enemy1Img,enemy2Img,enemy1Group,enemy2Group;

var score=0;

var life = 5;

 



function preload(){
  backgroundImage = loadImage("images/background.png")
  spaceImg = loadImage("images/space.jpeg")
  harryImg = loadImage("images/harry.png")
  fireImg = loadImage("images/ball.png")
  wand = loadSound("sounds/wand.mp3")
  snitchImg = loadImage("images/lifeline.png")
  enemy1Img = loadImage("images/enemy.png")
  enemy2Img = loadImage("images/enemy2.png")
  potionImg = loadImage("images/potion.png")
  ronImg = loadImage("images/ron.png")
  
  
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-170);

  space=createSprite(width/2, height/2)
  space.addImage(spaceImg)
 
  space.y=400
  console.log(space.y)
  console.log(displayHeight-30)
    

  harry = createSprite(width/2, height - 120)
  harry.addImage(harryImg)
  harry.scale = 0.7

  ron= createSprite(width/2,height/2)
  ron.visible = false
  ron.scale = 0.1


  
  

  fire = createSprite(harry.x,harry.y)
  fire.visible = false
  fire.addImage(fireImg)
  fire.scale = 0.15



  
  textSize(20)
  fill("yellow")
 
  form = new Form();

  
  
  enemy1Group = new Group()
  enemy2Group = new Group()
  potionGroup = new Group()
  
  
}


function draw(){
  
  if(gameState === "start"){
    form.display();
    
  }

  if(gameState==="play"){
    harry.x=mouseX;
    space.velocityY=6;

    if(space.y>540){
      space.y=400
    }

    if(keyDown("space")){
      fire.x = harry.x - 30
      fire.y = harry.y
      fire.visible = true
      fire.velocityY = -4
      wand.play()
      

    }

    
  if(gameState==="play"){
    ron.x=mouseX;
    space.velocityY=6;

    if(space.y>540){
      space.y=400
    }

    
    if(keyDown("space")){
      fire.x = ron.x - 10
      fire.y = ron.y
      fire.visible = true
      fire.velocityY = -4
      wand.play();  
      

    }

    
    spawnEnemy1();
    spawnEnemy2();
    spawnPotion();
   
    drawSprites();

    if(harry.isTouching(enemy2Group)){
      life = life - 1;
      enemy2Group.destroyEach()
      

      if(score>1){
        score = score - 1
        

      }
      

    }


    if(ron.isTouching(enemy2Group)){
      life = life - 1;
      enemy2Group.destroyEach()
    }

    if(ron.isTouching(potionGroup)){
      ron.addImage()

    }

    

    if(fire.isTouching(enemy1Group)){
      enemy1Group.destroyEach()
      score = score + 1;

    }

    if(harry.isTouching(potionGroup)){
      harry.addImage(ronImg)
      
      
    }

    





    text(name + " score "+score,displayWidth-300,40)
    text("Press space to shoot",40,40)

    for (var i = 0; i < life; i++) {
      image(snitchImg, 450 + (i * 70),40,50,50);
    }
  }
  
}



function spawnEnemy1(){
  if(frameCount%150 === 0){
    var enemy = createSprite(random(20, width-20), 0)
    enemy.addImage(enemy1Img)

    enemy.velocityY = 5;

   enemy.lifetime = height/enemy.velocityY

    enemy1Group.add(enemy)
    enemy.scale = 0.3;
    
    enemy.setCollider("circle",0,0,180)
  }
}

function spawnEnemy2(){
  if(frameCount%180 === 0){
    var enemy = createSprite(random(20, width-20), 0)
    enemy.addImage(enemy2Img)

    enemy.velocityY = random(2,7);

   enemy.lifetime = height/enemy.velocityY

    enemy2Group.add(enemy)
    enemy.scale = 0.3;
    
    enemy.setCollider("circle",0,0,180)
  }
}

function spawnPotion(){
  if(frameCount%195 === 0){
    var potion = createSprite(random(20, width-20), 0)
    potion.addImage(potionImg)

    potion.velocityY = random(2,7);

   potion.lifetime = height/potion.velocityY

    potionGroup.add(potion)
    
    potion.scale = 0.2;

}

}


}
