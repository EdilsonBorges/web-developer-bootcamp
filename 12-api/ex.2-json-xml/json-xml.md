XML - extended markup language
<person>
    <age>30</age>
    <name>Ted</name>
    <city>N.Y.</city>
</person>
<!--example: https://developer.yahoo.com/weather/-->
https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

JSON - javaScript object notation
{
    "person": {
        "age": "30",
        "name": "Ted",
        "city": "N.Y."
    }
}
<!--example: https://developer.yahoo.com/weather/-->
https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys