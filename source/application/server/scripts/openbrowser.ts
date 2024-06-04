import Open from "open";


const openWindow = async () => {
    try {
        await Open("http://localhost:4091/");
    } catch(e: any) {
        return <number> e;
    }


    return 0;
};


console.log("" + openWindow());