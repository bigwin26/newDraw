import Shoes from "../schemas/shoes";
import connect from "../schemas";
connect();
Shoes.find({ status: "upcoming" }, (err, docs) => {
  docs.forEach(({ code, location }) => {
    console.log("ele", location);
  });
});
