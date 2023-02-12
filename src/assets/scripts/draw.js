import watermark from "../img/watermark.png"
import birthday_text_shade from "../img/birthday_text_shade.png"
import birthday_title from "../img/birthday_title.png"
import stipcom_frame from "../img/stipcom_frame.png"
import short_standart_shade from "../img/short_standart_shade.png"
import wide_standart_shade from "../img/wide_standart_shade.png"
import weights from "../../routes/neurogenerator/weights.json"
import md5 from 'md5';


function getWeight(symbol) {
    let obj = weights.data.find(o => o.symbol === String(symbol));
    return obj.weight
}

function getFullWeight(hash) {
    let weight = 0
    hash.forEach(element => {
        weight = weight + getWeight(element)
    });
    return weight / 2
}

function between(min, x, max) {
    return x >= min && x <= max;
}

function drawSpiral(ctx, centerx, centery, innerRadius, outerRadius, turns=2, startAngle=0){
    ctx.save();
    ctx.lineCap = 'round'
    ctx.translate(centerx, centery);
    ctx.rotate(startAngle);
    let r = innerRadius;
    let turns_ = Math.floor(turns*4)/4;
    let dr = (outerRadius - innerRadius)/turns_/4;
    let cx = 0, cy = 0; 
    let directionx = 0, directiony = -1;
    
    ctx.beginPath();
    let angle=0;
    for(; angle < turns_*2*Math.PI; angle += Math.PI/2){
        //draw a quarter arc around the center point (x, cy)
        ctx.arc( cx, cy, r, angle, angle + Math.PI/2);
        
        //move the center point and increase the radius so we can draw a bigger arc
        cx += directionx*dr;
        cy += directiony*dr;
        r+= dr;
        
        //rotate direction vector by 90 degrees
        [directionx, directiony] = [ - directiony, directionx ];
    }
    //draw the remainder of the last quarter turn
    ctx.arc( cx, cy, r, angle, angle + 2*Math.PI*( turns - turns_ ))
    ctx.stroke();
    ctx.restore();
}

export let draw = {
    birthday: (ctx, constructor, canvas) => {
        let image = new Image(); image.src = constructor.image
        image.onload = () => { 
        ctx.drawImage(
            image, 
            constructor.pos.x, 
            constructor.pos.y, 
            image.width * (constructor.pos.zoom / 100), 
            image.height * (constructor.pos.zoom / 100)
        )
        let watermark_img = new Image(); watermark_img.src = watermark
        watermark_img.onload = () => ctx.drawImage(watermark_img, 0, 0)
        ctx.fillStyle = "#ffffff"
        let birthday_text_shade_img = new Image(); birthday_text_shade_img.src = birthday_text_shade
        birthday_text_shade_img.onload = () => {
            ctx.drawImage(birthday_text_shade_img, 0, constructor.height - 837)
            ctx.font = "64px Dela Gothic One";
            ctx.fillText(constructor.lines[1].value, 64, 1211+93);
            ctx.font = "96px Dela Gothic One";
            ctx.fillText(constructor.lines[0].value, 64, 1285+139);
        }
        let birthday_title_img = new Image(); birthday_title_img.src = birthday_title
        birthday_title_img.onload = () => ctx.drawImage(birthday_title_img, 374, 87)
    }},
    stipcom: (ctx, constructor, canvas) => {
        let stipcom_frame_img = new Image(); stipcom_frame_img.src = stipcom_frame
        ctx.fillStyle = "#ffffff"
        stipcom_frame_img.onload = () => { 
            ctx.drawImage(stipcom_frame_img, 0, 0)
            ctx.font = "40px Dela Gothic One";
            ctx.textAlign = "right"
            ctx.fillText(constructor.lines[0].value, 1850, 212+45);
        }
        
    },
    standartwide: (ctx, constructor, canvas) => {
        let image = new Image(); image.src = constructor.image
        image.onload = () => { 
        ctx.drawImage(
            image, 
            constructor.pos.x, 
            constructor.pos.y, 
            image.width * (constructor.pos.zoom / 100), 
            image.height * (constructor.pos.zoom / 100)
        )
        let wide_standart_shade_img = new Image(); wide_standart_shade_img.src = wide_standart_shade
        wide_standart_shade_img.onload = () => {
            ctx.drawImage(wide_standart_shade_img, 0, 0)
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.font = "96px Dela Gothic One";
            ctx.fillText(constructor.lines[0].value, canvas.width - 60, 15+139);
            ctx.font = "64px Dela Gothic One";
            ctx.fillText(constructor.lines[1].value, canvas.width - 60, 125+93);
        }
    }},
    standart: (ctx, constructor, canvas) => {
        let image = new Image(); image.src = constructor.image
        image.onload = () => { 
        ctx.drawImage(
            image, 
            constructor.pos.x, 
            constructor.pos.y, 
            image.width * (constructor.pos.zoom / 100), 
            image.height * (constructor.pos.zoom / 100)
        )
        let short_standart_shade_img = new Image(); short_standart_shade_img.src = short_standart_shade
        short_standart_shade_img.onload = () => {
            ctx.drawImage(short_standart_shade_img, 0, 0)
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.font = "96px Dela Gothic One";
            ctx.fillText(constructor.lines[0].value, canvas.width - 60, 15+139);
            ctx.font = "64px Dela Gothic One";
            ctx.fillText(constructor.lines[1].value, canvas.width - 60, 125+93);
        }
    }},
    standartshell: (ctx, constructor, canvas) => {
        let short_standart_shade_img = new Image(); short_standart_shade_img.src = short_standart_shade
        short_standart_shade_img.onload = () => {
            ctx.drawImage(short_standart_shade_img, 0, 0)
            ctx.textAlign = "right"
            ctx.fillStyle = "#ffffff"
            ctx.font = "96px Dela Gothic One";
            ctx.fillText(constructor.lines[0].value, canvas.width - 60, 15+139);
            ctx.font = "64px Dela Gothic One";
            ctx.fillText(constructor.lines[1].value, canvas.width - 60, 125+93);
        }
    },
    randomImage: (canvas, string, constructor) => {
        let ctx = canvas.getContext("2d")
        // ---------------------------------
        //     
        // hkj23hb2fb732ab6079a10fea61d078b
        //
        ctx.fillStyle = 'white'
        ctx.clearRect(0,0, canvas.width, canvas.height);
        let hash = md5(string).split('')
        let totalWeight = getFullWeight(hash)
        console.log(totalWeight)
        // BACKGROUND (SOLID [16.1797168-23.1280983], RADIAL[23.1280984-24.8323782], LINEAR[24.8323783-28.5199792])
        if (between(16.1797168, totalWeight, 30.1280983) == true) { // SOLID BACKGROUND
            ctx.fillStyle = `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        if (between(30.1280984, totalWeight, 31.8323782) == true) { // RADIAL GRADIENT BACKGROUND
            var x1 = (getWeight(hash[6]) + getWeight(hash[8])) * 100; 
            var y1 = (getWeight(hash[9]) + getWeight(hash[10])) * 100; 
            var r1 = getWeight(hash[11]) * 100;  

            var x2 = (getWeight(hash[12]) + getWeight(hash[13])) * 100; 
            var y2 = (getWeight(hash[14]) + getWeight(hash[15])) * 100;  
            var r2 = getWeight(hash[16]) * 100; 

            var radialGradient1 = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);

            radialGradient1.addColorStop(getWeight(hash[17]) * 0.1, `#${hash[5]}${hash[3]}${hash[4]}${hash[1]}${hash[2]}${hash[0]}`);
            radialGradient1.addColorStop(getWeight(hash[14]) * 0.1, `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`);

            ctx.fillStyle = radialGradient1;
            ctx.fillRect(0,0, canvas.width, canvas.height);

            x1 = (getWeight(hash[17]) + getWeight(hash[18])) * 100;  
            y1 = (getWeight(hash[19]) + getWeight(hash[20])) * 100;  
            r1 = getWeight(hash[21]) * 100;  

            x2 = (getWeight(hash[22]) + getWeight(hash[23])) * 100; 
            y2 = (getWeight(hash[24]) + getWeight(hash[25])) * 100; 
            r2 = getWeight(hash[26]) * 100;

            var radialGradient2 = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);

            radialGradient2.addColorStop(getWeight(hash[27]) * 0.1, `#${hash[4]}${hash[5]}${hash[1]}${hash[2]}${hash[0]}${hash[3]}`);
            radialGradient2.addColorStop(getWeight(hash[28]) * 0.1, `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`);

            ctx.fillStyle = radialGradient2;
            ctx.fillRect(0,0, canvas.width, canvas.height);
        }
        if (between(31.8323783, totalWeight, 67.8596992) == true) { // LINEAR GRADIENT BACKGROUND
            var x1 = (getWeight(hash[6]) + getWeight(hash[8])) * 100;
            var y1 = (getWeight(hash[9]) + getWeight(hash[10])) * 100; 

            var x2 = (getWeight(hash[12]) + getWeight(hash[13])) * 100;
            var y2 = (getWeight(hash[14]) + getWeight(hash[15])) * 100;

            var linearGradient1 = ctx.createLinearGradient(x1, y1, x2, y2);

            linearGradient1.addColorStop(getWeight(hash[17]) * 0.1, `#${hash[5]}${hash[3]}${hash[4]}${hash[1]}${hash[2]}${hash[0]}`);
            linearGradient1.addColorStop(getWeight(hash[19]) * 0.1, `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`);

            ctx.fillStyle = linearGradient1;
            ctx.fillRect(0,0, canvas.width, canvas.height);

            x1 = (getWeight(hash[17]) + getWeight(hash[18])) * 100;  
            y1 = (getWeight(hash[19]) + getWeight(hash[20])) * 100;  

            x2 = (getWeight(hash[22]) + getWeight(hash[23])) * 100; 
            y2 = (getWeight(hash[24]) + getWeight(hash[25])) * 100; 

            var linearGradient2 = ctx.createLinearGradient(x1, y1, x2, y2);

            linearGradient2.addColorStop(getWeight(hash[2]) * 0.1, `#${hash[4]}${hash[5]}${hash[1]}${hash[2]}${hash[0]}${hash[3]}`);
            linearGradient2.addColorStop(getWeight(hash[12]) * 0.1, `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`);

            ctx.fillStyle = linearGradient2;
            ctx.fillRect(0,0, canvas.width, canvas.height);
        }

        ctx.lineWidth = hash[6] * 2
        ctx.strokeStyle = `#${hash[12]}${hash[20]}${hash[3]}${hash[31]}${hash[31]}${hash[14]}`
        drawSpiral(ctx, 
            canvas.width * (getWeight(hash[12])*getWeight(hash[11])) * (getWeight(hash[10]) / 4), 
            canvas.height * (getWeight(hash[6])*getWeight(hash[8])) * (getWeight(hash[9]) / 6), 
            getWeight(hash[5])*50, 
            canvas.width, 
            getWeight(hash[4])*20, 
            getWeight(hash[3])*3
        )

        ctx.lineWidth = hash[19] * 2
        ctx.strokeStyle = `#${hash[14]}${hash[24]}${hash[14]}${hash[14]}${hash[24]}${hash[24]}`
        drawSpiral(ctx, 
            canvas.width * (getWeight(hash[30])*getWeight(hash[2])) * (getWeight(hash[1]) / 4), 
            canvas.height * (getWeight(hash[12])*getWeight(hash[17])) * (getWeight(hash[24]) / 6), 
            getWeight(hash[15])*50, 
            canvas.width, 
            getWeight(hash[1])*20, 
            getWeight(hash[2])*3
        )

        ctx.lineWidth = hash[13] * 2
        ctx.strokeStyle = `#${hash[15]}${hash[21]}${hash[4]}${hash[12]}${hash[2]}${hash[21]}`
        drawSpiral(ctx, 
            canvas.width * (getWeight(hash[29])*getWeight(hash[12])) * (getWeight(hash[14]) / 4), 
            canvas.height * (getWeight(hash[1])*getWeight(hash[7])) * (getWeight(hash[4]) / 6), 
            getWeight(hash[10])*50, 
            canvas.width, 
            getWeight(hash[10])*20, 
            getWeight(hash[8])*3
        )

        draw.standartshell(ctx, constructor, canvas)
    },
}