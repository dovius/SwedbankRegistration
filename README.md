# SwedbankRegistration
IT SwedBank academy. Java group project. Contact Us form.

| Working right now       |
| ----------------------- |
| Registration            |
| Registrion list         |
| Contact Us              |

How to execute?
----------
### - It's allready on cloud!
Just press http://registration-kirviai.rhcloud.com/ - and you're using our BetaRegistration

Frontend part:
Install node.
npm install.
gulp run.
Go to localhost:8000 and enjoy.

- By the way, if something goes wrong- clean Cache :)

### List of commands that helped us to deploy our server

Antanas Sinica Genius:

```sh
$   git push rhc master
$   git update-index --chmod=+x .openshift/action_hooks/start
$   git update-index --chmod=+x .openshift/action_hooks/stop
$   git update-index --chmod=+x .openshift/action_hooks/start
$   vim start
$   vim deploy
$   cd .openshift/action_hooks/
$   git update-index --chmod=+x .openshift/action_hooks/deploy
$   git push -f rhc master
$   git remote add rhc ssh://56c206d37628e1d32d000003@registration-kirviai.rhcloud.com/~/git/registration.git/
```
