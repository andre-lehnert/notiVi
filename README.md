# notiVi
Raspberry Pi + Node.js + TTS

## Download the code using Git

```bash
git clone https://github.com/andre-lehnert/notiVi.git
```

```bash
cd notiVi
```

## How to run the app (linux)

```bash
npm install
```
```bash
DEBUG=notiVi:* npm start
```

---------------------------------------

## REST-API

### GET /tss

### GET /stepper

---------------------------------------

## Documentation

### ExpressJS with Jade and Stylus

- http://expressjs.com/
- http://expressjs.com/en/guide/using-template-engines.html
- http://jade-lang.com/
- http://stylus-lang.com/

### ExpressJS Project Structure Generator

- https://www.npmjs.com/package/express-generator
- http://expressjs.com/en/starter/generator.html

```bash
npm install express-generator -g
```

```bash
express newProject --css stylus --git

.
├── app.js
├── .gitignore
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
│       └── style.styl
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

```

### Festival TTS

Festival Documentation: 
- http://www.festvox.org/docs/manual-2.4.0/festival_toc.html

Install more realistic voices: 
- http://ubuntuforums.org/showthread.php?t=677277
- http://ubuntuforums.org/showthread.php?t=751169

```bash
sudo apt-get install festival festlex-cmu festlex-poslex festlex-oald
```
 
```bash
echo "Hello world" | festival --tts
```

---------------------------------------

## Release History

v2016-02-07 
  + Project initialization
