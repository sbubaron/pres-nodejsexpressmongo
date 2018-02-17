# LAMP VS Mean

The LAMP stack is a popular platform consisting of Linux Apache, MySQL and PHP -- now certainly you can swap in and out pieces you need (WAMP Windows***, LEMP: *nginx** etc, ***Perl/PHP/Python). The focus here revolves mainly around the server side infrastructure and each tool really requires a unique skillset or atleast fairly heavy initial setup and configuration  

The MEAN (Mongo, Express, Angular, Node) stack became popular because it simplified the initial setup and for developers standardized on a single language that could be used across the entire stack (Javascript).

For this talk we are going to focus on the server side Node, Express and Mongo as the Angular piece itself can easily be substituted for whatever client side framework of your choosing.

# Defining NodeJS
"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."

JS Engines
Chrome V8 JS  
Open Source Engine Developed by Chromium Project  
First Release September 2008  

Designed to be Used both in Browser and Standalone  
Single Threaded  

Big Users: Chrome/Chromium, Opera, Couchbase DB, NodeJS, Electron  

Other engines include: Chakra (IE), SpiderMonkey (Mozilla/Firefox), JavaScriptCore (Safari)  

Its because of these different engines and the subtle differences in which they implement the JS Spec that JS behaves differently across browsers.   

# Runtimes
In browsers these objects include the "window" & "dom". 

In nodejs these include "require", "buffers" and "process"

# Cross Language
Can be written in JS, CoffeeScript, Dart or TypeScript

# Cross Platform
Windows, Linux, Mac etc.

# Why created
Ryan Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way. He criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections. From Wikipedia -- https://en.wikipedia.org/wiki/Node.js

# Event Loop Explanation
Even though V8 is single-threaded, the underlying C++ API of Node isn't.

Uses libuv to handle asynchronous events -- Libuv is an abstraction layer for network and file system functionality on both Windows and POSIX-based systems like Linux, Mac OS X, OSS on NonStop and Unix.

When we call something that is a non-blocking operation, Node will call some code that will run concurrently with our javascript code under the hood on its own thread.

Once that thread either throws an error or gets the data it is waiting for, the provided callback gets called with the appropriate parameters

IO operations can be orders of magnitude slower than data processing. Take this for example: SSD-s can have a read speed of 200-730 MB/s - at least a high-end one. Reading just one kilobyte of data would take 1.4 microseconds, but during this time a CPU clocked at 2GHz could have performed 28 000 of instruction-processing cycles.

https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/  
https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm  
https://nodesource.com/blog/understanding-the-nodejs-event-loop  


# Separations of Concerns
Write & Use Small Reusable, Testable Modules

The best code is often times no (or less code).

The more you can reuse, the less you have to test.

# External Dep Handling

Source control works best on "source", and while external dependcies can sometimes be source, its best to manage them separate from our own code so we can more easily upgrade or swap them in and out.

# Dev Team in Sync

One of the biggest issues with the LAMP stack was mirroring your dev environment with production and keeping development environments across all developers in sync easily.


#MVC Chart
Models define our "real world objects"

Routes forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.

Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.

Views (templates) used by the controllers to render the data.


#ACID

In computer science, ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc. In the context of databases, a sequence of database operations that satisfies the ACID properties, and thus can be perceived as a single logical operation on the data, is called a transaction. For example, a transfer of funds from one bank account to another, even involving multiple changes such as debiting one account and crediting another, is a single transaction.

Atomic = All or nothing, if one part fails the entire transaction fails

Consistency = Any transaction will bring the datbase from one valid state to another valid Started

Isolation = esures concurrent execution of transactions results in a system state that would be obtained if transactions were executed sequentially

Durability = once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors.

https://en.wikipedia.org/wiki/ACID

# Key value stores
These databases pair keys to values. An analogy is a files system where the path acts as the key and the contents act as the file. There are usually no fields to update, instead, the entire value other than the key must be updated if changes are to be made. Super Simple

Redis, Memcache

http://www.jamesserra.com/archive/2015/04/types-of-nosql-databases/

# Graph Stores

Graph stores – These excel at dealing with interconnected data. Graph databases consist of connections, or edges, between nodes. Both nodes and their edges can store additional properties such as key-value pairs -- Difficult to scale

Neo4J

# Column Stores
Column stores – Relational databases store all the data in a particular table’s rows together on-disk, making retrieval of a particular row fast. Column-family databases generally serialize all the values of a particular column together on-disk, which makes retrieval of a large amount of a specific attribute fast -- Great for aggregate queries

Cassandra

# Document Stores

Document stores – These databases store records as “documents” where a document can generally be thought of as a grouping of key-value pairs (it has nothing to do with storing actual documents such as a Word document). Keys are always strings, and values can be stored as strings, numeric, Booleans, arrays, and other nested key-value pairs. Values can be nested to arbitrary depths. In a document database, each document carries its own schema — unlike an RDBMS, in which every row in a given table must have the same columns

MongoDB, CouchDB, Firebase, 

# Mongoose Types

Types include: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

# Data validation

Data Validation Includes: a default value, a custom validation function, indicate a field is required, a get function that allows you to manipulate the data before it is returned as an object, a set function that allows you to manipulate the data before it is saved to the database, minimums, maximums, case transforms, trims, regular expressions and enums

# Getting REST

REST is an alternative to other patterns like Remote Procedure Calls, Message Queues and GraphQL

Resources (or objects/models) are exposed, created, modified or deleted through unique URI endpoints and HTTP Method calls	

# HTTP Actions

Now, these are more "guidelines" the REST God's won't smite you if you implement updates using POST or only support PUT, or modify the way they work. Provided you are consistent.


# Client Server

By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

# Stateless

Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.

# Cacheable

Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.

# Uniformity

the same shape of request which is made against a particular resource can reasonably be expected to act the same way against another resource (for instance, the request modifying an attribute on a Photo resource is uniform to that of modifying a similar attribute on an Album resource).

# Layered System

The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.

# Code on Demand 

REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.





 





