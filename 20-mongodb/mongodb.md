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