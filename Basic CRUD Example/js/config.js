const username = 'your_username';
const password = 'your_application_password';
const token = btoa(`${username}:${password}`);
const apiBase = 'http://rest-api.local/wp-json/wp/v2';
