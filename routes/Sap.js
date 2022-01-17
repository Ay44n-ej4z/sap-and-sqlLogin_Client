router.get('/sapUserDetails', async(req, res) => {
    try {
        function pad_with_zeroes(number, length) {
    
            var my_string = '' + number;
            
            while (my_string.length < length) {
                my_string = '0' + my_string;
                
            }
            
        
            return my_string;
            
        }
        var num ;
        var l;
        if(num == 1 || 2 ||3 || 4 || 5 || 6 || 7 || 8 || 9 ){
                l = 10 
            }else{
        
            }
        console.log(pad_with_zeroes(10, l));
        
        // const data = await CallBAPI("BAPI_VENDOR_GETDETAIL", {
        //     VENDORNO: "0000000015",
        // });
        const data = await CallBAPI("BAPI_USER_GETDETAIL",{
            USERNAME: 'P9TRNG',
        })
        res.send(data)
    } catch (err) {
        res.status(500).send(err);
    }

})
