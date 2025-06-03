# QA / Test Automation Engineer Challenge

Este proyecto contiene una suite de tests automatizados end-to-end que cubren flujos tanto de UI como de API, usando **Cypress** como herramienta principal.

---

## 🛠️ Herramienta utilizada

**Cypress** fue elegido por ser una solución moderna, fácil de configurar y mantener para pruebas E2E. Además permite combinar UI y API testing en un solo entorno, lo cual es ideal para este challenge.

---

## 🚀 Cómo correr los tests localmente

1. Clonar el repo:

```bash
git clone https://github.com/mariano-castro/qa-test-automation-engineer-challenge.git
cd qa-test-automation-engineer-challenge
```

2. Instalar dependencias:

```bash
npm install
```

3. Correr Cypress en modo interactivo:

```bash
npx cypress open
```

4. Correr todos los tests en modo consola:

```bash
npx cypress run
```

## ✅ Qué cubren los tests

### 🧪 UI Tests
- **Login Flow** con credenciales válidas e inválidas.
- **Dropdown**: validación de selección y de opción inválida.
- **Dynamic Loading**: espera de carga y validación de contenido.

### 🔄 API Tests (Petstore Swagger API)
- Flujo completo: `POST ➜ PUT ➜ GET ➜ DELETE`
- Validación de status code y cuerpo de respuesta.
- Separación de datos en `fixtures`.

---

## ⏳ Mejoras con más tiempo

- Agregar más cobertura en flujos críticos de UI (registro, navegación completa, errores de sesión).
- Agregar hooks de afterEach para desloguear, limpiar datos, etc
- Crear metodos reutilizables para api testing.
- Visual testing.
- Testing cross-browser.
- Métricas de cobertura de tests (reportes).
- Pulir mas CI con Github Actions.

---

## 📎 Exploratory Notes

Ver `docs/TESTING_PLAN.md` para detalles sobre corner cases, flujos alternativos, y manual testing.

---

## 🧪 Autor

**Mariano Castro** | Senior QA Automation  
[https://github.com/mariano-castro]
[https://www.linkedin.com/in/marianoecastro]