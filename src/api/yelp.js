import axios from "axios";

export default axios.create({

    //bez / na kraju
    //ova instanca ce uvijek imate baseURL nakacen na request mi cemo samo dodavati ono sto specificno trazimo
    //yelp.get("/search")

    baseURL: "https://api.yelp.com/v3/businesses",
    //druga stvar je da uspostavimo autentifikaciju sa API a to radimo kroz headers objekat koji zahtjeva API key, sintaksa je Bearer + space + API key
    headers:{
        Authorization: "Bearer 7SWYQ0eiT20dCymd3Mr4gtsgybt_3RLvOOps2FC4dXWXE24tfy01vqs_XW3dgLngEk8CkiTSwRlY6AS6qSwZx-xVBHMgQj8H2W1tBNwhhrMEqU5yu8a__7nMUmVCYHYx"
    }
});