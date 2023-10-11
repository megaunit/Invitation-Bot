
# Invitation bot

- This bot serves to let a private server admin be able to give some members the ability to invite other users.
- The Discord native "create invite link" permission allows the user to make as many links and with whatever limits as they want. In private servers, this is not so desired. This make is what make this bot advantagous as it allows the user to create only 1-time-use links, and notifies the admin each time a new link is created. This way, the private server could be monitored better.
- If the server was a big private server and contains many users, it could be a better idea to log those admin notifications in a database. However, I didn't need to do that in this bot because my server was a small server with ~30 users.


The reason why an admin might use this bot and not just give the inviter a role with a permission to invite other users is that 
