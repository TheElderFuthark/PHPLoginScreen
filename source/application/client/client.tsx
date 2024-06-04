import React from "react";
import ReactDOM from "react-dom/client";


import Index from "./index";


export default class Render {
	renderClient(): void {
		if(typeof(window) !== "undefined") {
			const __root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);	
			__root.render(<Index />);
		}	
	
	}

}