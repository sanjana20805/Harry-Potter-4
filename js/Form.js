class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(backgroundImage)
    this.title.html("Harry Potter World");
    this.title.position(displayWidth/2 - 280, 0);
    this.title.style("color","#B99B03")
    this.title.style("font-size","42px")
    this.title.style("font-weight","bold")
    this.title.style("font-family","sans-serif")


    this.input.position(displayWidth/2 - 210 , displayHeight/2 - 80);
    this.input.style("width", '200px');
    this.input.style("height", '30px');
    this.input.style("background-color", "#B99B03")

    this.button.position(displayWidth/2 - 150, displayHeight/2);
    this.button.style("background-color", "#0B1E3A")
    this.button.style("width", '100px');
    this.button.style("height", '50px');
    this.button.style("border-radius", '20px');
    this.button.style("border-outline", 'none');
    this.button.style("font-size", '22px');
    this.button.style("color","#B99B03")
    
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      name = this.input.value()

      gameState = "play"
      
      
    });

    

  }
}
