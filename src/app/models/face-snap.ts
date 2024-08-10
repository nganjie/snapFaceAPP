import { snapType } from "./snap-type.type";

export class FaceSnap{

    location?:string;
    id!:string;
    constructor(public title:string,
                public description:String,
                public createAt:Date,
                public snaps:number,
                public imageUrl:String){
                    this.id=crypto.randomUUID().substring(0,8);
                }
    

    snap(snapType:snapType){
        if(snapType==="snap")
        {
            this.addSnaps();
        }else if(snapType==="unsnap")
        {
            this.removeSnap();
        }
    }
    addSnaps():void{
        this.snaps++;
    }
    removeSnap():void
    {
        this.snaps--;
    }
    setLocation(location:string):void{
        this.location=location;
    }
    withLocation(location: string):FaceSnap{
        this.setLocation(location);
        return this;
    }
}