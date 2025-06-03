# Exploratory Testing Plan

Este documento incluye un checklist manual y observaciones para corner cases no automatizados todavía.

---

## ✅ Login Page - Exploratory Checklist

| Caso | Descripción | Estado |
|------|-------------|--------|
| 1    | Login con credenciales vacías | ✅ |
| 2    | Login con solo username | ✅ |
| 3    | Login con solo password | ✅ |
| 4    | Inputs con caracteres especiales | 🔲 |
| 5    | Validar focus automático al iniciar | 🔲 |
| 6    | Validar tabulación entre campos | 🔲 |

---

## 🎛 Dropdown - Exploratory Checklist

| Caso | Descripción | Estado |
|------|-------------|--------|
| 1    | Seleccionar cada opción y validar texto | ✅ |
| 2    | Selección inválida por código | ✅ |
| 3    | Intentar seleccionar opción deshabilitada | 🔲 |
| 4    | Usar teclado para navegación | 🔲 |

---

## 💥 Dynamic Loading

| Caso | Descripción | Estado |
|------|-------------|--------|
| 1    | Validar que el loading se muestra | ✅ |
| 2    | Forzar timeout de red | 🔲 |
| 3    | Cancelar carga a mitad de tiempo | 🔲 |

---

## 🧪 Petstore API - Corner Cases

| Caso | Descripción | Estado |
|------|-------------|--------|
| 1    | Crear pet con ID duplicado | 🔲 |
| 2    | PUT con ID inexistente | 🔲 |
| 3    | DELETE de pet ya borrada | 🔲 |
| 4    | GET sin ID | 🔲 |
| 5    | Validación de tipos (string en lugar de int) | ✅ |
