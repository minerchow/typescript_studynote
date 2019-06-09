class People {
    static names:string;
    static say(e:string):void{
        console.log("say:"+e)
    }
}

People.names = "aaa";
console.log(People.names);
People.say("some");