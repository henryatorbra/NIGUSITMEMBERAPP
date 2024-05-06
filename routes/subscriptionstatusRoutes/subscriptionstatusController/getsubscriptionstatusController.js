
import datetimeDifference from "datetime-difference";


async function getsubscriptionstatusController (req, res, next){

    // var dateone = new Date("12/07/2016");
  

    function subscriberState (){
        var dateone = new Date(Date.now());
        const subscribedAtDate = req.session.subscribedAt;
        //
            console.log(dateone.toLocaleString())

            var subscribedState;
            var remainingTime;
       if (subscribedAtDate == null) {
            subscribedState = "INACTIVE SUBSCRIBER"
            remainingTime = " ";
        }else if (subscribedAtDate != null){
        const datetimeDifferenceResult = datetimeDifference(dateone,dateone);
            if (datetimeDifferenceResult.months >= 1){
                subscribedState = "DEACTIVATED SUBSCRIBER";
                remainingTime = " ";
            }else {
                subscribedState = "ACTIVE SUBSCRIBER";
                var newdate = new Date(dateone)
                newdate.setMonth(newdate.getMonth() + 1);
                console.log(newdate.toDateString())


            }
            console.log(datetimeDifferenceResult.years)
         }
        

         return {subscribedState, newdate :newdate ? ` Until ${newdate.toDateString()}`: remainingTime};
    };

    const subscribedState = subscriberState();
    //console.log(req.session);
    res.render('Subscription Status Page', {
        name:`${req.session.firstname} ${req.session.lastname}`,
        email: `${req.session.email}`,
        subscriberState: subscribedState.subscribedState,
        newdate: subscribedState.newdate
    })
};

export default getsubscriptionstatusController;
