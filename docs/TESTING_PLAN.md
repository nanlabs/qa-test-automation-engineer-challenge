# 🧪 Test Plan - Automation Exercise

This document contains the automated test cases developed with Cypress following the Page Object Model (POM) pattern.

---

# UI Test Cases - AutomationExercise

---

## ✅ TC01 - Happy Path: Login and Add Product to Cart

- **ID:** TC01_Login_Add_Product_To_Cart  
- **Objective:** Verify that a registered user can successfully log in, add a product to the cart, and see it listed in the cart.  
- **Precondition:**  
  - User must be registered with:  
    - Email: `mmUser@example.com`  
    - Password: `mmUser1234`  
- **Test Data:**  
  - Product Name: `Blue Top`  
- **Steps:**  
  1. Navigate to the home page `https://automationexercise.com`.  
  2. Verify the home page is visible.  
  3. Click on “Signup / Login”.  
  4. Verify the login form "Login to your account" is visible.  
  5. Enter registered email and password.  
  6. Click the “Login” button.  
  7. Verify user is logged in (text “Logged in as MMUser”).  
  8. Navigate to the “Products” page.  
  9. Hover over the product “Blue Top” and click “Add to cart”.  
  10. In the modal, click “View Cart”.  
  11. Verify the product “Blue Top” is listed in the cart.  
- **Expected Result:**  
  - User logs in successfully.  
  - Product is added to the cart and correctly displayed.  
- **Postcondition:**  
  - The cart is cleared and user logs out to maintain a clean state.

---

## ✅ TC02 - Add Product to Cart as Guest User (Mobile)

- **ID:** TC02_Guest_Add_Product_Mobile  
- **Objective:** Verify that a guest user (not logged in) on a mobile device can add a product to the cart and see it listed.  
- **Precondition:**  
  - No user login required.  
- **Test Data:**  
  - Product Name: `Blue Top`  
- **Steps:**  
  1. Navigate to the home page `https://automationexercise.com` on a mobile viewport (e.g., iPhone 6).  
  2. Verify the home page is visible.  
  3. Navigate to the “Products” page.  
  4. Hover over the product “Blue Top” and click “Add to cart”.  
  5. In the modal, click “View Cart”.  
  6. Verify the product “Blue Top” is listed in the cart.  
- **Expected Result:**  
  - Product is added to the cart and correctly displayed.  
- **Postcondition:**  
  - The cart is cleared to maintain a clean state.

---

## ⚠️ TC03 - Add Non-existent Product (Tablet)

- **ID:** TC03_Add_NonExistent_Product_Tablet  
- **Objective:** Verify the system handles gracefully when trying to add a product that does not exist.  
- **Precondition:**  
  - No user login required.  
- **Test Data:**  
  - Product Name: `NonExistentProduct123`  
- **Steps:**  
  1. Navigate to the home page `https://automationexercise.com` on a tablet viewport (e.g., iPad 2).  
  2. Navigate to the “Products” page.  
  3. Try to add the product named `NonExistentProduct123` to the cart.  
  4. Verify an error is shown or the action fails as expected.  
- **Expected Result:**  
  - The system does not add the product and shows an appropriate message or no action occurs.  
- **Postcondition:**  
  - No changes to the cart.

---

## ⚠️ TC04 - Add Same Product Twice and Verify Quantity (Desktop)

- **ID:** TC04_Add_Same_Product_Twice_Desktop  
- **Objective:** Verify that adding the same product twice updates the quantity correctly in the cart for a logged-in user.  
- **Precondition:**  
  - User must be registered with:  
    - Email: `mmUser@example.com`  
    - Password: `mmUser1234`  
- **Test Data:**  
  - Product Name: `Blue Top`  
- **Steps:**  
  1. Navigate to the home page `https://automationexercise.com`.  
  2. Click on “Signup / Login” and log in with valid credentials.  
  3. Navigate to the “Products” page.  
  4. Hover over “Blue Top” and click “Add to cart”.  
  5. In the modal, click “Continue Shopping”.  
  6. Add the same product “Blue Top” again.  
  7. In the modal, click “View Cart”.  
  8. Verify the quantity for “Blue Top” in the cart is 2.  
- **Expected Result:**  
  - Quantity of product updates to 2 correctly in the cart.  
- **Postcondition:**  
  - The cart is cleared and user logs out to maintain a clean state.


---

# Test Case: API 1 - Get All Products List

| **ID**                  | API1_GET_All_Products_List                          |
|-------------------------|----------------------------------------------------|
| **API URL**             | `https://automationexercise.com/api/productsList`  |
| **Method**              | GET                                                |
| **Expected Status Code** | 200                                                |
| **Description**         | Verifica que la lista de productos se reciba correctamente y el código de respuesta sea 200. |

---

## Postman Test Script (Tests tab)

```javascript
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Response has a products list", () => {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('products');
    pm.expect(jsonData.products.length).to.be.greaterThan(0);
});

---

# Test Case: API 2 - POST To All Products List

| **ID**                  | API2_POST_Products_List_Not_Allowed                |
|-------------------------|----------------------------------------------------|
| **API URL**             | `https://automationexercise.com/api/productsList`  |
| **Method**              | POST                                               |
| **Expected Status Code** | 405                                                |
| **Description**         | Verifica que la petición POST al endpoint productsList no esté permitida y retorne código 405 con mensaje correspondiente. |


## Postman Test Script (Tests tab)

javascript
pm.test("Status code is 405", () => {
    pm.response.to.have.status(405);
});

pm.test("Response message is 'This request method is not supported.'", () => {
    const responseBody = pm.response.text();
    pm.expect(responseBody).to.include("This request method is not supported.");
});

---

# Test Case: API 5 - POST To Search Product

| **ID**                  | API5_POST_Search_Product                          |
|-------------------------|--------------------------------------------------|
| **API URL**             | `https://automationexercise.com/api/searchProduct` |
| **Method**              | POST                                             |
| **Request Parameter**   | `search_product` (ejemplo: "top", "tshirt", "jean") |
| **Expected Status Code** | 200                                              |
| **Description**         | Verifica que la búsqueda de productos con el parámetro enviado devuelva una lista y código 200. |


## Postman Test Script (Tests tab)

```javascript
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Response has a searched products list", () => {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('products');
    pm.expect(jsonData.products.length).to.be.greaterThan(0);
});

---

# Test Case: API 6 - POST To Search Product without `search_product` parameter

| **ID**                    | API6_POST_SearchProduct_Without_Parameter                      |
|---------------------------|----------------------------------------------------------------|
| **API URL**               | `https://automationexercise.com/api/searchProduct`             |
| **Method**                | POST                                                           |
| **Expected Status Code**  | 400                                                            |
| **Expected Response**     | `Bad request, search_product parameter is missing in POST request.` |
| **Description**           | Verifica que el endpoint rechace la petición POST si no se proporciona el parámetro `search_product`. |

---

## Postman Test Script (Tests tab)

``javascript
pm.test("Status code is 400", () => {
    pm.response.to.have.status(400);
});

pm.test("Error message is correct", () => {
    pm.expect(pm.response.text()).to.include("Bad request");
    pm.expect(pm.response.text()).to.include("search_product parameter is missing");
});

---

# Test Case: API 7 - POST To Verify Login with valid details

| **ID**                    | API7_POST_VerifyLogin_Valid_Details                           |
|---------------------------|----------------------------------------------------------------|
| **API URL**               | `https://automationexercise.com/api/verifyLogin`              |
| **Method**                | POST                                                           |
| **Expected Status Code**  | 200                                                            |
| **Expected Response**     | `User exists!`                                                 |
| **Description**           | Verifica que el endpoint de login reconozca credenciales válidas y retorne una respuesta exitosa. |

---

## Postman Test Script (Tests tab)

``javascript
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Response confirms user exists", () => {
    pm.expect(pm.response.text()).to.include("User exists!");
});

---

# Test Case: API 8 - POST To Verify Login without email parameter

| **ID**                    | API8_POST_VerifyLogin_Missing_Email                          |
|---------------------------|---------------------------------------------------------------|
| **API URL**               | `https://automationexercise.com/api/verifyLogin`             |
| **Method**                | POST                                                          |
| **Expected Status Code**  | 400                                                           |
| **Expected Response**     | `Bad request, email or password parameter is missing in POST request.` |
| **Description**           | Verifica que el sistema rechace la solicitud cuando falta el parámetro `email`. |

---

## Postman Test Script (Tests tab)

``javascript
pm.test("Status code is 400", () => {
    pm.response.to.have.status(400);
});

pm.test("Response message indicates missing parameters", () => {
    pm.expect(pm.response.text()).to.include("Bad request, email or password parameter is missing");
});



