import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { snapType } from "../models/snap-type.type";

@Injectable({
providedIn:"root"
})

export class FaceSnapsServices{
    faceSnaps:FaceSnap[]=[new FaceSnap(
        "salade fritte",
        "Mon meilleur ami depuis toujours",
        new Date(),
        10,
        "https://img.freepik.com/photos-gratuite/poulet-lula-salade-frites-vue-cote_140725-11219.jpg?t=st=1723307806~exp=1723311406~hmac=92df8b7413878707a17b2242374136a4f79df710620e6e8dc95fc1094e68fd12&w=740"
      ),new FaceSnap(
        "plat de poulet ia",
        "Mon meilleur ami depuis toujours",
        new Date(),
        21,
        "https://img.freepik.com/photos-premium/nourriture-delicieuse-plateau_1042628-549543.jpg?w=740"
      ).withLocation('à la montagne'),new FaceSnap(
        "last archiball",
        "Mon meilleur ami depuis toujours",
        new Date(),
        143,
        "https://media.istockphoto.com/id/483724081/fr/photo/rivi%C3%A8re-et-du-paysage-de-la-vall%C3%A9e-de-yosemite-en-californie.jpg?s=2048x2048&w=is&k=20&c=-mkLvlokMY3iVMcEy_jqF5mkp-iGidNWC1X1Ie_ZrJE="
      ),new FaceSnap(
        "crevette",
        "Mon meilleur ami depuis toujours",
        new Date(),
        428,
        "https://img.freepik.com/photos-gratuite/homards-delicieux-fruits-mer-gourmands_23-2151713033.jpg?t=st=1723307986~exp=1723311586~hmac=3a5b70ec635d4d385f2c9857d9f186a1e718e56a7fcba2c2df9acbff39066da0&w=1380"
      ),
      new FaceSnap(
        "sandswitch",
        "Mon meilleur ami depuis toujours",
        new Date(),
        57,
        "https://img.freepik.com/photos-gratuite/savoureux-sandwich-tomates-maison-poivron-planche-decouper-bois-oignons-tomate-frites-tige-couleur-foncee_179666-34119.jpg?t=st=1723308074~exp=1723311674~hmac=26facb2497944a236fda865637516ee491ee19ef7d391cbc0f76e09919cddfa1&w=740"
      ),
      new FaceSnap(
        "sandswitch us",
        "Mon meilleur ami depuis toujours",
        new Date(),
        243,
        "https://img.freepik.com/photos-premium/table-pleine-nourriture-y-compris-burger-frites-burger_883101-14265.jpg?w=740"
      ),
      new FaceSnap(
        "plat de poullet ",
        "Mon meilleur ami depuis toujours",
        new Date(),
        243,
        "https://img.freepik.com/photos-gratuite/steak-bien-cuit-pommes-terre-maison_140725-3989.jpg?t=st=1723308208~exp=1723311808~hmac=54de1f45c61cc5bddcbdc2bdae92fb1c04cbe20a1d342beb24d22d6e6db71531&w=740"
      )];

      getFaceSnaps():FaceSnap[]{
        return [...this.faceSnaps];
      }
      getFaceSnapById(faceSnapId:string):FaceSnap
      {
        const foundFaceSnap =this.faceSnaps.find(faceSnap=>faceSnap.id===faceSnapId)
        if(!foundFaceSnap)
        {
            throw new Error("FaceSnap not Foubd")
        }
        return foundFaceSnap;
      }
      snapFaceSnapById(faceSnapId :string,snapType:snapType):void{
        const faceSnap =this.getFaceSnapById(faceSnapId);
        faceSnap?.snap(snapType);
      }

}