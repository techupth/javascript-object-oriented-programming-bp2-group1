class EmailNotification {
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(email){
        console.log("Notification has been sent to "+email)
    }
}

class SMSNotification {
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(phoneNumber){
        console.log("Notification has been sent to "+phoneNumber)
    }
}
let jedEmail = new EmailNotification("alskoo35@gmail.com","17.30","Hello World","TechUp@thailand.com")
let jedPhone = new SMSNotification("0969396243","18.00","Hello World","0987654321")
jedEmail.send("techUp@thailand.com")
jedPhone.send("0987654321")