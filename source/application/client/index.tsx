import React from "react";
import Cookies from "js-cookie";


export default class Index extends React.Component {	
	state: any = {
		usr: "",
		pss: "",
		home: "hidden",
		login: "visible"
	};


	render(): any {
		const cookieLoggedIn = Cookies.get("loggedin");
		if(cookieLoggedIn === "logged in") {
			this.setState({
				home: "visible",
				login: "hidden"
			});
		} else if(cookieLoggedIn !== "#") {
			document.cookie = "loggedin=#";
		} 


		return 	(<div><section style={{visibility: this.state.login}}>
				<form className="FormLogin">
					<input className="FormUser" 
						type="text"				
						onChange={(e: any) => { 
							this.setState({usr: e.target.value}); }}
						placeholder="Username/email... " />
				
				
					<input className="FormPass" 
						type="password"
						autoComplete="true"				
						onChange={(e: any) => { 
							this.setState({pss: e.target.value }) }}
						placeholder="Password... " />		
				
	
					<input className="FormLoginButton"
						id="btnLogin"
						type="button"
						onClick={() => { // Sets cookies
							document.cookie = "usr=" + this.state.usr;
							document.cookie = "pss=" + this.state.pss;
							window.location.reload();											
						}}	value="Login" /></form></section>


		<section style={{visibility: this.state.home}}>
		<h1>Home page!</h1></section></div>);
	}

}