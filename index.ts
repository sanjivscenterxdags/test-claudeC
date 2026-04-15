console.log("Hello via Bun!");

const server = Bun.serve(
    {
        port: 3000,
        routes: {
            "/": () => new Response(
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bun Server</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: sans-serif;
      font-size: 2rem;
    }
  </style>
</head>
<body>
  <h1>Hello My Bun Server</h1>
  <div id="counter">0</div>
  <script>
    let count = 0;
    setInterval(() => {
      document.getElementById('counter').textContent = ++count;
    }, 1000);
  </script>
</body>
</html>`,
                { headers: { "Content-Type": "text/html" } }
            ),
        }
    }
);

console.log("BUN Server is running on http://localhost:3000");  