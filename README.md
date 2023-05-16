# TERRIBLY TINY TAILS ASSIGNMENT DETAILS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Project is hosted on netlify

Link to the hosted application
[Click LINK](https://regal-tiramisu-d75bb9.netlify.app/)

or copy the below Link:
https://6460a8bdef063b68399ff184--regal-tiramisu-d75bb9.netlify.app/


## NPM MODULES USED

For Creating the histogram I have used npm third party library:
1. chartjs
2. react-chartjs-2
3. Axios


## Compenents Used


In the project directory, we have 3 Components which are as follows:

### `Navbar`

This Component is used to display the title of the page
that is ASSIGNMENT OF TERRIBLY TINY TAILS

### `Home`

This Component is the heart of our application.
It consist of two buttons Submit and Export
Whenever the user click on Submit button. We fetch
data from the api using axios and then
start counting 
the frequency of each character and storing does value in two useState object

1. DataSet: Data to pass the Bargraph Component to display histogram.
2. Csv: This state store the CSV file fromated data so that
Whenever User click on Export, They can
download a .CSV File

### `BarGraph`

This component is used to create the histogram whenever user
click on submit button. It accept one
property that is chartData that is used for building the chart
and is cruical.


## Thank You
