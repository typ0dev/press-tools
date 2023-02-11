import watermark from "../img/watermark.png"
import birthday_text_shade from "../img/birthday_text_shade.png"
import birthday_title from "../img/birthday_title.png"
import stipcom_frame from "../img/stipcom_frame.png"
import short_standart_shade from "../img/short_standart_shade.png"
import wide_standart_shade from "../img/wide_standart_shade.png"

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
}