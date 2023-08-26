 **Written Homework Assignments**

Explain in your own words:
Where did you register your domain and what your domain name is?
How did you transfer DNS to Digital Ocean from that domain registrar?
In Digital Ocean how did you create the A Record for the subdomain you deployed to?
In your Virtual Machine what program did you use to setup your reverse proxy?
How did you create your SSL Certificate?

1. To begin, log in to Digital Ocean and navigate to your domain. We will deploy my application on it. We need to access our SSH using `root@------`.

2. Create a subdomain and point it to your personal server. Clone your Git repository in the terminal using `git clone (GitHub link)`. Navigate to `seicafe.yamilethnarvaez.me`.

3. Run `npm i` to install the dependencies.

4. Start the server using PM2: `pm2 start server.js --name "seicafe"`. Make sure to configure a different port in the `.env` file (don't modify it directly).

5. Address any vulnerabilities by running:
   - `npm audit fix`
   - `npm audit fix --force`

6. Edit the `.env` file using `nvim .env`.

7. Restart the PM2 server with the updated configuration:
   
8. . Check the logs for any errors: `pm2 logs`. Use `Ctrl + C` to exit.

9. To configure Nginx, open the terminal and type `ranger`.

10. Navigate to the `/etc/nginx/sites-available` directory.

11. Update the configuration by adding a server block for `seicafe`:
 ```nginx
 server {
     server_name seicafe.yamilethnarvaez.me;

     location / {
         proxy_pass http://localhost:8003;
     }
 }
 ```

12. Save the configuration changes by pressing `Esc`, then `Shift + Semicolon`, and finally `Enter` after typing `wq!`.

13. Verify the configuration syntax using `nginx -t` to ensure there are no errors (it should show a successful test).

14. For the final step, run `certbot --nginx`. Choose the option to expand, as we want all aspects to be covered.

15. Once the deployment is successful, you will receive a confirmation message.



