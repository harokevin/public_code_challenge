# Kevin Haro Notes
-[X] Front End that fulfills user MVP requests

    -[X] Look up farms by name

    -[X] Find farms by revenue

    -[X] View field details for a given farm

-[X] Basic Backend with API communication with Front End

## -[X] Assumptions and considerations for design choices

I noticed that this is on an older version of React. I assumed that was intentional so I decided to work off of it rather than update the version.

I assumed that the primary concern was to display the data so I went with cards to give each farm an individual feel. A table would also have been suitable. Based on the "Look up farms by name" requirement I assumed there would be some sort of input field and search box. 

The requirement to "Find farms by revenue" was ambiguous so I defaulted so a simple backend sort. Had this been real work I would have asked for clarification. I thought about implementing it as a range with two input values or higher or lower toggles for a single input value. I my implementation was reasonable after analyzing the sample data.

## -[X] Future direction if you had time to work on project for 1 more day? 1 more week?
## 1 More Day:
-[ ] Improve the UI

-[ ] Improve the API to handle partial name search

-[ ] Improve the API to handle different types of search by revenue

-[ ] Testing. I did manual testing during development but was unable to get a testing framework. I was having problems installing Jest and Supertest and thought the best idea would be to prioritize the MVP.

-[ ] Add Typescript.

## 1 More Week:
-[ ] Lots more testing if it is a long lived project.

-[ ] Ask about other features or requests from users.

-[ ] Migrate to a newer version of React.

-[ ] Document the API for use by other developers



# Farm App Trace Genomics Full Stack Tech Assessment 

## Challenge
You've been asked to create a way for users to easily view farm information.
After doing user research, you've determined that the MVP feature requests are:
- Look up farms by name
- Find farms by revenue
- View field details for a given farm

Using the farm_data.json file provided, create a basic Front End and Back End to support your users. An initial React/Express structure is provided, but feel free to use standard boilerplate or backend structure. 

We expect this project to take around 3-4 hours. As this is a short amount of time for the  given scope, a persistence layer is not required and a FE library  (bootstrap/material-ui/etc) is recommended to help support making your FE look great. Code comments are appreciated to better understand your decision making process.

### Deliverables
- Front End that fulfills user MVP requests above
- Basic Backend with API communication with Front End
- Simple test suite
- Readme 
    - Instructions on how to run application and tests
    - Assumptions and considerations for design choices
    - Future direction if you had time to work on project for 1 more day? 1 more week?
