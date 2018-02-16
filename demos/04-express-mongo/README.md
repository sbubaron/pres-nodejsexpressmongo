# Connecting Express to Mongo

## Installing MongoDB
Download appropriate version for your OS from https://www.mongodb.com/download-center#community
Windows Server version works on Win 7/10 and Server Editions

## MongoDB Initial Setup

The following steps reference: 
https://medium.com/@raj_adroit/mongodb-enable-authentication-enable-access-control-e8a75a26d332
https://stackoverflow.com/questions/24772428/configuring-mongodb-on-windows

### MongoDB Configuration

Config file uses YAML which uses line endings and spaces to properly read in configuration so be mindful. 

You'll need to create the appropriate directories

Example config for windows. This file can be created at c:\mongo\mongod.cfg

```
systemLog:
  destination: file
  path: "C:\\mongo\\log\\mongo.log"
  logAppend: true
storage:
  dbPath: "C:\\mongo\\data\\db"
```

Example config for MAC. 
This file may be at /etc/mongod.conf or /usr/local/etc/mongod.conf

```
systemLog:
  destination: file
  path: "/var/log/mongo.log"
  logAppend: true
storage:
  dbPath: "/data/db"
```

### Adding Initial User

Open Command Line / Terminal and Run.
Replace user/pwd with approrpiate values

In one terminal start mongo with:
```
mongod --config "/path/to/config" i.e. c:\mongo\mongod.cfg
```

In another terminal
```
use admin
$ db.createUser(
  {
    user: "superAdmin",
    pwd: "admin123",
    roles: [ { role: "root", db: "admin" } ]
  })
```
**Note** You **SHOULD** create additional users with other more restrictive roles

**Stop the Mongo Terminal**
```
ctrl+c
```

### Modify Configuration to Force Authentication

```
systemLog:
  destination: file
  path: "/var/log/mongo.log"
  logAppend: true
storage:
  dbPath: "/data/db"
security:
  authorization: enabled
```

Restart Mongo
```
mongod --config "/path/to/config" i.e. c:\mongo\mongod.cfg
```

### Poking Around Mongo

Run MongoDB Compass Community
```
Hostname: localhost
Port: 27017
Authentication: Username and Password
Username: superAdmin
Password: admin123
Authentication Database: admin
```

Click Connect

Create a New Database: "starwars"  
Create a New Collection: "quotes"

Need to add a user to connect to starwars database

```
db.createUser(
{
  user: "starwarsAdmin",
  pwd: "yoda123",
  roles: [{role: "dbOwner", db: "starwars"}]
})
```

