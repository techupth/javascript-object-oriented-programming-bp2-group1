class Notification {
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log("Notification has been sent to "+this.receiver)
    }
}

class EmailNotification extends Notification{
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver)
    }
}

class SMSNotification extends Notification{
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver)
    }
}
let jedEmail = new EmailNotification("alskoo35@gmail.com","17.30","Hello World","TechUp@thailand.com")
let jedPhone = new SMSNotification("0969396243","18.00","Hello World","0987654321")
jedEmail.send()
jedPhone.send()