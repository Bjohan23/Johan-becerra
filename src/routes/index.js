import { Router } from "express";
const router = Router();

// Rutas principales
router.get("/", (req, res) => res.render("index", { title: "Inicio" }));
// En tu archivo de rutas (index.js)
router.get("/about", (req, res) => {
  // Calcular la edad
  const fechaNacimiento = new Date(2003, 7, 23); // Agosto es 7 (0-11)
  const hoy = new Date();
  
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const m = hoy.getMonth() - fechaNacimiento.getMonth();
  
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  
  res.render("about", { 
    title: "Sobre mí",
    edad: edad 
  });
});
router.get("/contact", (req, res) => res.render("contact", { title: "Contacto" }));
router.get("/projects", (req, res) => res.render("projects", { title: "Mis Proyectos" }));

export default router;