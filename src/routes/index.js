import { Router } from "express";
const router = Router();
router.get("/", (req, res) => res.render("index", { title: "Inicio" })); // renderizamos la plantilla
router.get("/about", (req, res) => res.render("about", { title: "Sobre mí" })); // renderizamos la plantilla
router.get("/contact", (req, res) =>
  res.render("contact", { title: "Pagina de contacto" })
); // renderizamos la plantilla

export default router;
