import Axios from "axios";

const CreateAccount = async ( accObj ) => {
    console.log(accObj);

    const res = await Axios.post("http://localhost:3003/api/account/createNewAccount", accObj);
    const newAccountId = res.data;
    console.log(newAccountId);
}

export { CreateAccount }