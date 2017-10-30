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
	db.customers.drop() to drop the collection

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

updating or creating new field of objects address and arrays of memberships:

	db.customers.update({first_name:"Steve"},{$set:{address:{street: "Al 3",state:"GO",city:"gyn"}},$set:{memberships:["mem1", "mem2"]}})


	db.customers.update({first_name:"Steve"},{$set:{memberships:["mem1", "mem2"]}})

unseting field:

	db.customers.update({first_name:"Steve"},{$unset:{age:1}})

updating an unexisting object and inserting it anyways with "upsert: true":

	db.customers.update({first_name:"Mary"}, {first_name:"Mary", last_name:"Samson"},{upsert: true})

update name of field:

	db.customers.update({first_name:"Steve"}, {$rename:{"gender":"sex"}})

# Find record

	db.customers.find() : show all records
	db.customers.find({age:45}) : show all records that match field age = 45
	db.customers.find({age:45},{first_name:"Ed"}) : show all records that match two fields
	db.customers.find({age:{$gt:40}}) : show all records that has age greater than 40
	db.customers.find({age:{$lt:100}}) : show all records that has age lower than 40
	db.customers.find({age:{$gte:40}}) : show all records that has age greater or equal to 40
	db.customers.find({age:{$lte:100}}) : show all records that has age lower or equal to 40
	db.customers.find({"address.city":"gyn"}) : show all records that has object address.city equals to gyn
	db.customers.find({memberships:"mem1"}) : show all records array memberships that has mem1
	db.customers.find({memberships:/mem/}) : show all records that contains "%mem%" in memberships
	db.customers.find({memberships:/^mem/}) : show all records that contains "mem%" in memberships

# Sort record

	db.customers.find({memberships:/mem/}).sort({last_name:1}).pretty() : ascending order
	db.customers.find({memberships:/mem/}).sort({last_name:-1}).pretty() : descending order

# Count record

	db.customers.find({memberships:/mem/}).count()

# Limit record
	
	db.customers.find({memberships:/mem/}).limit(1)	

# ForEach with MongoDB

	db.customers.find().forEach(
			function(doc){
				print("Customer Name: "+doc.first_name)
			}
		)


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

