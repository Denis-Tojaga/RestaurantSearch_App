import axios from "axios";

export default axios.create({

    //bez / na kraju
    //ova instanca ce uvijek imate baseURL nakacen na request mi cemo samo dodavati ono sto specificno trazimo
    baseURL: "https://api.yelp.com/v3/businesses"

});