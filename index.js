const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = new express();
const PORT = 8000;

// adding middleware plugin
app.use(express.urlencoded({ extended: false }));

//Routes

/* HTML response
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users
      .map((user) => `<li>Name: ${user.first_name} ${user.last_name}</li>`)
      .join("")}
  <ul>`;
  return res.send(html);
});
 / consolidate same route for different methods
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
app.patch("/api/users/:id", (req, res) => {
  //todo: Edit the user with id
  return res.json({ staus: "Pending" });
});

app.delete("/api/users/:id", (req, res) => {
  //todo: Delete the user with id
  return res.json({ staus: "Pending" });
});

*/
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user with id
    const body = req.body;
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return res.status(404).send("User not found");
    users[userIndex] = { ...users[userIndex], ...body };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error writing to File");
      } else {
        return res.json({ staus: "Sucessful", id: users[userIndex].id });
      }
    });
  })
  .delete((req, res) => {
    // Delete user with id
    const body = req.body;
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return res.status(404).send("User not found");
    // remove use from array
    const deleteUSer = users[userIndex];
    users.splice(userIndex, 1);

    // write updated users array
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error writing to File");
      } else {
        return res.json({ staus: "Sucessful", id: deleteUSer.id });
      }
    });
  });

app.post("/api/users", (req, res) => {
  //todo: create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({ staus: "Sucessful", id: users.length });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
