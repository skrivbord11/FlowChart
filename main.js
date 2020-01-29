
class EventHandler {
    constructor(canvas) {
        this.registerd = [];
        canvas.onMouseDown = function(mouseX, mouseY, button) {
              console.log(mouseX, mouseY)
            for (item in this.registerd) {
                if(this.isInside(mouseX, mouseY, item)){
                    item.x += 10;
                }
            }
        }
    }
    isInside(mouseX, mouseY, item) {
        const xBound = mouseX >= item.x && mouseX <= item.x + item.width;
        const yBound = mouseY >= item.y && mouseY <= item.y + item.width; 
      
        return xBound && yBound;
    }

    register(ref) {
        this.registerd.push(ref);
    }

};



async function main() {
    let canvas = await createCanvas();
    canvas.clear()
    canvas.fillText('Hello World! This is html canvas library ' + canvas.getVersion(), 20, 20);
    let roundedrect = canvas.strokeRoundedRect(750, 150, 75, 75, 25);
    let eventHandler = new EventHandler(canvas);
    
    // registerMouseEvent(object);
    // roundedrect.onMouseDown = function() {
    //     console.log("APPPAAA");   
    //     for each mosedownevent(){
    //         if (x == mosedownevent.x) {
    //             mosedownevent.callback();
    //         }

    //     }
    // }
    var animationLayer = canvas.createLayer('animation', 10, function(frameDuration, totalDuration, frameNumber) {
		this.clear();

		// this.firstFrame is true when rendering the first frame, you can use this to setup the scene
		if (this.firstFrame) {
			// this.scene is an empty object that can be used as a namespace for your scene objects
			// using renderToCanvas that allows rendering something into an image and later draw it
			// on the canvas with drawImage() method
			this.scene.ball = this.renderToCanvas(50, 50, 0, function() {
				// build a proxy to the image being loaded
				this.beginRadialGradient(0, 0, 10, 0, 0, 25, {
					0.0: 'rgba(0, 255, 0, 0)',
					1.0: 'rgba(0, 255, 0, 0.5)'
				});
				this.fillCircle(0, 0, 25);
 
				this.endGradient();
            
				this.fillColor('#FFFFFF');
				this.font('10px Courier');
				this.fillText("loading", 25, 25, ALIGN.CENTER.MIDDLE);
			});

			var self = this;

			// imitate some loading time

				// load a ball image
				self.loadImage('assets/ball.jpg', function(image) {
					// image has loaded, replace the ball proxy canvas with it
					self.scene.ball = image;
				},
				function(image) {
					alert('Error: Loading image "' + image.src + '" failed');
				});

		}

		// draw the ball image to mouse coordinates, centered and using rotation as a function of mouse x position
		// Kanske skicka parent här för att få events att funka normalt
        this.drawImage(this.scene.ball, , 50,50, ALIGN.CENTER.MIDDLE, 200);
        this.scene.ball.real_x = 100;
        this.scene.ball.real_y = 100;
        //console.log(this.scene);
        //eventHandler.register({width: 50, height: 50, x: 100, y: 100})
	});
    
}



function createCanvas() {
     return new Promise((accept, reject) => {
        new Canvas('canvas', 0, function() {
                accept(this);
        });
     });
} 




(function() {
   main();
})();