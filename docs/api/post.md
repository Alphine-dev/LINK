**The `post` function simplifies sending data to a server using the POST HTTP method.**

Here's how to use it:
### Syntax
```
import { LINK } from './link'; // assuming `link.js` is in the same directory

LINK.post(url, data, options, errorHandler);

```

### Parameters:

-   **`url (string)`:** The target URL for the POST request.
-   **`data (object)`:** The data you want to send in the request body. This object will be automatically JSON-stringified.
-   **`options (object, optional)`:** An optional object allowing you to customize the request. You can define properties like:
    -   **`headers` (object):** Custom headers to include in the request.
    -   **`timeout` (number):** A timeout in milliseconds for the request.
-   **`errorHandler (function, optional)`:** A function to handle errors encountered during the request. This function will be called with the error object as an argument.

### Return Value:

The `post` function returns a Promise that resolves to the parsed JSON response data if successful. If an error occurs, the Promise is rejected with the error object.

### Example Usage:
```
const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

LINK.post('https://api.example.com/users', userData)
  .then(response => {
    console.log('User created:', response);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

```

### Error Handling:

By default, if no `errorHandler` is provided, errors will be logged to the console and re-thrown. You can define your own error handling logic using the `errorHandler` function.

### Additional Notes:

-   The `Content-Type` header is automatically set to `application/json` for POST requests.
-   You can further customize the request behavior using the optional `options` parameter.