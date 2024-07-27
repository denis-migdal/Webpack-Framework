<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
    <link rel="stylesheet" href="../../node_modules/highlight.js/styles/1c-light.min.css">
    <link rel="stylesheet" href="./index.css">
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