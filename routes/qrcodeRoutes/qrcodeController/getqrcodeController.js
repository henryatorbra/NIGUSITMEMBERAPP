
import qrcode from "qrcode";
import dotenv from "dotenv";
dotenv.config();

const IP = process.env.IP_ADDRESS;
const hostname = process.env.HOST_NAME;

async function  getqrcodeController (req, res){
    //console.log("getqrcodeController was hit")
    const email = req.session.email
    const name = `${req.session.firstname} ${req.session.lastname}`
    const url = `${hostname}/qrcode/userfromqrcode?email=${email}`


    try {
    const qrcodeImage = await qrcode.toDataURL(url)
    res.status(200).render('QR code page',{
        qrcode: qrcodeImage,
        name: name ,
        email: email
    })
    } catch (error) {
        res.staus(400).send("There was an error");
    }
    
}

export default getqrcodeController; 

