const __render = () => {
	const app = new window.clientApp.default();
	app.renderClient();
	return app;
};	


console.log("" + __render());