
const GenerateOtp = (): number => {
    try{
        let otp = Math.floor(100000 + Math.random() * 900000)

    return otp
    }
    catch(error){
        throw new Error(error)
    }
}

export default GenerateOtp