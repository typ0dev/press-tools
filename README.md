<br/>
<br/>
<div align="middle">
  <a href="https://xl-soft.github.io/press-tools" target="_blank" rel="noreferrer">
    <img src="./src/assets/img/light-logo-collab.png" height=50>
  </a>
</div>

#

<h3 align="center" style="margin-bottom: 15px;">
    <strong>Удобный инструмент созданный специально для Профбюро Университетского Колледжа и его пресс-центра</strong> 
</h3>

<p align="right">
    <img src="./src/assets/img/sveltekit.svg" />
</p>

__В данный момент включает в себя следующие инструменты:__
* <a href="#generate">Генератор картинок</a>
* <a href="#neurogenerate">Нейроновости</a>
* <a href="#random">Рандомайзер</a>
* <a href="#randomlove">Любовный рандомайзер</a>

__Полезное:__
* <a href="#screenshots">Скриншоты</a>

<h2 id="generate">Генератор картинок</h2>

Генерирует картинку по одному из шаблонов

__Шаблоны:__
| **name**                        | **value**     | **width** | **height** | **id** | **noimage** |
|---------------------------------|---------------|-----------|------------|--------|-------------|
| **Стандарт \(горизонтальный\)** | standarthoriz | 2000      | 1500       | 0      |             |
| **Стандарт \(вертикальный\)**   | standartvert  | 1500      | 2000       | 1      |             |
| **Стандарт \(квадратный\)**     | standartsq    | 1500      | 1500       | 2      |             |
| **День рождения**               | birthday      | 1500      | 1500       | 3      |             |
| **Стипком**                     | stipcom       | 1920      | 325        | 4      | true        |

__Результат генерации:__
<img src="https://sun9-53.userapi.com/impg/uczAXJ6Amdg5nWS4Jlgar2XOhntcNFZ9CaLSkg/Roi-jNVgUQs.jpg?size=2000x1500&quality=95&sign=4da989a9096d04346a9b27f14efa76f9&type=album" width=400>

<h2 id="neurogenerate">Нейроновости</h2>

Генерирует похожий на нейросетевой пост и картинку к нему

__Шаги генерации:__
* Генерация текста
* Слепок MD5 из сгенерированного текста
* Псевдорандомная генерация на canvas


__Результат генерации:__
``` json
{
  "hash": "67f225c4f587f44832669251179301f6",
  "total": 32.402034900000004,
  "bg": "LINEAR",
  "image": {
    "solid": {
      "color": "#67f225"
    },
    "radial": {
      "x1": 337.98640000000006,
      "y1": 249.37839,
      "r1": 328.51431,
      "x2": 291.39612,
      "y2": 245.38249,
      "r2": 111.46244,
      "g1": 0.20664453,
      "g1color": "#5227f6",
      "g2": 0.11314625,
      "g2color": "#67f225",
      "x12": 630.76765,
      "y12": 661.7694399999999,
      "r12": 206.64452999999997,
      "x22": 218.26537999999996,
      "y22": 429.63754000000006,
      "r22": 237.64632,
      "g12": 0.11146244000000001,
      "g12color": "#257f62",
      "g22": 0.14213255,
      "g22color": "#67f225"
    },
    "linear": {
      "x1": 337.98640000000006,
      "y1": 249.37839,
      "x2": 291.39612,
      "y2": 245.38249,
      "g1": 0.20664453,
      "g1color": "#5227f6",
      "g2": 0.42412311999999996,
      "g2color": "#67f225",
      "x12": 630.76765,
      "y12": 661.7694399999999,
      "x22": 218.26537999999996,
      "y22": 429.63754000000006,
      "g12": 0.17824987000000003,
      "g12color": "#257f62",
      "g22": 0.17824987000000003,
      "g22color": "#67f225"
    },
    "spiral": {
      "l1": 3.1947306,
      "l1color": "#f92664",
      "cx1": 2903.790456718622,
      "cy2": 931.2023799344081,
      "ir1": 58.57107499999999,
      "or1": 1500,
      "t1": 41.328905999999996,
      "a1": 6.1993358999999995,
      "l2": 8.4824624,
      "l2color": "#414411",
      "cx2": 3914.2089295440865,
      "ir2": 66.11812,
      "or2": 1500,
      "t2": 65.702862,
      "a2": 5.347496100000001,
      "l3": 2.262925,
      "l3color": "#822ff2",
      "cx3": 764.8065299428943,
      "cy3": 1920.2526769320307,
      "ir3": 66.11812,
      "or3": 1500,
      "t3": 26.447248000000002,
      "a3": 5.347496100000001
    }
  }
}
```

__Веса символов:__
``` json
{
    "data": [
        { "symbol": "1", "weight": 1.0112323 },
        { "symbol": "2", "weight": 2.0664453 },
        { "symbol": "3", "weight": 1.1146244 },
        { "symbol": "4", "weight": 1.1314625 },
        { "symbol": "5", "weight": 1.1714215 },
        { "symbol": "6", "weight": 4.2412312 },
        { "symbol": "7", "weight": 3.2851431 },
        { "symbol": "8", "weight": 1.3223624 },
        { "symbol": "9", "weight": 2.3764632 },
        { "symbol": "0", "weight": 1.4213255 },
        { "symbol": "a", "weight": 1.4623524 },
        { "symbol": "b", "weight": 2.5162343 },
        { "symbol": "c", "weight": 1.5973653 },
        { "symbol": "d", "weight": 1.6784354 },
        { "symbol": "e", "weight": 2.7488788 },
        { "symbol": "f", "weight": 1.7824987 }
    ]
}
```

<h2 id="random">Рандомайзер</h2>

Генерирует рандомное число по заданным параметрам с красивой анимацией<br/>
Очень удобен для проведения розыгрышей<br/>

__Результат генерации:__
<img src="https://sun9-46.userapi.com/impg/cNTDEWdE16LsEwy3FQcWn-AdHscyQMH7NxKFVQ/fGdxM5NeYpY.jpg?size=1920x940&quality=96&sign=75933f206827050e86c0187bd431e0e8&type=album" width=400>

<h2 id="randomlove">Любовный рандомайзер</h2>

Генерирует рандомное число по заданным параметрам с красивой анимацией<br/>
Очень удобен для проведения розыгрышей<br/>
Приурочен к Дню Святого Валентина, но так же может использоватся на чем то связанном с лайками<br/>

__Результат генерации:__
<img src="https://sun9-37.userapi.com/impg/apDarFjCiRBz_SX5Oa2wTYv5_BkcFrXZc9Im7w/9a68tIwmZuw.jpg?size=1920x943&quality=96&sign=676ee71c7806cd0c0d1d86ea09ea3a30&type=album" width=400>

<h2 id="screenshots">Скриншоты</h2>

<p float="left" align="middle">
    <img src="https://sun9-76.userapi.com/impg/dLpTx1NL6Re9vHnEOKZN9EXFenW_XNKrItz7bQ/bfuHpDK07CI.jpg?size=541x1080&quality=95&sign=e1547a8bb4ba634ae235dac5820145d1&type=album" width=200>
    <img src="https://sun9-24.userapi.com/impg/0sU7BfweJ9NwTS8jKZ3MujhkZj_ltHKgNt13FQ/nmH5XJzwVTY.jpg?size=561x1080&quality=95&sign=58d5199953b4501b2b3cc5fdf8231c6e&type=album" width=200>
    <img src="https://sun9-37.userapi.com/impg/s9kZLBNdL5UUhzx1RkxQDeBrRbDtwGsXU27XWA/QyMJfNvJVAA.jpg?size=795x1080&quality=95&sign=941f797dc6d8f88fdd49cf970fb2d1e0&type=album" width=200>
    <img src="https://sun9-69.userapi.com/impg/UGy-wpoSs0HFE1Tl0Bt76LmHhJ60W-tcdsohUw/ldCygpYdP4A.jpg?size=520x1080&quality=95&sign=5258f5b92750a47cdceae83952397c5d&type=album" width=200>
    <img src="https://sun9-13.userapi.com/impg/OK4yp_NnccePN4DsIk4e69xoqUlP7BQwyHBwww/g-i9hwdxuiQ.jpg?size=596x1080&quality=95&sign=7dcc3b2a4df7c21d72535d495831d641&type=album" width=200>
    <img src="https://sun9-53.userapi.com/impg/Sjj3gRMnsGig7yhqeRdZ39vpQOGn8zsQ3nIaOw/hsbMgDmrNAY.jpg?size=542x1080&quality=95&sign=b22116bb92aec723e9a4898b4910de76&type=album" width=200>
</p>

<div align="center" style="opacity: 0.2; margin-top:50px">
  <a href="https://vk.com/xlsoftware" target="_blank" rel="noreferrer">
    <img src="./src/assets/img/powered.svg" width=150>
  </a>
</div>
