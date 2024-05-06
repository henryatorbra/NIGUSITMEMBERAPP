
import qrcode from "qrcode";

async function  getqrcodeController (req, res){
    console.log("getqrcodeController was hit")
    const email = req.session.email
    const name = `${req.session.firstname} ${req.session.lastname}`


    try {
    const qrcodeImage = await qrcode.toDataURL(email)
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

