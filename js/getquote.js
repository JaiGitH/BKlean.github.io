function sendResponse() {
    console.log('Hello');
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jaiprakash4024@gmail.com",
        Password: "B16076AE9C97A08F28FA37EFAA2CBD573400",
        To: 'nprajapati8788@gmail.com',
        From: "jaiprakash4024@gmail.com",
        Subject: "Query for Car Clean",
        Body: "Name :" + document.getElementById("Cust_Name").value +
            "<br> Email :" + document.getElementById("Cust_Email").value +
            "<br> Mobile :" + document.getElementById("Cust_Mobile").value +
            "<br> Description :" + document.getElementById("AnyDescript").value
    }).then(
        message => alert(message)
    );
}