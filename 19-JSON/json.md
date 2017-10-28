		JSON 

Intro
-----

# JavaScript Object Notation
# Lightweight data-interchange format
# Based on a subset of JavaScript
# Easy to read and write
# Often used with AJAX
# Can be used with most modern languages

Data Types
----------

# Number: No difference between integer and floats
# String: String of Unicode characters. Use double quotes
# Boolean: True or false
# Array: Ordered list of 0 or more values
# Object: Unordered collection of key/value pairs
# Null: Empty value

Rules
-----

# Uses key/value pairs - {"name":"Ed"}
# Uses double quotes around KEY and VALUE
# Must use the specified data type
# File type is ".json"
# MIME type is "Application/json"
	MIME type (Multipurpose Internet Mail Extensions) is the mechanism to tell the client the variety of document transmitted: the extension of a file name has no meaning on the web.

Example
-------
	{
		"name": "Ed",
		"age": "28",
		"address": {
			"street": "3 st.",
			"city": "gyn"
		},
		"children": ["Alice", "Arthur"]
	}

Conversions
-----------
	var person = {
		name: "Ed",
		age: "28"
	}

# JS Object to valid JSON
	person = JSON.stringify(person);

# Valid JSON to JS Object
	person = JSON.parse(person);

Getting data from JSON file
---------------------------

# 1 - XMLHttpRequest
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			console.log(xhttp.responseText);
		}
	};
	xhttp.open("GET", "people.json", true);
	xhttp.send();

# 2 - installing node live-server
	$ npm install -g live-server
	$ live-server

