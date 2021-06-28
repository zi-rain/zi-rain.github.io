const sharp = require("sharp");

sharp("../images/20210405.png")
  .resize({ width: 250, height: 350 })
  .toFile("../images/Output1.png");

/*
sharp("../images/0526呱.png")
  .greyscale()  //.grayscale()
  .toFile("../images/Output2.png");

sharp("../images/20210405.png")
  .rotate(-30)
  .toFile("../images/Output3.png");

sharp("../images/ice.png")
  .blur(50)
  .toFile("../images/Output4.png");

sharp("../images/0514呱.png")
  .tint({r:92, g:158, b:173})
  .toFile("../images/Output5.png");

sharp("../images/ice.png")
  .negate()
  .toFile("../images/Output6.png");

sharp("../images/test.png")
  .negate()
  .toFile("../images/Output7.png");
  
sharp("../images/0514呱.png")
  .extractChannel('red')
  .toFile('../images/Output8.png', function(err, info) {
     info.channels === 0
    
   });

sharp("../images/0514呱.png")
  .extractChannel('green')
  .toFile('../images/Output9.png', function(err, info) {
     info.channels === 1
    
   });

sharp("../images/0514呱.png")
  .extractChannel('blue')
  .toFile('../images/Output10.png', function(err, info) {
     info.channels === 2
    
   });

sharp("../images/Output3.png")
.resize({ width: 250, height: 350 })
  .toFile("../images/Output11.png");

sharp("../images/20210405.png")
  .extractChannel('red')
  .toFile('../images/Output12.png', function(err, info) {
     info.channels === 0
    
   });

sharp("../images/20210405.png")
   .extractChannel('green')
   .toFile('../images/Output13.png', function(err, info) {
      info.channels === 1
     
    });

sharp("../images/20210405.png")
    .extractChannel('blue')
    .toFile('../images/Output14.png', function(err, info) {
       info.channels === 2
      
     });
  */