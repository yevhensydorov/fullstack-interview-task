# Moneyhub Tech Test - Investments and Holdings

Moneyhub tech test required adding an endpoint for generating a CSV formatted report showing the values of all user holdings.

## Setup and run the project locally
Clone the project to your local machine
`git clone git@github.com:yevhensydorov/fullstack-interview-task.git`

Go to the project directory
`cd fullstack-interview-task`

Install each (investments, financial companies, admin) services’ dependencies, e.g 
```bash
cd investments
npm install
```

To check the running services each one will need to be started. In each service directory run

```bash
npm start
or
npm run develop
```

The develop command will run nodemon allowing you to make changes without restarting

The services will try to use ports 8081, 8082 and 8083

Use Postman or any API tool of your choice to trigger your endpoints (this is how we will test your new route).

## Tests
To run the tests you can use the command
```bash
cd admin
npm run test
```
It'll launch the Jest test runner. A runner will find a `getUserHoldings` test in the `__tests__` directory and show failed/passed tests in the console. I’ve added a test which checks whether the `getUserHoldings` function generates the right data for the CSV generator.

## New endpoint for the Admin service

I’ve added a new `/generatecsv` endpoint to the Admin service router. <br />The endpoint uses the CSV report from the `getCsvReport()` function and passes it as a payload to the investment service’s POST `investments/export` endpoint. The content type is `application/json
` as was mentioned in the task.

## Task execution process

I’ve decided to start from updation dependencies because from looking at readme and services package.json there was a feeling that the project needed that. I removed the **bodyParser** from the package.json (it comes from the node now). Installed **axios** to use it instead of the **request** library because it’s deprecated (https://github.com/request/request/issues/3142). I also needed to do a small refactor, so services will be using **axios** instead of **request** . I also installed **Jest** for unit testing purposes. <br />

The next thing to do was create a `getUserHoldings ` function and unit test for this logic. I’ve decided to use vanilla js instead of `Ramda` for this purpose. The reason being is that using a vanilla js, in this case, would be more readable for more devs and might be quicker. Unit test checks both happy and falsy flow/passed parameters. 


After that, I needed to get a  `jsonToCsvconverter` function. This function generates a CSV string from the array generated in the previous step (from the `getUserHoldings` function). I also used a vanilla js way of doing that. 

Using mock data for those two functions was not a great idea, so I needed to fetch real data from investments and financial companies services. Also, I decided to create a separate `service` folder for that so the actual route won’t be overloaded with extra logic. I’ve named a helper function `getCsvReport` here. That function calls both services, passes the fetched data to the `getUserHoldings` function and after getting a `userHoldings` value used it in the `jsonToCsvconverter` function. Finally, we return the result of `jsonToCsvconverter`.

With all this logic separated from the actual endpoint, I created a possibility to improve unit and integration testing for this task. I’d done that if I had more time.

As a final step of this task execution process, I’ve added a `/generatecsv` endpoint to the router. The endpoint uses the CSV report from the `getCsvReport()` function and passes it as a payload to the investment service’s POST `investments/export` endpoint. The content type is `application/json` as was mentioned in the task.


## Answers to the following questions

### How might you make this service more secure?
All the data from responses are personal. If an attacker has this type of data (names, investments amount, financial companies) it can be easily accessible for a breach. 

Adding TLS certificates (using HTTPS and validating servers’ identity), SSH keys and authentication can improve secure communication between the services. We can also limit some privilege access scope using authorization. 

Also, patching dependencies is a good practice. The Equifax data breach (https://en.wikipedia.org/wiki/2017_Equifax_data_breach) is a great example of why we need to update dependencies frequently. 

I’d use some SSO gateway microservice with a JWT to secure this application. It’ll help with redirections, handshaking and identifying usernames, roles, etc.

### How would you make this solution scale to millions of records?

Obviously, my solution works just for quick testing purposes. I’d use the asynchronous approach of generating CSV data. I also might use some event-based features which come from cloud services providers (Pub/Sub, sqs queue, etc).

### What else would you have liked to improve given more time?

There are a couple of things I’d like to improve if have more time. 
1. Saving the data in some sort of data store. I’d use some light-way solution in this particular case as there is not much data circulated between services.
2. Better logging for debugging purposes. Using additional services like DataDog or Sentry will definitely improve both the financial cost of debugging issues (such services can pinpoint the cons of your apps) and the developer’s experience (less pain with manual debugging in local env).
3. Error handling has some improvements in terms of adding catch blocks to the endpoints handlers, but it’s not perfect. Also, crucial functions such as `csvGenerator` need better error handling for falsy cases and unhappy flow.
4. Request and response validations. This helps to validate the data flow between services. We can make sure that we’re sending/getting the right data needed.
5. Testing. There is a lack of both unit and integrations (or end-to-end with stubs of mocks) tests in this project.
6. Deployments. I’d split this project into three different repositories and deploy them to some free services like Netlify if I had more time.

## Existing routes
We have provided a series of routes 

Investments - localhost:8081
- `/investments` get all investments
- `/investments/:id` get an investment record by id
- `/investments/export` expects a csv formatted text input as the body

Financial Companies - localhost:8082
- `/companies` get all companies details
- `/companies/:id` get company by id

Admin - localhost:8083
- `/investments/:id` get an investment record by id

## Added route
Admin - localhost:8083
- `/generatecsv` POST request to the Investments `/investments/export` endpoint
