function brightnessFilter(canvasData,value){
    var changeValue = value * 2.55;
    var d = canvasData.data;
    for (var i = 0; i < d.length; i += 4) {
        d[i] += changeValue; //red
        d[i + 1] += changeValue; //green
        d[i + 2] += changeValue; //blue
    }
    return canvasData;
}
function contrastFilter(canvasData,value){
    var changeValue = value * 2.55;
    var d = canvasData.data;
    for (var i = 0; i < d.length; i += 4) {
        if(d[i] > 127){
            d[i] += changeValue
        }
        else{
            d[i] -= changeValue
        }
        if(d[i + 1] > 127){
            d[i + 1] += changeValue
        }
        else{
            d[i + 1] -= changeValue
        }
        if(d[i + 2] > 127){
            d[i + 2] += changeValue
        }
        else{
            d[i + 2] -= changeValue
        }
    }
    return canvasData;
}
//  1.灰度效果
//计算公式 .299 * r + .587 * g + .114 * b;
// calculate gray scale value
function gray(canvasData)
{
    for ( var x = 0; x < canvasData.width; x++) {
        for ( var y = 0; y < canvasData.height; y++) {

        // Index of the pixel in the array
        var idx = (x + y * canvasData.width) * 4;
        var r = canvasData.data[idx + 0];
        var g = canvasData.data[idx + 1];
        var b = canvasData.data[idx + 2];
        var gray = .299 * r + .587 * g + .114 * b;
                
            // assign gray scale value
            canvasData.data[idx + 0] = gray; // Red channel
            canvasData.data[idx + 1] = gray; // Green channel
            canvasData.data[idx + 2] = gray; // Blue channel
            canvasData.data[idx + 3] = 255; // Alpha channel
            // add black border
            if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
            {
            canvasData.data[idx + 0] = 0;
            canvasData.data[idx + 1] = 0;
            canvasData.data[idx + 2] = 0;
            }
        }
    }
    return canvasData;
}
//2.怀旧效果   
function old(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];

   var dr=.393*r+.769*g+.189*b;
   var dg=.349*r+.686*g+.168*b;
   var db=.272*r+.534*g+.131*b;
   var scale=Math.random()*0.5 + 0.5;
   var fr=scale*dr+(1-scale)*r;
   scale=Math.random()*0.5 + 0.5;
   var fg=scale*dg+(1-scale)*g;
   scale=Math.random()*0.5 + 0.5;
   var fb=scale*db+(1-scale)*b;
   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel 
   // add black border
   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }
 }
}
return canvasData;
}
//3 底片效果
//算法原理：将当前像素点的RGB值分别与255之差后的值作为当前点的RGB值，即
//R = 255 – R；G = 255 – G；B = 255 – B；
function negatives(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];
   var fr=255-r;
   var fg=255-g;
   var fb=255-b;
   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel 
   // add black border
   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }
 }
}
return canvasData;
}
//4 黑白效果
//求RGB平均值Avg ＝ (R + G + B) / 3，如果Avg >= 100，则新的颜色值为R＝G＝B＝255；
//如果Avg < 100，则新的颜色值为R＝G＝B＝0；255就是白色，0就是黑色；
//至于为什么用100作比较，这是一个经验值吧，设置为128也可以，可以根据效果来调整。
function black(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];
   if((r+g+b)>=300)
   {
   	fr=fg=fb=255;
   }
   else
   {
   	fr=fg=fb=0;
   }
   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel
   // add black border
   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }
 }
}
return canvasData;
}
//5 浮雕效果
//用相邻点的RGB值减去当前点的RGB值并加上128作为新的RGB值。
//由于图片中相邻点的颜色值是比较接近的，因此这样的算法处理之后，只有颜色的边沿区域，
//也就是相邻颜色差异较大的部分的结果才会比较明显，而其他平滑区域则值都接近128左右，
//也就是灰色，这样就具有了浮雕效果。
//在实际的效果中，这样处理后，有些区域可能还是会有”彩色”的一些点或者条状痕迹，所以最好再对新的RGB值做一个灰度处理。
function cameo(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];
   var idx2 = (x + (y+1) * canvasData.width) * 4;
   var r2 = canvasData.data[idx2 + 0];
   var g2 = canvasData.data[idx2 + 1];
   var b2 = canvasData.data[idx2 + 2];
   var fr=r2-r+128;
   var fg=g2-g+128;
   var fb=b2-b+128;
   var gray = .299 * fr + .587 * fg + .114 * fb;
   canvasData.data[idx + 0] = gray; // Red channel
   canvasData.data[idx + 1] = gray; // Green channel
   canvasData.data[idx + 2] = gray; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel
   // add black border
   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }
 }
}
return canvasData;
}
//6.连环画效果
//连环画的效果与图像灰度化后的效果相似,它们都是灰度图,但连环画增大了图像的对比度,使整体明暗效果更强.
//算法:
//R = |g – b + g + r| * r / 256
//G = |b – g + b + r| * r / 256;
//B = |b – g + b + r| * g / 256;
function comic(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];

    var fr=Math.abs((g-r+g+b))*r/256;
    var fg=Math.abs((b-r+g+b))*r/256;
    var fb=Math.abs((b-r+g+b))*g/256; 
    //var fr=(g-r+g+b)*r/256;
    //var fg=(b-r+g+b)*r/256;
    //var fb=(b-r+g+b)*g/256;  
   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel
            // add black border
 if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
 {
   canvasData.data[idx + 0] = 0;
   canvasData.data[idx + 1] = 0;
   canvasData.data[idx + 2] = 0;
 }

 }
}
return canvasData;
}
//7.熔铸效果
//熔铸算法
//r = r*128/(g+b +1);
//g = g*128/(r+b +1);
//b = b*128/(g+r +1);
function casting(canvasData)
{
    for ( var x = 0; x < canvasData.width; x++) {
        for ( var y = 0; y < canvasData.height; y++) {
           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = canvasData.data[idx + 0];
           var g = canvasData.data[idx + 1];
           var b = canvasData.data[idx + 2];
   
            var fr= r*128/(g+b +1);
            var fg=g*128/(r+b +1);
            var fb=b*128/(g+r +1); 
       
           //assign gray scale value
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel */
           
           // add black border
           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }
         }
     }
     return canvasData;
 }   
//8.冰冻效果
//冰冻算法
//r = (r-g-b)*3/2;
//g = (g-r-b)*3/2;
//b = (b-g-r)*3/2;         
function frozen(canvasData)
{
     for ( var x = 0; x < canvasData.width; x++) {
         for ( var y = 0; y < canvasData.height; y++) {

           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = canvasData.data[idx + 0];
           var g = canvasData.data[idx + 1];
           var b = canvasData.data[idx + 2];

            var fr=(r-g-b)*3/2;
            var fg=(g-r-b)*3/2;
            var fb=(b-g-r)*3/2;
       
           //assign gray scale value
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel 
           // add black border
           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }
   
         }
     }
     return canvasData;
 }  
//9 扩散（毛玻璃）
//原理：用当前点四周一定范围内任意一点的颜色来替代当前点颜色，最常用的是随机的采用相邻点进行替代。
function spread(canvasData)
{
     for ( var x = 0; x < canvasData.width; x++) {
         for ( var y = 0; y < canvasData.height; y++) {

           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = canvasData.data[idx + 0];
           var g = canvasData.data[idx + 1];
           var b = canvasData.data[idx + 2];

           var rand=Math.floor(Math.random()*10)%3;
           var idx2 = (x+rand + (y+rand) * canvasData.width) * 4;
           var r2 = canvasData.data[idx2 + 0];
           var g2 = canvasData.data[idx2 + 1];
           var b2 = canvasData.data[idx2 + 2];
           var fr=r2;
           var fg=g2;
           var fb=b2;
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel  
           // add black border
           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }
           
   
         }
     }
     return canvasData;
 } 