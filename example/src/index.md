<!DOCTYPE html>
<html>
<head>
    <title>Example</title><link rel="stylesheet" href="../../node_modules/highlight.js/styles/1c-light.min.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            print-color-adjust:exact;
            background-color: grey;
            position: relative;
        }
        main {
            overflow-x: hidden;
            position: absolute;
            top: 0;
            /*overflow: hidden;*/
            width: 210mm;
            background-color: white;
            & > section {
                width: 210mm;
                height: 148mm;
                overflow-y: scroll;
                /*background-color: blue;*/
                border: 1px solid black; /* red */
                box-sizing: border-box;
            }
        }
        @media screen {
            body {
                overflow: hidden;
            }
            main {
                right: 0;
                transform-origin: top right;
                scale: var(--scale);
                height: 148mm;
            }
        }
        @media print {
            main > section {
                border: 1px solid white;
            }
        }
        @page {
            size: A5 landscape;
        }
    </style>
</head>
<body>
Z
<main>
<section>

```sql
SELECT * FROM TOTO WHERE X = 2;
```

</section>
<section>A</section>
<section>

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZYXWVTSRQPO_NMLKJIHGFEDCBA9876543210BCDEFGHIJKL


## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)

## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)

A</section><section>B</section>

## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)
## Hi ;)

</main>
</body>

<script><!-- TODO -->
    const main = document.querySelector("main");

    // fit page height
    const vh = document.documentElement.clientHeight; // without scrollbar
    const mh = main.clientHeight; // height: 148mm
    main.style.setProperty("--scale", `${vh/mh}`);

    // change slide
    let frames = [...document.querySelectorAll('section')];
    let current = 0;
    document.addEventListener("keyup", (ev) => {

        if( ev.code=== "ArrowLeft"  && current !== 0)
            --current;
        if( ev.code=== "ArrowRight" && current !== frames.length - 1 )
            ++current;

        console.warn("called", current * mh);
        main.scrollTo({
            top: frames[current].offsetTop,
            behavior: "instant",
        });
    });
</script>

</html>