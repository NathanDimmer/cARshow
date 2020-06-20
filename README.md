# cARshow
## Inspiration

The COVID-19 pandemic, and the lockdowns imposed to combat it, have wreaked havoc on the global economy. One of the hardest hit industries is also the largest one in Michigan, where we live: the automotive industry. Factories have been shut down, and dealerships have been closed. 

This means there are drastically fewer cars for customers to choose from. It also means there isn’t a way for customers to see those cars to know if they want to buy them in the first place. Even when dealerships are allowed to reopen, safety regulations may prevent them from showing real cars because of the difficulty in disinfecting all of the soft inside surfaces after every customer.

That’s why we created cAR showroom. Our augmented reality app allows dealerships to upload detailed 3D car models so that customers can get close-up looks at the cars they want in real scale, in the real world, from the safety of their own homes.

## What it does

Because of the intensely digitized nature of the car design and manufacturing process, every car manufacturer has highly detailed 3D models of all of their vehicles. With the COVID-19 pandemic limiting physical access to demo vehicles, cAR showroom allows car manufacturers and dealerships to use those 3D models to move their showrooms online using AR.

Dealerships sign up on our website, and upload a 2D picture of each vehicle, its 3D model, and information such as the Make, Model, and Year. We use that information to create a virtual showroom for each dealership, complete with its own unique web address. The dealerships can then send customers to those virtual showrooms, where they can sort through the available cars, and view models at real scale using AR.

## How we built it

Our app is built using React.js and Material UI for the front end, Firebase for database and hosting, and echoAR for the 3D models. The dealerships enter the information about each of their cars, which is sent to the Firebase database, and uploaded to echoAR. We then pull the data down to the publicly facing website, where we use the echoAR models with Apple’s AR Kit to display the cars in AR!

## Challenges we ran into

This is one of the most unique UIs that we’ve made using React and Material-UI, so we spent a lot of time customizing Material-UI to be the way we wanted, while still maintaining accessibility!

We also had to figure out how to get a unique link for each dealership. Normally, we would have used a package like nanoid to create a random string to guarantee uniqueness, but in doing so the link would not have been readable for the customer. Instead, we chose to use the dealership name, but we needed to safely encode it as a url. It turns out, however, that Firestore does not like ‘%’ in document ids, so we modified the string after being encoded to remove special characters that are valid in a url, but not in a Firestore document id.

## Accomplishments that we're proud of

We’re really happy with how the final UI turned out! It really fits the idea and message of our hack, and looks super polished!
We’re also glad we were able to get echoAR working! We’re really happy with how well model upload and download is working, and echoAR makes dealing with the 3D models super easy.

## What we learned

This was definitely a learning experience. Specifically, we learned a TON about how Material-UI works. We needed to go in depth with the grid to create the more customized layouts, and created our own card design, so that we could use our transparent grey motif. We also learned how to use some new components that we had never used before, such as the file drop container, and the autocomplete dropdown with typeahead for the search. We also worked a lot more with Material-UI themes, and while a lot of our changes never made it into the final app, we feel a lot more comfortable tweaking Material-UI to better suit the feel of our project.

## What's next for cAR showroom

- Expand the user base to: all car dealerships, including used cars; car shows (i.e. North American International Auto Show), etc.
- Add searchable features, such as gas mileage and option packages
- Add the ability for car enthusiasts to upload 3D models of their cars to show off
- Include the option to upload cars before an event, such as the Woodward Dream Cruise, an antique car parade
- Further integrate the app by adding Buy buttons with a link back to the dealership’s site
