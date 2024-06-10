# IDE set-up
 - install [VS Code](https://code.visualstudio.com/)
 - install [Live Stream Preview](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code. Follow link or directly install in VS code as shown below:
   ![image](https://github.com/VedikaSrivastava/memorial-uss/assets/83489280/0ef4dcae-5870-4aa2-8bc8-861230f264b4)

# Github
  - ensure you have been added as collaborator to the repository
  - clone the git repo on your local machine
    - go the the local directory where you want to clone the code.
    - open cli/terminal/powershell
    - use the following command: `git clone https://github.com/VedikaSrivastava/memorial-uss.git`
  - to push the code back to git hub use the following command in order (you can use the terminal in VS code):
    - `git add .`
    - `git commit -m "<replace with a brief msg about what changed were made>"` or else simply use `git commit`
    - `git push origin main:akalp`
  - your code will get pushed to akalp branch instead of main. We will raise a PR from akalp to main.
  - whenever you begin coding, use the following command in order to ensure you are always working with the most recent version of code or else you will face difficulties pushing the code:
    - `git fetch`
    - `git pull`
   
# Editing/Running code
  - now open VS code, in the top menu go to file -> open folder -> select the folder of the repo (should be named `memorial-uss`)
  - to run code locally, right click on `index.html` and select `Open with Live Server`. This should open a the website in the default browser (e.g. for me in chrome).
    ![image](https://github.com/VedikaSrivastava/memorial-uss/assets/83489280/12e7d947-2de3-402c-980b-493b41ca18f8)


