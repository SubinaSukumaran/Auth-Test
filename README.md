# Edrop
Cab Hailing Application. 
### Web includes
* Admin Panel

### Project based requirements
1. Firebase Credentials JSON file, downloaded from Firebase Console of the project
2. `.env` file created with required details
3. `firebase_credentials.json` downloaded from Firebase Console
4. `app.yaml` created for Gcloud development
5. Setup `gcloud` deployment env in local machine, with the proper account
---

## Google Cloud Deployment Caveats
### 1. Required additional packages, other than default laravel packages
Since the application uses **Firestore**, it requires additional packages to be installed in the deployment space (server/docker/serverless)
* `gRPC` - for remote procedural call to-fro **Firebase**
*  `protobuf` - for creating of **protocol buffers** for **gRPC** calls
* `sodium` - crypto library for encryption, decryption, signatures, hashing, etc...
* `gd` - graphics library
### 2. Installation mode of the above mentioned packages
The above packages need to be installed, and also enabled. **This cannot be done directly in gcloud**
* gcloud **doesn't** have a release for `php7.4`, and the latest stable release is `php7.2`
* To target `php7.2` the `.env` file **has been modified**
* It's mentioned in gcloud documentation that the `php7.2` env comes ready with `grpc protobuf pecl gd`, but they're **not enabled**
* to enable `grpc protobuf pecl gd` need to include those three in the `php.ini` file in the `PROJECT_ROOT_DIR`
* extensions can be enabled under the `extensions` directive in `php.ini` file as `extensions=<extension>`
* However, the above steps **doesn't** work for `grpc protobuf gd`
* Solution to the above problem is to include them in the `composer.json`, and they're automatically installed, enabled, and configured in the gcloud environment. (Check out [composer.json](composer.json) for enabling method)
* Also, since gcloud **DOES NOT** support `php7.4`, [composer.lock](composer.lock) is also ignored in [.gcloudignore](.gcloudignore) This is so that platform specific packages are installed by `composer` in gcloud environment

### 3. APP.YAML for configuration
Google Cloud deployment requires `app.yaml` to be present in the `ROOT_DIR` of the project, with the **environment variables** declared under `env_variables` directive 
### 4. Ignoring files that shouldn't be uploaded
[.gcloudignore](.gcloudignore) is being used to maintain the files that need to be ignored by `gcloud` tool during cloud deploy. 
* Note: Some files like `.git .svn .gitignore .gitattributes` are ignored by default. 
* Format of `.gicloudignore` is same as `.gitignore`
* [.gcloudignore](.gcloudignore) cannot be used, if `skip_files` directive is present in `app.yaml`
### 5. Some gcloud deployment facts
* Gcloud pre-deployment, copies the entire contents of `PROJECT_DIR` to a temporary file, and then ignores files mentioned in [.gcloudignore](.gcloudignore) before uploading and deployment. 
* Gcloud deployment also uses `gRPC` to run the build on the cloud, with realtime updates in the deploying system. 
* Gcloud deployment deploys in `gcr.io/<some_path>` which is the same path used for docker deployment, regular deployment, and/or other deployments. 
* All uploaded data, and builds are stored in a bucket. 
    * While doing maintenance, ensure the bucket contents are not overloaded, and do regular deletions of old history files. 
* Logs can be viewed in `Operations Logging` in the Gcloud console. 
### 6. Creating required bootstrap and storage folders
Creating `bootstrap/cache` and `storage/*` folders are described in [Solution to the Hacks](#solution-to-the-hacks)
### 7. If composer.json isn't modified, then those scripts don't run
Since gcloud deploys on docker, if the composer.json isn't run, then the scripts don't run in another layer. Docker uses the old cached layer. This will cause the `storage` and `bootstrap/cache` folders to not have correct permissions. 
This has to be avoided, so make sure to make a change in `composer.json` before `gcloud app deploy`
### 8. Continuous 419 errors
419 errors arise due to CSRF token issues. Although, the actual cause of this is unclear, there are some hypothesis.
* File permissions issues inside `storage`
* File ownership issues inside `storage`
* Since, deployment is done on a docker container, there must be some platform limitations which give rise to this issue
    * Since, the deployment is done in a flex environment, it's possible that the generated docker image is used for multiple deployments, where as the additional data inside `storage` is not being copied.
    * This leads to the `session` data not being present in the newly created docker container, which keep causing the 419 issues
* Sometimes, the docker containers shutdown due to inactivity and/or errors. This can also lead to loss of data, or corruption of data. This can also result in 419 errors.

However, the first two was supposed to be resolved by giving `755` permissions to all the contents of `storage` folder, also give ownership permission to `www-data`, yet this doesn't work out. Most likely reasons are:
* Cache files created on the fly have `root` ownership, and hence issues with access
    * But the problem with this hypothesis is that 419 errors should always occur, rather than occur at irregular intervals
* Cache files created on the fly must have `755` permissions
    * But, there's no way to be sure of this (*need to test this hypothesis out later*)

The fix for now, are the following:
* In `app.yaml` add the following contents:
    ```yaml
    env_variables:
        APP_STORAGE: /tmp
        VIEW_COMPILED_PATH: /tmp
        SESSION_DRIVER: cookie
    ```
* Modify `bootstrap/app.php` by adding the following block of code before the return statement. This will allow you to set the storage path to `/tmp` for caching in production.
    ```php
    # [START] Add the following block to `bootstrap/app.php`
    /*
    |--------------------------------------------------------------------------
    | Set Storage Path
    |--------------------------------------------------------------------------
    |
    | This script allows you to override the default storage location used by
    | the  application.  You may set the APP_STORAGE environment variable
    | in your .env file,  if not set the default location will be used
    |
    */
    $app->useStoragePath(env('APP_STORAGE', base_path() . '/storage'));
    # [END]
    ```

* Remove the `beyondcode/laravel-dump-server` composer dependency. This is a fix for an error which happens as a result of Laravel's caching in `bootstrap/cache/services.php`
    ```bash
    composer remove --dev beyondcode/laravel-dump-server
    ```
---

## Laravel Deployment Caveats
### 1. Which bootstrap files & folders to not upload
Ensure that `bootstrap/cache/config.php` is not being uploaded. 
* `config.php` contains **full_path** to the current development environment, and since that is being uploaded directly to the server, the *dev-env full path* will not match with the server path, and cause conflicts and errors. 
* ~~It's better to not upload `bootstrap` folder entirely, but since there **isn't** a provision to create folder directly in the `flex env` *uploading the same is being done for now.*~~ <br>
Resolved in [Solution to the Hacks](#solution-to-the-hacks)
### 2. Ignore Storage folder upload
`storage` folder should also not be updated. 
* This is a very common practice, and rightly so. 
* ~~There is no direct way to create `storage` folders in the `flex env`, **but a workaround in in progress.**~~ <br>
Resolved in [Solution to the Hacks](#solution-to-the-hacks)
### 3. Files containing sensitive Information
Ensure that `.env`, `firebase_credentials.json` `app.yaml` is not uploaded in GitHub. These files are full of confidential information, leakage of which will compromise the entire server. <br>
    **`Chances of being sued by Google, which we won't be able to afford`**
### 4. Storage <-> Public symlink
~~Linking of `storage -> public` isn't yet possible due to unable to run custom commands in `flex env`~~ <br>
Resolved in [Solution to the Hacks](#solution-to-the-hacks)

---

## Hacks implemented (now resolved to proper solution)
1. ~~To ensure that all required `storage` folders are present, `dummy` files are created and uploaded. All files other than `dummy` file are being uploaded. See [.gcloudignore](.gcloudignore) for the implementation details.~~
2. ~~To ensure that `bootstrap` folder is present, only `config.php` is being ignored.~~ 

---
<a id="solution-to-the-hacks"></a>

## Solution to the Hacks
`storage` and `bootstrap/config` folders are being excluded in [.glcoudignore](.gcloudignore)
* **composer script** `create-storage-dirs` is responsible for creating the required `storage` folder and giving **755** permissions
* **composer script** `create-bootstrap-dir` is responsile for creating the required `bootstrap/cache` folder and giving **755** permissions
* **composer script** `create-bootstrap-dir` is moved to (called from) `post-autoload-dump` as gcloud checks presence of `bootstrap/cache` here and throws error **if not present**
* **composer script** `artisan-scripts` is responsible for creating required cache
* **composer script** `nginx-chown-permissions` is responsible for changing **ownership** of the entire `$APP_DIR` to **NGINX** `www-data`
    * `$APP_DIR` is a gcloud exclusive environment variable, and not avaiable in local dev environment
    * A **conditional statement** ensures system agnostic compatibility
* **composer script** `post-install-cmd` and `post-update-cmd` 
    * contains **function calls** `Illuminate\\Foundation\\ComposerScripts::<functionName>` each for `postInstall` and `postUpdate` functions
    * without these calls, the scripts don't run. 
    * This is not present by default, and needs to be added by the developer. 

Check out the above implementation details in [composer.json](composer.json)

---
## TODO:
- [ ] **CI/CD pipeline** - this is a completely different ballgame in gcloud, with it's own rules, build-config, staging, and deployment. 
- [x] **Composer Scripts** - `post-install-cmd` and `post-update-cmd`
    - [x] Create `storage` folders and add permissions
    - [x] Create `bootstrap` folers and add Permissions
    - [x] Run `php artisan` commands
- [ ] **Create a deployment blueprint** - for easy deployment in the future, and for other projects
