import { Router } from "express";
const router = Router();
router.get("/", (req, res) => res.render("index", { title: "Home" })); // renderizamos la plantilla
router.get("/about", (req, res) => res.render("about", { title: "About Me" })); // renderizamos la plantilla
router.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact Page" })
); // renderizamos la plantilla

export default router;
