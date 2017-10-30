# Intro
Mongodb is a NoSQL database program, MongoDB uses JSON-like documents with schemas.

# Setup
- Download in https://www.mongodb.com/download-center?jmp=nav#community (windows)
- Choose "Windows Server 2008 R2 64-bit and later, with SSL support x64" version
- Install, but choose custom and put files in c:\mongodb folder
- create the folders c:\mongodb\log, c:\mongodb\data, c:\mongodb\data\db
- open cmd as administrator and run
- cd c:\mongodb\bin
- mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --rest --install
- net start MongoDB

# Create a Database and a Collection
	use mycustomers
	db.createCollection('customers') to create a collection called 'customers'

# Insert new record on a collection
	db.customers.insert(
				[
					{first_name:"John", last_name:"Doe"},
					{first_name:"Ed", last_name:"Hob"},
					{first_name:"Steve", last_name:"Smith"},
					{first_name:"Maria", last_name:"Clara", gender:"female"}
				]
			);
	db.customers.find();	show all records in customers collections
	db.customers.find().pretty();	nicer look to show all data in customers collections

# Updating data

	db.customers.update({first_name:"John"}, {first_name:"John", last_name:"Doe", gender:"male"})

or is possible to use:

	db.customers.update({first_name:"Steve"},{$set:{gender:"male"}})

we can also increment numbers with $inc:

	db.customers.update({first_name:"Steve"},{$set:{age:45}}) 	# new field for Steve's age
	db.customers.update({first_name:"Steve"},{$inc:{age:5}})	# incrementing 45 + 5 = 50

unseting field:

	db.customers.update({first_name:"Steve"},{$unset:{age:1}})

updating an unexisting object and inserting it anyways with "upsert: true":

	db.customers.update({first_name:"Mary"}, {first_name:"Mary", last_name:"Samson"},{upsert: true})

update name of field:

	db.customers.update({first_name:"Steve"}, {$rename:{"gender":"sex"}})

# Create user
	db.createUser({
		user: "ed",
		pwd: "1234",
		roles: ["readWrite", "dbAdmin"]
	});

# Commands
- show dbs			: show a list of databases
- db				: show current database
- show collections	: show collections in current database
- show users		: show users in current database
- show profile		: show most recent system.profile entries with time >= 1ms
- use mydatabase	: set current database
