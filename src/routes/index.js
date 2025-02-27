import { Router } from "express";
const router = Router();

// Rutas principales
router.get("/", (req, res) => res.render("index", { title: "Inicio" }));
router.get("/about", (req, res) => res.render("about", { title: "Sobre mí" }));
router.get("/contact", (req, res) => res.render("contact", { title: "Contacto" }));
router.get("/projects", (req, res) => res.render("projects", { title: "Mis Proyectos" }));

export default router;