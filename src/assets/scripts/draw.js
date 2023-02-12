import watermark from "../img/watermark.png";
import birthday_text_shade from "../img/birthday_text_shade.png";
import birthday_title from "../img/birthday_title.png";
import stipcom_frame from "../img/stipcom_frame.png";
import short_standart_shade from "../img/short_standart_shade.png";
import wide_standart_shade from "../img/wide_standart_shade.png";
import weights from "../../routes/neurogenerator/weights.json";
import md5 from "md5";

function getWeight(symbol) {
    let obj = weights.data.find((o) => o.symbol === String(symbol));
    return obj.weight;
}

function getFullWeight(hash) {
    let weight = 0;
    hash.forEach((element) => {
        weight = weight + getWeight(element);
    });
    return weight / 2;
}

function between(min, x, max) {
    return x >= min && x <= max;
}

export let draw = {
    birthday: (ctx, constructor, canvas) => {
        let image = new Image();
        image.src = constructor.image;
        image.onload = () => {
            ctx.drawImage(
                image,
                constructor.pos.x,
                constructor.pos.y,
                image.width * (constructor.pos.zoom / 100),
                image.height * (constructor.pos.zoom / 100)
            );
            let watermark_img = new Image();
            watermark_img.src = watermark;
            watermark_img.onload = () => ctx.drawImage(watermark_img, 0, 0);
            ctx.fillStyle = "#ffffff";
            let birthday_text_shade_img = new Image();
            birthday_text_shade_img.src = birthday_text_shade;
            birthday_text_shade_img.onload = () => {
                ctx.drawImage(
                    birthday_text_shade_img,
                    0,
                    constructor.height - 837
                );
                ctx.font = "64px Dela Gothic One";
                ctx.fillText(constructor.lines[1].value, 64, 1211 + 93);
                ctx.font = "96px Dela Gothic One";
                ctx.fillText(constructor.lines[0].value, 64, 1285 + 139);
            };
            let birthday_title_img = new Image();
            birthday_title_img.src = birthday_title;
            birthday_title_img.onload = () =>
                ctx.drawImage(birthday_title_img, 374, 87);
        };
    },
    stipcom: (ctx, constructor, canvas) => {
        let stipcom_frame_img = new Image();
        stipcom_frame_img.src = stipcom_frame;
        ctx.fillStyle = "#ffffff";
        stipcom_frame_img.onload = () => {
            ctx.drawImage(stipcom_frame_img, 0, 0);
            ctx.font = "40px Dela Gothic One";
            ctx.textAlign = "right";
            ctx.fillText(constructor.lines[0].value, 1850, 212 + 45);
        };
    },
    standartwide: (ctx, constructor, canvas) => {
        let image = new Image();
        image.src = constructor.image;
        image.onload = () => {
            ctx.drawImage(
                image,
                constructor.pos.x,
                constructor.pos.y,
                image.width * (constructor.pos.zoom / 100),
                image.height * (constructor.pos.zoom / 100)
            );
            let wide_standart_shade_img = new Image();
            wide_standart_shade_img.src = wide_standart_shade;
            wide_standart_shade_img.onload = () => {
                ctx.drawImage(wide_standart_shade_img, 0, 0);
                ctx.textAlign = "right";
                ctx.fillStyle = "#ffffff";
                ctx.font = "96px Dela Gothic One";
                ctx.fillText(
                    constructor.lines[0].value,
                    canvas.width - 60,
                    15 + 139
                );
                ctx.font = "64px Dela Gothic One";
                ctx.fillText(
                    constructor.lines[1].value,
                    canvas.width - 60,
                    125 + 93
                );
            };
        };
    },
    standart: (ctx, constructor, canvas) => {
        let image = new Image();
        image.src = constructor.image;
        image.onload = () => {
            ctx.drawImage(
                image,
                constructor.pos.x,
                constructor.pos.y,
                image.width * (constructor.pos.zoom / 100),
                image.height * (constructor.pos.zoom / 100)
            );
            let short_standart_shade_img = new Image();
            short_standart_shade_img.src = short_standart_shade;
            short_standart_shade_img.onload = () => {
                ctx.drawImage(short_standart_shade_img, 0, 0);
                ctx.textAlign = "right";
                ctx.fillStyle = "#ffffff";
                ctx.font = "96px Dela Gothic One";
                ctx.fillText(
                    constructor.lines[0].value,
                    canvas.width - 60,
                    15 + 139
                );
                ctx.font = "64px Dela Gothic One";
                ctx.fillText(
                    constructor.lines[1].value,
                    canvas.width - 60,
                    125 + 93
                );
            };
        };
    },
    standartshell: (ctx, constructor, canvas) => {
        let short_standart_shade_img = new Image();
        short_standart_shade_img.src = short_standart_shade;
        short_standart_shade_img.onload = () => {
            ctx.drawImage(short_standart_shade_img, 0, 0);
            ctx.textAlign = "right";
            ctx.fillStyle = "#ffffff";
            ctx.font = "96px Dela Gothic One";
            ctx.fillText(
                constructor.lines[0].value,
                canvas.width - 60,
                15 + 139
            );
            ctx.font = "64px Dela Gothic One";
            ctx.fillText(
                constructor.lines[1].value,
                canvas.width - 60,
                125 + 93
            );
        };
    },
    randomImage: (canvas, string, constructor) => {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let hash = md5(string).split("");

        let content = {
            hash: md5(string),
            total: getFullWeight(hash),
            bg: "",
            image: {
                solid: {
                    color: `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`,
                },
                radial: {
                    x1: (getWeight(hash[6]) + getWeight(hash[8])) * 100,
                    y1: (getWeight(hash[9]) + getWeight(hash[10])) * 100,
                    r1: getWeight(hash[11]) * 100,
                    x2: (getWeight(hash[12]) + getWeight(hash[13])) * 100,
                    y2: (getWeight(hash[14]) + getWeight(hash[15])) * 100,
                    r2: getWeight(hash[16]) * 100,
                    g1: getWeight(hash[17]) * 0.1,
                    g1color: `#${hash[5]}${hash[3]}${hash[4]}${hash[1]}${hash[2]}${hash[0]}`,
                    g2: getWeight(hash[14]) * 0.1,
                    g2color: `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`,
                    x12: (getWeight(hash[17]) + getWeight(hash[18])) * 100,
                    y12: (getWeight(hash[19]) + getWeight(hash[20])) * 100,
                    r12: getWeight(hash[21]) * 100,
                    x22: (getWeight(hash[22]) + getWeight(hash[23])) * 100,
                    y22: (getWeight(hash[24]) + getWeight(hash[25])) * 100,
                    r22: getWeight(hash[26]) * 100,
                    g12: getWeight(hash[27]) * 0.1,
                    g12color: `#${hash[4]}${hash[5]}${hash[1]}${hash[2]}${hash[0]}${hash[3]}`,
                    g22: getWeight(hash[28]) * 0.1,
                    g22color: `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`,
                },
                linear: {
                    x1: (getWeight(hash[6]) + getWeight(hash[8])) * 100,
                    y1: (getWeight(hash[9]) + getWeight(hash[10])) * 100,
                    x2: (getWeight(hash[12]) + getWeight(hash[13])) * 100,
                    y2: (getWeight(hash[14]) + getWeight(hash[15])) * 100,
                    g1: getWeight(hash[17]) * 0.1,
                    g1color: `#${hash[5]}${hash[3]}${hash[4]}${hash[1]}${hash[2]}${hash[0]}`,
                    g2: getWeight(hash[19]) * 0.1,
                    g2color: `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`,
                    x12: (getWeight(hash[17]) + getWeight(hash[18])) * 100,
                    y12: (getWeight(hash[19]) + getWeight(hash[20])) * 100,
                    x22: (getWeight(hash[22]) + getWeight(hash[23])) * 100,
                    y22: (getWeight(hash[24]) + getWeight(hash[25])) * 100,
                    g12: getWeight(hash[2]) * 0.1,
                    g12color: `#${hash[4]}${hash[5]}${hash[1]}${hash[2]}${hash[0]}${hash[3]}`,
                    g22: getWeight(hash[12]) * 0.1,
                    g22color: `#${hash[0]}${hash[1]}${hash[2]}${hash[3]}${hash[4]}${hash[5]}`,
                },
                spiral: {
                    l1: getWeight(hash[6]) * 2,
                    l1color: `#${hash[12]}${hash[20]}${hash[3]}${hash[31]}${hash[31]}${hash[14]}`,
                    cx1:
                        canvas.width *
                        (getWeight(hash[12]) * getWeight(hash[11])) *
                        (getWeight(hash[10]) / 4),
                    cy2:
                        canvas.height *
                        (getWeight(hash[6]) * getWeight(hash[8])) *
                        (getWeight(hash[9]) / 6),
                    ir1: getWeight(hash[5]) * 50,
                    or1: canvas.width,
                    t1: getWeight(hash[4]) * 20,
                    a1: getWeight(hash[3]) * 3,
                    l2: getWeight(hash[19]) * 2,
                    l2color: `#${hash[14]}${hash[24]}${hash[14]}${hash[14]}${hash[24]}${hash[24]}`,
                    cx2:
                        canvas.width *
                        (getWeight(hash[30]) * getWeight(hash[2])) *
                        (getWeight(hash[1]) / 4),
                    cy2:
                        canvas.height *
                        (getWeight(hash[12]) * getWeight(hash[17])) *
                        (getWeight(hash[24]) / 6),
                    ir2: getWeight(hash[15]) * 50,
                    or2: canvas.width,
                    t2: getWeight(hash[1]) * 20,
                    a2: getWeight(hash[2]) * 3,
                    l3: getWeight(hash[13]) * 2,
                    l3color: `#${hash[15]}${hash[21]}${hash[4]}${hash[12]}${hash[2]}${hash[21]}`,
                    cx3:
                        canvas.width *
                        (getWeight(hash[29]) * getWeight(hash[12])) *
                        (getWeight(hash[14]) / 4),
                    cy3:
                        canvas.height *
                        (getWeight(hash[1]) * getWeight(hash[7])) *
                        (getWeight(hash[4]) / 6),
                    ir3: getWeight(hash[10]) * 50,
                    or3: canvas.width,
                    t3: getWeight(hash[10]) * 20,
                    a3: getWeight(hash[8]) * 3,
                    draw: (a, t, r, e, o, h = 2, l = 0) => {
                        a.save(),
                            (a.lineCap = "round"),
                            a.translate(t, r),
                            a.rotate(l);
                        let n = e,
                            M = Math.floor(4 * h) / 4,
                            P = (o - e) / M / 4,
                            i = 0,
                            s = 0,
                            I = 0,
                            c = -1;
                        a.beginPath();
                        let f = 0;
                        for (; f < 2 * M * Math.PI; f += Math.PI / 2)
                            a.arc(i, s, n, f, f + Math.PI / 2),
                                (i += I * P),
                                (s += c * P),
                                (n += P),
                                ([I, c] = [-c, I]);
                        a.arc(i, s, n, f, f + 2 * Math.PI * (h - M)),
                            a.stroke(),
                            a.restore();
                    },
                },
            },
            weights: weights.data,
        };
        console.log(content);
        // BACKGROUND (SOLID [16.1797168-23.1280983], RADIAL[23.1280984-24.8323782], LINEAR[24.8323783-28.5199792])
        if (between(16.1797168, content.total, 30.1280983) == true) {
            // SOLID BACKGROUND
            // FILLS FULL CANVAS
            ctx.fillStyle = content.image.solid;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            content.bg = "SOLID";
        }
        if (between(30.1280984, content.total, 31.8323782) == true) {
            // RADIAL GRADIENT BACKGROUND
            // 1 ITERATION RANDOM RADIAL GRADIENT
            let rg1 = ctx.createRadialGradient(
                content.image.radial.x1,
                content.image.radial.y1,
                content.image.radial.r1,
                content.image.radial.x2,
                content.image.radial.y2,
                content.image.radial.r2
            );
            rg1.addColorStop(
                content.image.radial.g1,
                content.image.radial.g1color
            );
            rg1.addColorStop(
                content.image.radial.g2,
                content.image.radial.g2color
            );
            ctx.fillStyle = rg1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 2 ITERATION RANDOM RADIAL GRADIENT
            let rg2 = ctx.createRadialGradient(
                content.image.radial.x12,
                content.image.radial.y12,
                content.image.radial.r12,
                content.image.radial.x22,
                content.image.radial.y22,
                content.image.radial.r22
            );
            rg2.addColorStop(
                content.image.radial.g12,
                content.image.radial.g12color
            );
            rg2.addColorStop(
                content.image.radial.g22,
                content.image.radial.g22color
            );
            ctx.fillStyle = rg2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            content.bg = "RADIAL";
        }
        if (between(31.8323783, content.total, 67.8596992) == true) {
            // LINEAR GRADIENT BACKGROUND
            // 1 ITERATION RANDOM LINEAR GRADIENT
            var lg1 = ctx.createLinearGradient(
                content.image.linear.x1,
                content.image.linear.y1,
                content.image.linear.x2,
                content.image.linear.y2
            );
            lg1.addColorStop(
                content.image.linear.g1,
                content.image.linear.g1color
            );
            lg1.addColorStop(
                content.image.linear.g2,
                content.image.linear.g2color
            );
            ctx.fillStyle = lg1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 2 ITERATION RANDOM LINEAR GRADIENT
            var lg2 = ctx.createLinearGradient(
                content.image.linear.x12,
                content.image.linear.y12,
                content.image.linear.x22,
                content.image.linear.y22
            );
            lg2.addColorStop(
                content.image.linear.g12,
                content.image.linear.g12color
            );
            lg2.addColorStop(
                content.image.linear.g22,
                content.image.linear.g22color
            );
            ctx.fillStyle = lg2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            content.bg = "LINEAR";
        }
        // 1 ITERATION RANDOM SPIRAL
        ctx.lineWidth = content.image.spiral.l1;
        ctx.strokeStyle = content.image.spiral.l1color;
        content.image.spiral.draw(
            ctx,
            content.image.spiral.cx1,
            content.image.spiral.cy1,
            content.image.spiral.ir1,
            content.image.spiral.or1,
            content.image.spiral.t1,
            content.image.spiral.a1
        );
        // 2 ITERATION RANDOM SPIRAL
        ctx.lineWidth = content.image.spiral.l2;
        ctx.strokeStyle = content.image.spiral.l2color;
        content.image.spiral.draw(
            ctx,
            content.image.spiral.cx2,
            content.image.spiral.cy2,
            content.image.spiral.ir2,
            content.image.spiral.or2,
            content.image.spiral.t2,
            content.image.spiral.a2
        );
        // 3 ITERATION RANDOM SPIRAL
        ctx.lineWidth = content.image.spiral.l3;
        ctx.strokeStyle = content.image.spiral.l3color;
        content.image.spiral.draw(
            ctx,
            content.image.spiral.cx3,
            content.image.spiral.cy3,
            content.image.spiral.ir3,
            content.image.spiral.or3,
            content.image.spiral.t3,
            content.image.spiral.a3
        );
        draw.standartshell(ctx, constructor, canvas);
    },
};
