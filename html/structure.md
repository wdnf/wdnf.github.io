# Basic HTML structure
The basic HTML structure is a skeleton of your website.

## `<!DOCTYPE html>` mark
The `<!DOCTYPE html>` marks the file as a HTML 5 document.

## `<html>` tag
The `<html>` tag is a paired tag that must include content of the whole document, excluding the `<!DOCTYPE html>` mark.

## `<head>` tag
The `<head>` tag is a paired tag for informations about the document.
It is also place for seo tags.

## `<body>` tag
The `<body>` tag is a paired tag for visible content of the document.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tab title</title>
</head>
<body>
    <nav>
        navigation
    </nav>
    <header>
        <h1>Page title</h1>
    </header>
    <main>
        <section>
            <h2>Section title</h2>
            <p>Some text</p>
        </section>

        <section>
            <h2>Section with a unordered list</h2>
            <h3>Shopping list</h3>
            <ul>
                <li>Lemons</li>
                <li>Apples</li>
                <li>Cherries</li>
            </ul>
        </section>

        <section>
            <h2>Section with a ordered list</h2>
            <h3>My favourite programming languages</h3>
            <ol>
                <li>C</li>
                <li>Python</li>
                <li>Java</li>
            </ol>
        </section>
    </main>
    <footer>
        &copy; 2020, wdnf.org
    </footer>
</body>
</html>
```