This Business Rule automatically assigns an Assignment Group based on the selected Category in the Incident form.
It uses a predefined mapping between categories like hardware, software, network, and database to their respective support groups.
When an incident is created or updated, the script checks the category and fetches the matching group from the sys_user_group table.
If a match is found, it sets that group as the assignment_group.
This ensures incidents are routed to the correct teams automatically, reducing manual effort and assignment errors.
