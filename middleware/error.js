const notFound = (req, res) =>
  res.status(404).send(
    `
      <div>
        Page not found. Go back <a href='http://localhost:8089/'>Home</a>
      </div>
    `
  );

  module.exports = notFound
