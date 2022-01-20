# React project
1. npx create-react-app your-project-name
2. go into the project, install dependencies (npm install axios react-router-dom@5)
3. npm start (to make sure the server is running)
4. Understand the components you need. Create all the components (rafce for the backbone of the components)
	- create /views folder and /components folder
	- views are the parent companents for each wireframe, components are the children components
5. start changing app.js to display components

## FORMS
### INPUT
1. add state variable for the input (const [name, setName] =  useState(""))
2. onChange for the input (onChange = {e=> setName(e.target.value)})

### SUBMIT
3. add submitHandler  (with e.preventDefault())
4. attach onSubmit = {submitHandler} for <form> tag

### Grab API (axios)
`axios.get(`URL`)
	.then(res=> {
		//successful, work with the res (usually.. res.data)
	})
	.catch(err=>{
		//unsuccessful , got the error in the URL
	})`

### useEffect (Do the function when the page loads)
useEffect(()=>{
	// whatever you want to do when the page is loaded
},[]) --> if the variable inside the array changed, useEffect will run the function again


## ROUTER
#### app.js
import {BrowserRouter, Link, Switch, Route } from "react-router-dom"

	<BrowserRouter>
		<Link to ="/about"> About </Link>  
		<Switch>  
			<Route path="/about">  
				<About />  
			</Route> 
			<Route path="/:keyword">  
				<Keyword />  
			</Route> 
		</Switch>
	</BrowserRouter>

1. Link -- similar to a tag
2. Switch -- if/else statement.. if it fits the first, go to the first
3. Route -- if the path fits, render the component


#### To grab params , inside component
import {useParams} from "react-router-dom"
const {keyword} = useParams{}

#### To redirect  

import {useHistory} from "react-router-dom"
const history = useHistory()

history.push("REDIRECT URL")



