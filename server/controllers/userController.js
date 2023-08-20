const nodemailer = require('nodemailer')
const User = require('../models/schema')
const {PythonShell} = require("python-shell");
const { spawn } =require('child_process');
function generateOTP() {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

async function sendOTPByEmail(email, otp) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    });

    const mailOptions = {
        from: process.env.email,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP email sent successfully');
    } catch (error) {
        console.log('Error sending OTP email', error);
    }
}

exports.loginUser = async(req, res) => {
    try {
        const { emailId, password} = req.body;
        let user = await User.findOne({ emailId, password });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const newOTP = generateOTP();
        user.otp = newOTP;
        user.otpExpiration = Date.now() + 5 * 60 * 1000;

        await sendOTPByEmail(emailId, newOTP);

        user = await user.save();

        // Return the token and badgeID to the client
        res.json({ message: 'OTP sent successfully', emailId: user.emailId, name : user.firstName });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.verifyOTP = async(req, res) => {
    try {
        let { emailId, otp } = req.body;

        const user = await User.findOne({ emailId });
        if (!user) {
            return res.status(250).json({ error: 'User not found' })
        }
        
        console.log(user);
        console.log('Provided OTP:', otp);
        console.log('Stored OTP:', user.otp);

        if (user.otp !== otp || Date.now() > user.otpExpiration) {
            return res.status(250).json({ error: 'Invalid otp' });
        }

        user.otp = undefined;
        user.otpExpiration = undefined;

        await user.save();

        res.json({ emailId: user.emailId, firstName: user.firstName  });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.signup = async(req, res) => {
    try{
        const { emailId , password, password0 } = req.body;

        const admin = await User.findOne({ emailId:emailId });
        if(admin){
            return res.status(250).json({error:'User with same email id already exists'});
        }
        if(password!==password0){
            return res.status(250).json({error:'Passwords do not match'});
        }
        const {firstName, surname, age, dob, phoneNo, gender} = req.body;
        const user = new User({
            emailId:emailId,
            password:password,
            firstName:firstName,
            surname:surname,
            phoneNo:phoneNo,
            gender:gender,
            age:age,
            dob:dob
        });
        await user.save();
        res.json({ message: 'User added successfully', name: user.firstName, emailId: user.emailId });
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error Signing up'});
    }
};

exports.searchQuery = async(req, res) => {
    try{
        const { query } = req.params;
        console.log('The query is ',query);
        // let options = {
        //     scriptPath:" C:\\Users\\hp\\OneDrive\\Desktop\\FlipkartGrid\\server",
        //     args:[query]
        // };
        console.log("Going")
        const pythonScript = spawn('python', ['getItems.py',query]);
        console.log("spawn done")
        let data1="";
        pythonScript.stdout.on('data', (data)=>{
            data1+=data.toString();
            console.log(data);

        });
        
        pythonScript.stderr.on('data', (data) => {
            console.error(`Python script error: ${data}`);
        });

        pythonScript.on('close',(code) => {
            console.log("code ",code);
            console.log(data1);
            res.json({data:data1});
        });
    } catch(error){
        console.log(error);
        res.status(250).json({error:'No products to show'});
    }
};

